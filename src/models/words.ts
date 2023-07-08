import words from "@data/dataWords.json";
import * as fns from "date-fns";

export function getToday() {
    return fns.format(new Date(), "P");
}

let today = getToday();
let timeToNextDay = fns.startOfTomorrow().getTime() - new Date().getTime();
setTimeout(() => {
    today = getToday();
    setInterval(() => {
        today = getToday();
    }, fns.hoursToMilliseconds(24));
}, timeToNextDay);

let lastDate: string;
let cachedResponse: (typeof words)[number];
export function getWordOfDay() {
    if (lastDate === today) {
        return cachedResponse;
    }
    let randomWordIndex = Math.floor(Math.random() * words.length);
    lastDate = today;
    cachedResponse = words[randomWordIndex];

    return cachedResponse;
}
