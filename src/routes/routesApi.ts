import express from "express";
const router = express.Router();

import controllerReviews from "@controllers/controllerReviews.js";
// import wordOfDayController from "@controllers/controllerWordOfDay.js";

router.get("/api/reviews", controllerReviews.get);

export default router;
