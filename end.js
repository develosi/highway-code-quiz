// FINAL SCORE AT END SECTION
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;