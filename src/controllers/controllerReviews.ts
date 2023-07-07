import type { Request, Response } from "express";

import { ResponseJson } from "@controllers/controllerBase.js";
import * as reviews from "@models/reviews.js";

export function getAllReviews(req: Request, res: Response) {
    res.json(
        new ResponseJson({
            data: reviews.getAll(),
        })
    );
}

// module.exports.post = (req, res) => {
//     let review = new reviews(req.body);
//     review.save();
//     reviews.saveToFs();
//     res.json({
//         status: true,
//         message: "Sucessfully posted review",
//     });
// };
