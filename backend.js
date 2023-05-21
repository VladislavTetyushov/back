const express = require('express');
const wordSets = require('./wordSets.js');
let words = require('./words.js');

app.get('/api/word-set', (req, res) => {
    const wordset = req.query.wordset;
    res.json(findCardSetByName(wordset));   
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
            result.push({ word: words[i].word, translation: words[i].translate, imgPath: words[i].img});
        }    
    }
    return result; // Возвращаем найденный объект
}