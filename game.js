const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// QUESTIONS
let questions = [
    {
        question: "At an incident, someone is suffering from severe burns. How could you help them?",
        choice1: "Apply lotions to the injury",
        choice2: "Burst any blisters",
        choice3: "Remove anything sticking to the burns",
        choice4: "Douse the burns with clean, cool water",
        answer: 4
    },
    {
        question: "You're approaching traffic lights and the red light is showing. What signal will show next?",
        choice1: "Red and amber",
        choice2: "Green alone",
        choice3: "Amber alone",
        choice4: "Green and amber",
        answer: 1
    },
    {
        question: "What should you do when you leave your car unattended for a few minutes?",
        choice1: "Leave the engine running",
        choice2: "Switch the engine off but leave the key in",
        choice3: "Lock it and remove the key",
        choice4: "Park near a traffic warden",
        answer: 3
    }
];


//CONSTANTS
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerHTML = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        /* triple === cannot be used. == works only, aware of possible coercion */
        const classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();
