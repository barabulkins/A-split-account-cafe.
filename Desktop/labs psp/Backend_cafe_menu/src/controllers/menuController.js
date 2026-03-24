const menuService = require('../services/menuService');

const getAllItems = (req, res) => {
    const { title } = req.query;
    const items = menuService.findAll(title);
    res.json(items);
};

const getItemById = (req, res) => {
    const id = parseInt(req.params.id);
    const item = menuService.findOne(id);
    if (!item) {
        return res.status(404).json({ error: 'Позиция меню не найдена' });
    }
    res.json(item);
};

const createItem = (req, res) => {
    const { src, title, text, modelPath } = req.body;
    if (!src || !title || !text || !modelPath) {
        return res.status(400).json({ error: 'Не все поля заполнены (src, title, text, modelPath)' });
    }
    const newItem = menuService.create({ src, title, text, modelPath });
    res.status(201).json(newItem);
};

const updateItem = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = menuService.update(id, req.body);
    if (!updatedItem) {
        return res.status(404).json({ error: 'Позиция меню не найдена' });
    }
    res.json(updatedItem);
};

const deleteItem = (req, res) => {
    const id = parseInt(req.params.id);
    const success = menuService.remove(id);
    if (!success) {
        return res.status(404).json({ error: 'Позиция меню не найдена' });
    }
    res.status(204).send();
};

module.exports = {
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem
};