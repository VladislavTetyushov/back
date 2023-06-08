const base = require("#controllers/baseController.js");
const Review = require("#models/reviews.js");

module.exports.get = (req, res) => {
    res.json(new base.Response(Review.getAll()));
};

// module.exports.post = (req, res) => {
//     let review = new Review(req.body);
//     review.save();
//     Review.saveToFs();
//     res.json({
//         status: true,
//         message: "Sucessfully posted review",
//     });
// };
