const fileService = require('./fileService');

let dataFilePath;

const init = (filePath) => {
  dataFilePath = filePath;
};

const findAllDishes = (title, price) => {
  const items = fileService.readData(dataFilePath);
  let filtered = items;

  if (title) {
    filtered = filtered.filter((item) =>
      String(item.title || '').toLowerCase().includes(String(title).toLowerCase())
    );
  }

  if (price !== undefined && !Number.isNaN(Number(price))) {
    filtered = filtered.filter((item) => Number(item.price) === Number(price));
  }

  return filtered;
};

const findDishById = (id) => {
  const items = fileService.readData(dataFilePath);
  return items.find((item) => Number(item.id) === Number(id));
};

const createDish = (itemData) => {
  const items = fileService.readData(dataFilePath);
  const newId = items.length > 0 ? Math.max(...items.map((item) => Number(item.id))) + 1 : 1;
  const newItem = { id: newId, ...itemData };
  items.push(newItem);
  fileService.writeData(dataFilePath, items);
  return newItem;
};

const updateDish = (id, itemData) => {
  const items = fileService.readData(dataFilePath);
  const index = items.findIndex((item) => Number(item.id) === Number(id));

  if (index === -1) {
    return null;
  }

  items[index] = { ...items[index], ...itemData, id: Number(id) };
  fileService.writeData(dataFilePath, items);
  return items[index];
};

const removeDish = (id) => {
  const items = fileService.readData(dataFilePath);
  const filteredItems = items.filter((item) => Number(item.id) !== Number(id));

  if (filteredItems.length === items.length) {
    return false;
  }

  fileService.writeData(dataFilePath, filteredItems);
  return true;
};

module.exports = {
  init,
  findAllDishes,
  findDishById,
  createDish,
  updateDish,
  removeDish,
};
