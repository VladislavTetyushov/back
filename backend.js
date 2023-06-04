const wordSets = require('./wordSets.js');
const reviews = require('./reviews.js');
let words = require('./words.json');

class Response {
    status;
    data;
    constructor(data) {
        this.status = Boolean(data);
        this.data = data
    }
}

//наборы слов

app.get('/api/word-set',  (req, res) => {
    const id = req.query.id || '';
    res.json( new Response(findFullWordSet(id)) );
});

app.get('/api/word-sets', (req, res) => {
    const count = req.query.count;
    if (!count) {
        res.json(new Response(wordSets));  
    } else {
        res.json( new Response(wordSets.slice(0, count)) );   
    }
});

// слово-дня

app.get('/api/day-word', (req, res) => {
    res.json(new Response(DayWord()));
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
    res.json(new Response(reviews));
});

// функции

function findFullWordSet(id) {
    const fullWordset = findShallowWordSet(id);
    fullWordset.words = findWords(id);
    return fullWordset
}

//поиск ворд-сетов, слов

function findShallowWordSet(id) {
    return wordSets.find(wordset => wordset.id === id)
    // const foundWordSet = wordSets.find(wordset => wordset.id === word);
    // if (foundWordSet) {
    //     return { 
    //         id: foundWordSet.id, 
    //         imgThemePath: foundWordSet.imgThemePath, 
    //         title: foundWordSet.title, 
    //         description: foundWordSet.description
    //     }
    // }
}

function findWords(wordSetId) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.themes.includes(wordSetId)) {
            result.push(
                { 
                    word: word.word, 
                    translation: word.translations[0].translation, 
                    transcription: word.transcription, 
                    img: word.img
                }
            );
        }    
    }
    return result;
}

//для тренажера верно-неверно

function RightWrong (theme) {
    let result = [];
    let themeWords = findWords(theme);

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
    let themeWords = findWords(theme);
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
    let themeWords = findWords(theme);
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
    let wordIndex = Math.floor(Math.random() * words.length);
    // let randomWord = 
        // { 
        //     word: words[WordIndex].word, 
        //     transcription: words[WordIndex].transcription, 
        //     translations: words[WordIndex].translations
        // }; 
    return words[wordIndex];
}