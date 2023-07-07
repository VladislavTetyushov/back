import type { Request, Response } from "express";

import { ResponseJson } from "@controllers/controllerBase.js";

export function login(req: Request, res: Response) {
    let responseData: any = req.body;

    responseData.token = "abcdef";
    res.json(
        new ResponseJson({
            status: true,
            message: "Авторизация прошла успешно",
            data: responseData,
        })
    );
}

export function register(req: Request, res: Response) {
    let responseData: any = req.body;

    responseData.token = "abcdef";
    res.json(
        new ResponseJson({
            status: true,
            message: "Регистрация прошла успешно",
            data: responseData,
        })
    );
}
