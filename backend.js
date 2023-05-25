const express = require('express');
const wordSets = require('./wordSets.js');
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

//тренажеры

app.get('/api/right-wrong', (req, res) => {
    const wordset = req.query.wordset;
    res.json(RandomObject(wordset));   
});

app.get('/api/en-ru', (req, res) => {
    const wordset = req.query.wordset;
    res.json(WordEnRu(wordset));   
});


function addWords() {
    for (var i = 0; i < wordSets.length; i++) {
        wordSets[i].words = findWordByTheme(wordSets[i]['id']);
    }
}

function findWordSetByName(word) {
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
            result.push({ word: words[i].word, translate: words[i].translate, transcription: words[i].transcription, imgPath: words[i].img});
        }    
    }
    return result; // Возвращаем найденный объект
}

// random object

function RandomObject (theme) {
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

        if (randomWord.word !== themeWords[i].word) {
            result.push(
                {   
                    word: themeWords[i].word,
                    visibleTranslation: randomWord.translate, 
                    actualTranslation: themeWords[i].translate
                }
            );
        } else {
            while (randomWord.word === themeWords[i].word) {
                randomIndex = Math.floor(Math.random() * words.length);
                randomWord = words[randomIndex];
            }
            result.push(
                {
                    word: themeWords[i].word,
                    visibleTranslation: randomWord.translate, 
                    actualTranslation: themeWords[i].translate
                }
            );
        }
    }
    return result;
}

// en-ru ru-en 

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

            while (randomWord.word === themeWords[i].word || result[i].options.some(obj => obj.translate === randomWord.translate)) {
                randomIndex = Math.floor(Math.random() * words.length);
                randomWord = words[randomIndex];
            }

            result[i].options.push(
                {
                    translate: randomWord.translate, 
                    isCorrect: false
                }
            );
        }
    }
    return result;
}