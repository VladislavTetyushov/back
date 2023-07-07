import type { Request, Response } from "express";

import { ResponseJson } from "@controllers/controllerBase.js";
import * as feedback from "@models/feedback.js";
import { FeedbackEntry } from "@root/types";

function validateFeedback(entry: unknown): entry is FeedbackEntry {
    // Список неполный
    return (
        !!entry &&
        typeof entry === "object" &&
        "name" in entry &&
        "message" in entry &&
        typeof entry.name === "string" &&
        typeof entry.message === "string" &&
        entry.name.length > 5 &&
        entry.message.length > 5
    );
}

export function feedbackPost(req: Request, res: Response) {
    let body = req.body;
    if (!validateFeedback(body)) {
        res.json(
            new ResponseJson({
                status: false,
                message:
                    "Ваше сообщение не соответствует требованиям, указанным в форме отправки",
                data: req.body,
            })
        );
        return;
    }

    feedback.saveFeedback(body);
    feedback.saveToJson();
    res.json(
        new ResponseJson({
            status: true,
            message: "Ваше сообщение зарегистрировано",
            data: req.body,
        })
    );
}
