import reviews from "@data/dataReviews.json";
import fs from "fs";
import path from "path";

// function saveToFs() {
//     fs.writeFile(
//         path.resolve(global.PATHS.data, "reviewsData.json"),
//         JSON.stringify(reviews),
//         {
//             encoding: "utf-8",
//         },
//         () => {
//             console.log("successfully posted review");
//         }
//     );
// }

// function save() {
//     reviews.push(this);
// }

export function getAll() {
    return reviews;
}
