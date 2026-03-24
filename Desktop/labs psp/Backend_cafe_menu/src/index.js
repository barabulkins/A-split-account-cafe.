const express = require('express');
const path = require('path');
const menuRouter = require('./routes/menu');
const menuService = require('./services/menuService');

const app = express();
const PORT = 3000;

const DATA_FILE_PATH = path.join(__dirname, 'data/menu.json');
menuService.init(DATA_FILE_PATH);

// 1. Парсинг JSON-тела запроса
app.use(express.json());

// 2. Логирующий middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// 3. Маршруты
app.use('/menu', menuRouter);

// 4. Обработка 404
app.use((req, res) => {
    res.status(404).json({ error: 'Маршрут не найден' });
});

// 5. Error handler (всегда последним)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});