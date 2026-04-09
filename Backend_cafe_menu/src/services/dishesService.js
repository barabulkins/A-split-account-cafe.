const fileService = require('./fileService');

let dataFilePath;

const init = (filePath) => {
    dataFilePath = filePath;
};

const findAllDishes = (title, price) => {
    const items = fileService.readData(dataFilePath);
    let filtered = items;
    if (title) {
        filtered = filtered.filter(item =>
            item.title.toLowerCase().includes(title.toLowerCase())
        );
    }
    if (price !== undefined && !isNaN(price)) {
        filtered = filtered.filter(item => item.price === price);
    }
    return filtered;
};

const findDishById = (id) => {
    const items = fileService.readData(dataFilePath);
    return items.find(item => item.id === id);
};

const createDish = (itemData) => {
    const items = fileService.readData(dataFilePath);
    const newId = items.length > 0
        ? Math.max(...items.map(i => i.id)) + 1
        : 1;
    const newItem = { id: newId, ...itemData };
    items.push(newItem);
    fileService.writeData(dataFilePath, items);
    return newItem;
};

const updateDish = (id, itemData) => {
    const items = fileService.readData(dataFilePath);
    const index = items.findIndex(i => i.id === id);
    if (index === -1) return null;
    items[index] = { ...items[index], ...itemData };
    fileService.writeData(dataFilePath, items);
    return items[index];
};

const removeDish = (id) => {
    const items = fileService.readData(dataFilePath);
    const filtered = items.filter(i => i.id !== id);
    if (filtered.length === items.length) return false;
    fileService.writeData(dataFilePath, filtered);
    return true;
};

module.exports = { init, findAllDishes, findDishById, createDish, updateDish, removeDish };