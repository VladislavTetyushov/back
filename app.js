require("dotenv").config();

global.express = require("express");
global.app = express();
const cors = require("cors");
const path = require("path");

const PORT = 4000;
global.PATHS = {
    dist: path.resolve(process.env.DIST_PATH),
    data: path.resolve(__dirname, "data"),
    models: path.resolve(__dirname, "models"),
    controllers: path.resolve(__dirname, "controllers"),
    routes: path.resolve(__dirname, "routes"),
};

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

require("./backend.js");
// require("#routes/apiRouter.js");

app.use(express.static(PATHS.dist));

app.use((req, res) => {
    let url = req.originalUrl;
    if (path.extname(url) === null) {
        res.sendFile(path.join(PATHS.dist, "index.html"));
    } else {
        res.status(404);
        res.send("Cannot get" + url);
    }
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
