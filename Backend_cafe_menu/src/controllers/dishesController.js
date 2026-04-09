const dishesService = require('../services/dishesService');

const getAllDishes = (req, res) => {
    const { title, price } = req.query;
    const items = dishesService.findAllDishes(title, price ? Number(price) : undefined);
    res.json(items);
};

const getDishById = (req, res) => {
    const id = parseInt(req.params.id);
    const item = dishesService.findDishById(id);
    if (!item) {
        return res.status(404).json({ error: 'Позиция меню не найдена' });
    }
    res.json(item);
};

const createDish = (req, res) => {
    const { src, title, text, modelPath, price } = req.body;
    if (!src || !title || !text || !modelPath || price === undefined) {
        return res.status(400).json({ error: 'Не все поля заполнены (src, title, text, modelPath, price)' });
    }
    const newItem = dishesService.createDish({ src, title, text, modelPath, price });
    res.status(201).json(newItem);
};

const updateDish = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = dishesService.updateDish(id, req.body);
    if (!updatedItem) {
        return res.status(404).json({ error: 'Позиция меню не найдена' });
    }
    res.json(updatedItem);
};

const deleteDish = (req, res) => {
    const id = parseInt(req.params.id);
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
    deleteDish
};