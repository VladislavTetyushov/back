const fns = require("date-fns");
const _ = require("lodash");
const express = require("express");

const wordSets = require("./wordSets.js");
const reviews = require("./reviews.js");
const words = require("./words.json");

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

class Response {
    status;
    message;
    data;
    constructor({ status, message, data }) {
        if (typeof status === "boolean") {
            this.status = status;
        } else {
            this.status = Boolean(data);
        }
        this.data = data;
        this.message = message;
    }
}

//наборы слов

app.get("/api/word-set", (req, res) => {
    const id = req.query.id || "";
    const isFull = req.query.full || false;
    res.json(
        new Response({
            data: getWordSet(id, isFull),
        })
    );
});

app.get("/api/word-sets", (req, res) => {
    const count = req.query.count;
    if (!count) {
        res.json(
            new Response({
                data: wordSets,
            })
        );
    } else {
        res.json(
            new Response({
                data: wordSets.slice(0, count),
            })
        );
    }
});

// слово-дня

app.get("/api/word-of-day", (req, res) => {
    res.json(
        new Response({
            data: getWordOfDay(),
        })
    );
});

//тренажеры

app.get("/api/train", (req, res) => {
    const id = req.query.id;
    res.json(
        new Response({
            data: {
                wordSet: getWordSet(id),
                trainerData: rightWrong(id),
            },
        })
    );
});

app.get("/api/train-en-ru", (req, res) => {
    const id = req.query.id;
    // new Response({
    //     data: {
    //         wordSet: getWordSet(id),
    //         trainerData: enRu(id),
    //     },
    // })
    res.json(
        new Response({
            data: enRu(id),
        })
    );
});

app.get("/api/train-ru-en", (req, res) => {
    const id = req.query.id;
    // new Response({
    //     data: {
    //         wordSet: getWordSet(id),
    //         trainerData: ruEn(id),
    //     },
    // })
    res.json(
        new Response({
            data: ruEn(id),
        })
    );
});

// отзывы

app.get("/api/reviews", (req, res) => {
    res.json(new Response({ data: reviews }));
});

// функции

//поиск ворд-сетов, слов

function getWordSet(id, isFull) {
    const wordSet = wordSets.find((wordset) => wordset.id === id);
    if (isFull && wordSet) {
        wordSet.words = getWords(id);
    }
    return wordSet;
}

function getWords(wordSetId) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.themes.includes(wordSetId)) {
            result.push({
                word: word.word,
                translation: word.translations[0].translation,
                transcription: word.transcription,
                img: word.img,
            });
        }
    }
    return result;
}

function getRandomWord(isFull, wordsArray) {
    if (!wordsArray) {
        wordsArray = words;
    }
    const randomIndex = Math.floor(Math.random() * wordsArray.length);
    const word = wordsArray[randomIndex];

    if (isFull) {
        return word;
    }
    return {
        word: word.word,
        translation: word.translations[0].translation,
        transcription: word.transcription,
        img: word.img,
    };
}

//для тренажера верно-неверно

class TrainerRightWrongWord {
    word;
    visibleTranslation;
    actualTranslation;
    constructor(shallowWord, isCorrect) {
        this.word = shallowWord.word;
        this.actualTranslation = shallowWord.translation;

        if (isCorrect) {
            this.visibleTranslation = shallowWord.translation;
        } else {
            let randomWord = getRandomWord();
            while (randomWord.word === shallowWord.word) {
                randomWord = getRandomWord();
            }
            this.visibleTranslation = randomWord.translation;
        }
    }
}

function rightWrong(wordSetId) {
    let result = [];
    let wordSetWords = getWords(wordSetId);

    for (let i = 0; i < wordSetWords.length; i++) {
        const currentWord = wordSetWords[i];

        // Бросаем монетку и с шансом correctTranslationChance записываем слово правильно. Если монетка упала не той стороной - записываем неправильно
        const coinFlip = Math.random();
        const correctTranslationChance = 0.5;
        if (coinFlip <= correctTranslationChance) {
            result.push(new TrainerRightWrongWord(currentWord, true));
        } else {
            result.push(new TrainerRightWrongWord(currentWord, false));
        }
    }
    return result;
}

// Для тренажера en-ru, ru-en

class TrainerEnRuWord {
    word;
    transcription;
    img;
    options = [];
    constructor(trueWord, optionsLength) {
        this.word = trueWord.word;
        this.transcription = trueWord.transcription;
        this.img = trueWord.img;

        for (let i = 0; i < optionsLength - 1; i++) {
            let option = {
                word: getRandomWord().translation,
                isCorrect: false,
            };
            while (option.word === trueWord.translation) {
                option.word = getRandomWord().translation;
            }
            this.options.push(option);
        }

        // Помещаем правильное слово в случайную позицию
        let randomIndex = Math.floor(Math.random() * optionsLength);
        if (randomIndex < this.options.length) {
            let savedWord = this.options[randomIndex];
            this.options[randomIndex] = {
                word: trueWord.translation,
                isCorrect: true,
            };
            this.options.push(savedWord);
        } else {
            this.options.push({
                word: trueWord.translation,
                isCorrect: true,
            });
        }
    }
}

function enRu(wordSetId) {
    const wordSetWords = _.shuffle(getWords(wordSetId));
    const optionsLength = 5;
    const result = [];

    for (let i = 0; i < wordSetWords.length; i++) {
        let currentWord = wordSetWords[i];
        result.push(new TrainerEnRuWord(currentWord, optionsLength));
    }

    // _.shuffle по умолчанию возвращает пустой массив, а мне нужно, чтобы при ошибке возвращалось falsy значение
    if (result.length === 0) {
        return undefined;
    }
    return result;
}

class TrainerRuEnWord {
    word;
    img;
    options = [];
    constructor(trueWord, optionsLength) {
        this.word = trueWord.translation;
        this.img = trueWord.img;

        for (let i = 0; i < optionsLength - 1; i++) {
            let option = {
                word: getRandomWord().word,
                isCorrect: false,
            };
            while (option.word === trueWord.word) {
                option.word = getRandomWord().word;
            }
            this.options.push(option);
        }
        let randomIndex = Math.floor(Math.random() * optionsLength);
        if (randomIndex < this.options.length) {
            let savedWord = this.options[randomIndex];
            this.options[randomIndex] = {
                word: trueWord.word,
                isCorrect: true,
            };
            this.options.push(savedWord);
        } else {
            this.options.push({
                word: trueWord.word,
                isCorrect: true,
            });
        }
    }
}

function ruEn(wordSetId) {
    const wordSetWords = _.shuffle(getWords(wordSetId));
    const optionsLength = 5;
    const result = [];

    for (let i = 0; i < wordSetWords.length; i++) {
        let currentWord = wordSetWords[i];
        result.push(new TrainerRuEnWord(currentWord, optionsLength));
    }

    // _.shuffle по умолчанию возвращает пустой массив, а мне нужно, чтобы при ошибке возвращалось falsy значение
    if (result.length === 0) {
        return undefined;
    }
    return result;
}

// для слово-дня

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

let feedback;
app.post("/api/feedback", express.json(), (req, res) => {
    // function validate(req) {
    //     return req.body?.name.length > 5;
    // }

    // if (!validate(req)) {
    //     res.json(
    //         new Response({
    //             status: false,
    //             message: "Имя слишком короткое, должно быть больше 5 символов",
    //         })
    //     );
    //     return;
    // }

    feedback = req.body;
    res.json(
        new Response({
            message: "Ваше сообщение зарегистрировано",
            data: req.body,
        })
    );
});

app.post("/api/login", express.json(), (req, res) => {
    let responseData = req.body;

    responseData.token = "abcdef";

    res.json(
        new Response({
            status: true,
            message: "Авторизация прошла успешно",
            data: responseData,
        })
    );
});

app.post("/api/register", express.json(), (req, res) => {
    let responseData = req.body;

    responseData.token = "abcdef";

    res.json(
        new Response({
            status: true,
            message: "Регистрация прошла успешно",
            data: responseData,
        })
    );
});
