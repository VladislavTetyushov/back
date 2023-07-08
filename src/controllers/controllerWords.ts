import type { Request, Response } from "express";

import { ResponseJson } from "@controllers/controllerBase.js";
import * as words from "@models/words.js";

export function getWordOfDay(req: Request, res: Response) {
    res.json(
        new ResponseJson({
            data: words.getWordOfDay(),
        })
    );
}
