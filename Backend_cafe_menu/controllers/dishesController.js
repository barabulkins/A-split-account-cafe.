const dishesService = require('../services/dishesService');

const getAllDishes = (req, res) => {
  const { title, price } = req.query;
  const items = dishesService.findAllDishes(title, price !== undefined ? Number(price) : undefined);
  res.json(items);
};

const getDishById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = dishesService.findDishById(id);

  if (!item) {
    return res.status(404).json({ error: 'Позиция меню не найдена' });
  }

  res.json(item);
};

const createDish = (req, res) => {
  const { src, title, text, modelPath = null, price, description = '', composition = '', nutrition = '' } = req.body;

  if (!src || !title || price === undefined) {
    return res.status(400).json({ error: 'Не все поля заполнены (src, title, price)' });
  }

  const newItem = dishesService.createDish({
    src,
    title,
    text: text || '',
    modelPath,
    price: Number(price),
    description,
    composition,
    nutrition,
  });

  res.status(201).json(newItem);
};

const updateDish = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const patchData = { ...req.body };
  if (patchData.price !== undefined) {
    patchData.price = Number(patchData.price);
  }

  const updatedItem = dishesService.updateDish(id, patchData);

  if (!updatedItem) {
    return res.status(404).json({ error: 'Позиция меню не найдена' });
  }

  res.json(updatedItem);
};

const deleteDish = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const success = dishesService.removeDish(id);

  if (!success) {
    return res.status(404).json({ error: 'Позиция меню не найдена' });
  }

  res.status(204).send();
};

module.exports = {
  getAllDishes,
  getDishById,
  createDish,
  updateDish,
  deleteDish,
};
