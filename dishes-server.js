const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE_PATH = path.join(__dirname, "example-dishes-db.json");

app.use(express.json());

const readDishes = () => {
  try {
    const fileData = fs.readFileSync(DATA_FILE_PATH, "utf8");
    const parsedData = JSON.parse(fileData);
    return Array.isArray(parsedData.dishes) ? parsedData.dishes : [];
  } catch (error) {
    console.error("Data read error:", error);
    return [];
  }
};

const writeDishes = (dishes) => {
  const data = {
    dishes,
    $schema: "./node_modules/json-server/schema.json",
  };

  fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2), "utf8");
};

const normalizePriceValue = (value) => {
  const digitsOnly = String(value ?? "").replace(/[^\d]/g, "");
  return digitsOnly ? Number(digitsOnly) : null;
};

app.get("/dishes", (req, res) => {
  const { title, price, priceValue } = req.query;
  let dishes = readDishes();

  if (title) {
    dishes = dishes.filter((dish) =>
      String(dish.title || "").toLowerCase().includes(String(title).toLowerCase()),
    );
  }

  const normalizedPrice = normalizePriceValue(priceValue ?? price);
  if (normalizedPrice !== null) {
    dishes = dishes.filter((dish) => {
      const dishPrice = dish.priceValue ?? normalizePriceValue(dish.price ?? dish.text);
      return Number(dishPrice) === normalizedPrice;
    });
  }

  res.json(dishes);
});

app.get("/dishes/:id", (req, res) => {
  const dish = readDishes().find((item) => String(item.id) === String(req.params.id));

  if (!dish) {
    res.status(404).json({ error: "Dish not found" });
    return;
  }

  res.json(dish);
});

app.post("/dishes", (req, res) => {
  const dishes = readDishes();
  const maxId = dishes.reduce((maxValue, dish) => {
    const numericId = Number(dish.id);
    return Number.isFinite(numericId) ? Math.max(maxValue, numericId) : maxValue;
  }, 0);

  const newDish = {
    ...req.body,
    id: String(maxId + 1),
  };

  dishes.push(newDish);
  writeDishes(dishes);
  res.status(201).json(newDish);
});

app.patch("/dishes/:id", (req, res) => {
  const dishes = readDishes();
  const dishIndex = dishes.findIndex((item) => String(item.id) === String(req.params.id));

  if (dishIndex === -1) {
    res.status(404).json({ error: "Dish not found" });
    return;
  }

  dishes[dishIndex] = {
    ...dishes[dishIndex],
    ...req.body,
    id: dishes[dishIndex].id,
  };

  writeDishes(dishes);
  res.json(dishes[dishIndex]);
});

app.delete("/dishes/:id", (req, res) => {
  const dishes = readDishes();
  const nextDishes = dishes.filter((item) => String(item.id) !== String(req.params.id));

  if (nextDishes.length === dishes.length) {
    res.status(404).json({ error: "Dish not found" });
    return;
  }

  writeDishes(nextDishes);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Dishes API is running at http://localhost:${PORT}`);
});
