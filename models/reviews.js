const reviews = require("#data/reviewsData.js");
const fs = require("fs");
const path = require("path");

module.exports = class Review {
    name;
    review;
    img;
    constructor({ name, review, img }) {
        this.name = name;
        this.review = review;
        this.img = img;
    }
    static getAll() {
        return reviews;
    }
    static saveToFs() {
        fs.writeFile(
            path.resolve(global.PATHS.data, "reviewsData.json"),
            JSON.stringify(reviews),
            {
                encoding: "utf-8",
            },
            () => {
                console.log("successfully posted review");
            }
        );
    }
    save() {
        reviews.push(this);
    }
};
