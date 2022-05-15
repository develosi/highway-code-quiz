// GAME VARIABLES
const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// GAME QUESTIONS
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
    {
        question: "How should you dispose of a used vehicle battery?",
        choice1: "Bury it in your garden",
        choice2: "Put it in the dustbin",
        choice3: "Take it to a local-authority disposal site",
        choice4: "Leave it on waste land",
        answer: 3
    },
    {
        question: "You're following two cyclists as they approach a roundabout in the left-hand lane. Where would you expect the cyclists to go?",
        choice1: "Left",
        choice2: "Right",
        choice3: "Any direction",
        choice4: "Straight ahead",
        answer: 3
    },
    {
        question: "What should you do when you're passing loose sheep on the road?",
        choice1: "Briefly sound your horn",
        choice2: "Go very slowly",
        choice3: "Pass quickly but quietly",
        choice4: "Herd them to the side of the road",
        answer: 2
    },
    {
        question: "What colour are the reflective studs between a motorway and a slip road?",
        choice1: "Amber",
        choice2: "White",
        choice3: "Green",
        choice4: "Red",
        answer: 3
    },
    {
        question: "You're driving on the motorway in windy conditions. What should you do as you overtake a high-sided vehicle?",
        choice1: "Increase your speed",
        choice2: "Be wary of a sudden gust",
        choice3: "Drive alongside very closely",
        choice4: "Expect normal conditions",
        answer: 2
    },
    {
        question: "Why is it dangerous to travel too close to the vehicle ahead?",
        choice1: "Your engine will overheat",
        choice2: "Your mirrors will need adjusting",
        choice3: "Your view of the road ahead will be restricted",
        choice4: "Your satnav will be confused",
        answer: 3
    },
    {
        question: "Following a collision, a person has been injured. What would be a warning sign for shock?",
        choice1: "Flushed complexion",
        choice2: "Warm dry skin",
        choice3: "Slow pulse",
        choice4: "Rapid shallow breathing",
        answer: 4
    },
    {
        question: "You're driving on an open road in dry weather. What distance should you keep from the vehicle in front?",
        choice1: "A two-second time gap",
        choice2: "One car length",
        choice3: "Two metres (6 feet 6 inches)",
        choice4: "Two car lengths",
        answer: 1
    },
    {
        question: "What could you do to help injured people at an incident?",
        choice1: "Keep them warm and comfortable",
        choice2: "Give them something to eat",
        choice3: "Keep them on the move by walking them around",
        choice4: "Give them a warm drink",
        answer: 1
    },
    {
        question: "What should you do when you park at night on a road that has a 40 mph speed limit?",
        choice1: "Park facing the traffic",
        choice2: "Leave parking lights switched on",
        choice3: "Leave dipped headlights switched on",
        choice4: "Park near a street light",
        answer: 2
    },
    {
        question: "What's the main benefit of driving a four-wheel-drive vehicle?",
        choice1: "Improved grip on the road",
        choice2: "Lower fuel consumption",
        choice3: "Shorter stopping distances",
        choice4: "Improved passenger comfort",
        answer: 1
    },
    {
        question: "What should you do when you move off from behind a parked car?",
        choice1: "Give a signal after moving off",
        choice2: "Look around before moving off",
        choice3: "Look around after moving off",
        choice4: "Use the exterior mirrors only",
        answer: 2
    },
    {
        question: "How can you use your vehicle's engine to control your speed?",
        choice1: "By changing to a lower gear",
        choice2: "By selecting reverse gear",
        choice3: "By changing to a higher gear",
        choice4: "By selecting neutral",
        answer: 1
    },
];

//GAME FUNCTIONS
// Sets max amount of questions to ten and score increment to one
const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 10;

// Resets game at start
startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

// Displays new questions and possible answers
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

// Confirming if correct answer is selected
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // Triple === cannot be used for selectedAnswer. == works only, aware of possible coercion.
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

// Updates score in HUD section
incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};

startGame();
