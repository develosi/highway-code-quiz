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