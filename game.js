const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// QUESTIONS
let questions = [
    {
        "question": "Test question 1, answer is 1",
        "choice1": "Correct",
        "choice2": "Wrong",
        "choice3": "Wrong",
        "choice4": "Wrong",
        "answer": 1
    },
    {
        "question": "Test question 2, answer is 3",
        "choice1": "Wrong",
        "choice2": "Wrong",
        "choice3": "Correct",
        "choice4": "Wrong",
        "answer": 3
    },
    {
        "question": "Test question 3, answer is 4",
        "choice1": "Wrong",
        "choice2": "Wrong",
        "choice3": "Wrong",
        "choice4": "Correct",
        "answer": 4
    }
];

//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }