const express = require('express');
const path = require('path');
const dishesRouter = require('./routes/dishes');
const dishesService = require('./services/dishesService');

const app = express();
const PORT = 3003;

const DATA_FILE_PATH = path.join(__dirname, 'data/dishes.json');
dishesService.init(DATA_FILE_PATH);

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'public', 'img')));
app.use('/models', express.static(path.join(__dirname, 'public', 'models')));

app.use('/dishes', dishesRouter);
app.use('/menu', dishesRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Внутренняя ошибка сервера' });
});

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
});
