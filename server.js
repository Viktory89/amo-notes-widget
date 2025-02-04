const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Открываем папку с фронтенд файлами

app.get('/', (req, res) => {
    res.send('Сервер для AmoCRM виджета работает!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
