import express from "express";
const router = express.Router();

import * as controllerReviews from "@controllers/controllerReviews.js";
import * as controllerWords from "@controllers/controllerWords.js";
import * as controllerWordSets from "@controllers/controllerWordSets.js";
import * as controllerFeedback from "@controllers/controllerFeedback.js";
import * as controllerUsers from "@controllers/controllerUsers.js";

router.use(express.json());

router.get("/api/reviews", controllerReviews.getAllReviews);

router.get("/api/word-of-day", controllerWords.getWordOfDay);

router.get("/api/word-set", controllerWordSets.wordSetGet);
router.get("/api/word-sets", controllerWordSets.wordSetsGet);
router.get("/api/train", controllerWordSets.trainGet);
router.get("/api/train-en-ru", controllerWordSets.trainEnRuGet);
router.get("/api/train-ru-en", controllerWordSets.trainRuEnGet);

router.post("/api/feedback", controllerFeedback.feedbackPost);

router.post("/api/login", controllerUsers.login);
router.post("/api/register", controllerUsers.register);

export default router;
