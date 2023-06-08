const words = require("#data/wordsData.json");

function getToday() {
    return fns.format(new Date(), "P");
}

let today = getToday();
setTimeout(() => {
    today = getToday();
    setInterval(() => {
        today = getToday();
    }, fns.hoursToMilliseconds(24));
}, fns.startOfTomorrow().getTime() - Date());

(req, res) => {
    res.json(new Response(getWordOfDay()));
};

let lastDate;
let cachedResponse;
function getWordOfDay() {
    if (lastDate === today) {
        return cachedResponse;
    }
    let randomWordIndex = Math.floor(Math.random() * words.length);
    lastDate = today;
    cachedResponse = words[randomWordIndex];

    return cachedResponse;
}
