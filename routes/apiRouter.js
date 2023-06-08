// class Response {
//     status;
//     data;
//     constructor(data) {
//         this.status = Boolean(data);
//         this.data = data;
//     }
// }

// //наборы слов

// app.get("/api/word-set", (req, res) => {
//     const id = req.query.id || "";
//     res.json(new Response(getWordSet(id)));
// });

// app.get("/api/word-sets", (req, res) => {
//     const count = req.query.count;
//     if (!count) {
//         res.json(new Response(wordSets));
//     } else {
//         res.json(new Response(wordSets.slice(0, count)));
//     }
// });

// // слово-дня

// app.get("/api/day-word", (req, res) => {
//     res.json(new Response(getWordOfDay()));
// });

// //тренажеры

// app.get("/api/train", (req, res) => {
//     const id = req.query.id;
//     res.json(
//         new Response({
//             wordSet: getWordSet(id),
//             trainerData: rightWrong(id),
//         })
//     );
// });

// app.get("/api/train-en-ru", (req, res) => {
//     const id = req.query.id;
//     res.json(
//         new Response({
//             wordSet: getWordSet(id),
//             trainerData: enRu(id),
//         })
//     );
// });

// app.get("/api/train-ru-en", (req, res) => {
//     const id = req.query.id;
//     res.json(
//         new Response({
//             wordSet: getWordSet(id),
//             trainerData: ruEn(id),
//         })
//     );
// });

// // отзывы

const express = require("express");
const router = express.Router();

const reviewsController = require("#controllers/reviewsController.js");
const wordOfDayController = require("#controllers/wordOfDayController.js");

router.get("/api/reviews", reviewsController.get);

exports = router;
