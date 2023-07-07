import express from "express";
const router = express.Router();

import * as controllerReviews from "@controllers/controllerReviews.js";
import * as controllerWords from "@controllers/controllerWords.js";
import * as controllerWordSets from "@controllers/controllerWordSets.js";

router.get("/api/reviews", controllerReviews.getAllReviews);

router.get("/api/word-of-day", controllerWords.getWordOfDay);

router.get("/api/word-set", controllerWordSets.wordSetGet);
router.get("/api/word-sets", controllerWordSets.wordSetsGet);
router.get("/api/train", controllerWordSets.trainGet);
router.get("/api/train-en-ru", controllerWordSets.trainEnRuGet);
router.get("/api/train-ru-en", controllerWordSets.trainRuEnGet);

export default router;
