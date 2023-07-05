import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import fs from "fs";

const app = express();

const PORT = 4000;
const PATHS = {
    static: process.env.STATIC_PATH
        ? path.resolve(process.env.STATIC_PATH)
        : path.resolve(__dirname, "../", "static"),
    resources: process.env.RESOURCES_PATH
        ? path.resolve(process.env.RESOURCES_PATH)
        : path.resolve(__dirname, "../", "static", "resources"),
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

// import "./backend.js";
import apiRouter from "@routes/routesApi.js";
app.use(apiRouter);

app.use("/resources", express.static(PATHS.resources));
app.use(express.static(PATHS.static));

app.use((req, res) => {
    let indexPath = path.join(PATHS.static, "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        res.send("Server error");
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
