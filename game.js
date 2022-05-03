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
    },
    {
        question: "You're driving towards a zebra crossing. What should you do if a person in a wheelchair is waiting to cross?",
        choice1: "Continue on your way",
        choice2: "Wave to the person to cross",
        choice3: "Wave to the person to wait",
        choice4: "Be prepared to stop",
        answer: 4
    },
    {
        question: "What part of the car does the law require you to keep in good condition?",
        choice1: "The gearbox",
        choice2: "The transmission",
        choice3: "The door locks",
        choice4: "The seat belts",
        answer: 4
    },
    {
        question: "You've been involved in an argument that's made you feel angry. What should you do before starting your journey?",
        choice1: "Open a window",
        choice2: "Turn on your radio",
        choice3: "Have an alcoholic drink",
        choice4: "Calm down",
        answer: 4
    },
    {
        question: "When would you use the right-hand lane on a three-lane motorway?",
        choice1: "When you're turning right",
        choice2: "When you're overtaking",
        choice3: "When you're travelling above the speed limit",
        choice4: "When you're trying to save fuel",
        answer: 2
    },
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
