import type {
    IWordSet,
    IWordFull,
    IWordShallow,
    ITrainerOption,
} from "@root/types.js";

import dataWordSets from "@data/dataWordSets.json";
import dataWords from "@data/dataWords.json";
import _ from "lodash";

export function getWordSet(id: string, isFull?: boolean) {
    const wordSet = dataWordSets.find((wordset) => wordset.id === id);
    if (isFull && wordSet) {
        return {
            ...wordSet,
            words: getWords(id),
        };
    }
    return wordSet;
}

export function getWordSets(count?: number) {
    if (typeof count === "number") {
        return dataWordSets;
    } else {
        return dataWordSets.slice(0, count);
    }
}

export function getWords(wordSetId: string) {
    let result = [];
    for (let i = 0; i < dataWords.length; i++) {
        const word = dataWords[i];
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

export function getRandomWord(): IWordShallow;
export function getRandomWord(isFull?: boolean, wordsArray?: IWordFull[]) {
    if (!wordsArray) {
        wordsArray = dataWords;
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
    word: string;
    visibleTranslation: string;
    actualTranslation: string;
    constructor(shallowWord: IWordShallow, isCorrect: boolean) {
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

export function rightWrong(wordSetId: string) {
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
    word: string;
    transcription: string;
    img: string;
    options: ITrainerOption[] = [];
    constructor(trueWord: IWordShallow, optionsLength: number) {
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

export function enRu(wordSetId: string) {
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
    options: ITrainerOption[] = [];
    constructor(trueWord: IWordShallow, optionsLength: number) {
        this.word = trueWord.translation;
        this.img = trueWord.img;
        this.options = [];

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

export function ruEn(wordSetId: string) {
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
