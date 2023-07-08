import fs from "fs";
import path from "path";

import { FeedbackEntry } from "@root/types.js";

let feedback: FeedbackEntry[];

export function readFeedback() {
    let feedbackPath = path.join(global.APP_PATHS.data, "dataFeedback.json");
    if (!fs.existsSync(feedbackPath)) {
        fs.writeFileSync(feedbackPath, JSON.stringify([]));
    }
    feedback = JSON.parse(String(fs.readFileSync(feedbackPath)));
}

export function getAllFeedback() {
    if (feedback) {
        return;
    }

    readFeedback();
    return feedback;
}

export function saveFeedback(entry: FeedbackEntry) {
    let toSave: FeedbackEntry = {
        name: entry.name,
        message: entry.message,
        email: entry.email,
    };
    if (entry.subject) {
        toSave.subject = entry.subject;
    }
    feedback.push(toSave);
}

export function saveToJson() {
    fs.writeFileSync(
        path.join(global.APP_PATHS.data, "dataFeedback.json"),
        JSON.stringify(feedback)
    );
}

readFeedback();
