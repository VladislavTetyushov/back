// server.js
const express = require('express');
global.app = express();
const path = require('path');
const data = require('./data.js');
const PORT = 3000;

const PATHS = new function() {
  this.dist = path.resolve(process.env.distPath);
}

require('./backend.js');

app.use(express.static(PATHS.dist));

app.use((req, res) => {
  res.sendFile(path.join(PATHS.dist, 'index.html'));
});



const server = app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});




// Обработка события завершения работы сервера
// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log('Сервер выключен');
//     process.exit(0);
//   });
// });
