import type { Request, Response } from "express";

import { ResponseJson } from "@controllers/controllerBase.js";
import * as wordSets from "@models/wordSets.js";

export function wordSetGet(req: Request, res: Response) {
    const id = (req.query.id as string) || "";
    const isFull = Boolean(req.query.full);
    res.json(
        new ResponseJson({
            data: wordSets.getWordSet(id, isFull),
        })
    );
}

export function wordSetsGet(req: Request, res: Response) {
    const count = Number(req.query.count);
    res.json(
        new ResponseJson({
            data: wordSets.getWordSets(count),
        })
    );
}

export function trainGet(req: Request, res: Response) {
    const id = String(req.query.id);
    res.json(
        new ResponseJson({
            data: {
                wordSet: wordSets.getWordSet(id),
                trainerData: wordSets.rightWrong(id),
            },
        })
    );
}

export function trainEnRuGet(req: Request, res: Response) {
    const id = String(req.query.id);
    res.json(
        new ResponseJson({
            data: wordSets.enRu(id),
        })
    );
}

export function trainRuEnGet(req: Request, res: Response) {
    const id = String(req.query.id);
    res.json(
        new ResponseJson({
            data: wordSets.ruEn(id),
        })
    );
}
