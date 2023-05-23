const express = require('express');
const wordSets = require('./wordSets.js');
let words = require('./words.js');

app.get('/api/word-set', (req, res) => {
    const wordset = req.query.wordset;
    res.json(findCardSetByName(wordset));   
});

app.get('/api/right-wrong', (req, res) => {
    const wordset = req.query.wordset;
    res.json(RandomObject(wordset));   
});

app.get('/api/word-sets', (req, res) => {
    const count = req.query.count;
    let countCards = [];
    for (var i = 0; i < count; i++){
        countCards.push(wordSets[i]); 
    }
    res.json(countCards);   
});


app.get('/api/cards', (req, res) => {
    addName();
    res.json(wordSets);   
});


function addName() {
    for (var i = 0; i < wordSets.length; i++) {
        wordSets[i].words = findWordByTheme(wordSets[i]['id']);
    }
}

function findCardSetByName(word) {
    let result = [];
    for (var i = 0; i < wordSets.length; i++) {
        if (wordSets[i].id === word) {
            result.push({ id: wordSets[i].id, imgThemePath: wordSets[i].imgThemePath, title: wordSets[i].title, description: wordSets[i].description});
        }
    }
    return result; 
}

function findWordByTheme(theme) {
    let result = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].themes.includes(theme)) {
            result.push({ word: words[i].word, translate: words[i].translate, imgPath: words[i].img});
        }    
    }
    return result; // Возвращаем найденный объект
}

// random object

function RandomObject (theme) {
    let result = [];
    let themeWords = findWordByTheme(theme);

    for (var i = 0; i < themeWords.length; i++) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomObject = words[randomIndex];

        // Генерируем случайное число от 0 до 1
        const randomChance = Math.random();
        // Если случайное число меньше или равно 0.5 и объект верный, выполняем действия
        if (randomChance <= 0.5) {
            result.push({word: themeWords[i].word, visibleTranslation: themeWords[i].translate, actualTranslation: themeWords[i].translate});
            continue;
        }

        if (randomObject.word !== themeWords[i].word) {
            result.push({word: themeWords[i].word, visibleTranslation: randomObject.translate, actualTranslation: themeWords[i].translate});
        } else {
            while (randomObject.word !== themeWords[i].word) {
                randomIndex = Math.floor(Math.random() * words.length);
                randomObject = words[randomIndex];
            }
            result.push({word: themeWords[i].word, visibleTranslation: randomObject.translate, actualTranslation: themeWords[i].translate});
        }
        result.push()
    }
    return result;
}