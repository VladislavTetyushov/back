const express = require('express');
const wordSets = require('./wordSets.js');
const reviews = require('./reviews.js');
let words = require('./words.js');

//наборы слов

app.get('/api/word-set', (req, res) => {
    const wordset = req.query.wordset;
    res.json(findWordSetByName(wordset));   
});

app.get('/api/word-sets', (req, res) => {
    const count = req.query.count;
    console.log(typeof count);
    if (!count)
    {
        addWords();
        res.json(wordSets);  
    } else {
        let countCards = [];
        for (var i = 0; i < count; i++){
            countCards.push(wordSets[i]); 
        }
        res.json(countCards);   
    }
});

// слово-дня

app.get('/api/day-word', (req, res) => {
    res.json(DayWord());
});

//тренажеры

app.get('/api/right-wrong', (req, res) => {
    const wordset = req.query.wordset;
    res.json(RightWrong(wordset));   
});

app.get('/api/en-ru', (req, res) => {
    const wordset = req.query.wordset;
    res.json(WordEnRu(wordset));   
});

app.get('/api/ru-en', (req, res) => {
    const wordset = req.query.wordset;
    res.json(WordRuEn(wordset));   
});

// отзывы

app.get('/api/reviews', (req, res) => {
    res.json(reviews);
});

// функции

function addWords() {
    for (var i = 0; i < wordSets.length; i++) {
        wordSets[i].words = findWordByTheme(wordSets[i]['id']);
    }
}

//поиск ворд-сетов, слов

function findWordSetByName(word) {
    let result = [];
    for (var i = 0; i < wordSets.length; i++) {
        if (wordSets[i].id === word) {
            result.push(
                { 
                    id: wordSets[i].id, 
                    imgThemePath: wordSets[i].imgThemePath, 
                    title: wordSets[i].title, 
                    description: wordSets[i].description
                }
            );
        }
    }
    return result; 
}

function findWordByTheme(theme) {
    let result = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].themes.includes(theme)) {
            result.push(
                { 
                    word: words[i].word, 
                    translate: words[i].translate[0].translate, 
                    transcription: words[i].transcription, 
                    imgPath: words[i].img
                }
            );
        }    
    }
    return result; // Возвращаем найденный объект
}

//для тренажера верно-неверно

function RightWrong (theme) {
    let result = [];
    let themeWords = findWordByTheme(theme);

    for (var i = 0; i < themeWords.length; i++) {
        let randomIndex = Math.floor(Math.random() * words.length);
        let randomWord = words[randomIndex];

        // Генерируем случайное число от 0 до 1
        let coinFlip = Math.random();
        // Если случайное число меньше или равно 0.5 и объект верный, выполняем действия
        if (coinFlip <= 0.5) {
            result.push(
                {   
                    word: themeWords[i].word, 
                    visibleTranslation: themeWords[i].translate, 
                    actualTranslation: themeWords[i].translate
                }
            );
            continue;
        }

        while (randomWord.word === themeWords[i].word) {
            randomIndex = Math.floor(Math.random() * words.length);
            randomWord = words[randomIndex];
        }

        result.push(
            {
                word: themeWords[i].word,
                visibleTranslation: randomWord.translate[0].translate, 
                actualTranslation: themeWords[i].translate
            }
        );
    }
    return result;
}

// Для тренажера en-ru, ru-en 

function WordEnRu (theme) {
    let result = [];
    let themeWords = findWordByTheme(theme);
    let optionsLength = 4;

    for (var i = 0; i < themeWords.length; i++) {
    
        let trueIndex = Math.floor(Math.random() * optionsLength);    
        
        result.push(
            {
                word: themeWords[i].word, 
                transcription: themeWords[i].transcription, 
                options: []
            }
        );

        for (var j = 0; j < 5; j++) {

            if (trueIndex === j) {
                result[i].options.push(
                    {
                        translate: themeWords[i].translate, 
                        isCorrect: true
                    }
                );
                continue;
            }

            let falseIndex = Math.floor(Math.random() * words.length);
            let randomWord = words[falseIndex];   

            while (randomWord.word === themeWords[i].word || result[i].options.some(obj => obj.translate === randomWord.translate[0].translate)) {
                randomIndex = Math.floor(Math.random() * words.length);
                randomWord = words[randomIndex];
            }

            result[i].options.push(
                {
                    translate: randomWord.translate[0].translate, 
                    isCorrect: false
                }
            );
        }
    }
    return result;
}

function WordRuEn (theme) {
    let result = [];
    let themeWords = findWordByTheme(theme);
    let optionsLength = 4;

    for (var i = 0; i < themeWords.length; i++) {
    
        let trueIndex = Math.floor(Math.random() * optionsLength);    
        
        result.push(
            {
                word: themeWords[i].translate, 
                options: []
            }
        );

        for (var j = 0; j < 5; j++) {

            if (trueIndex === j) {
                result[i].options.push(
                    {
                        translate: themeWords[i].word, 
                        isCorrect: true
                    }
                );
                continue;
            }

            let falseIndex = Math.floor(Math.random() * words.length);
            let randomWord = words[falseIndex];   

            while (randomWord.translate[0].translate === themeWords[i].translate || result[i].options.some(obj => obj.word === randomWord.word)) {
                randomIndex = Math.floor(Math.random() * words.length);
                randomWord = words[randomIndex];
            }

            result[i].options.push(
                {
                    translate: randomWord.word, 
                    isCorrect: false
                }
            );
        }
    }
    return result;
}

// для слово-дня

function DayWord () {
    let WordIndex = Math.floor(Math.random() * words.length);
    let randomWord = 
        { 
            word: words[WordIndex].word, 
            transcription: words[WordIndex].transcription, 
            translate: words[WordIndex].translate
        }; 
    return randomWord;
}