const domCorrectScore = document.querySelector(".correct-score");
const domIncorrectScore = document.querySelector(".incorrect-score");
const domQuestionNumber = document.querySelector(".question-number");

const questionContent = document.querySelector(".question-content");

let options = document.querySelectorAll(".option");

let option1 = options[0];
let option2 = options[1];
let option3 = options[2];
let option4 = options[3];

let questions = ["____ yaava uuru?","test question"];
let correctAns = ["niinu", "test correct"];
let incorrectAns1 = ["nimma", "test incorrect"];
let incorrectAns2 = ["niMa", "test incorrect"];
let incorrectAns3 = ["neenu", "test incorrect"];

let correctScore = 0;
let incorrectScore = 0;
let questionIndex = 0;

function shuffleOptions(array){ //function to shuffle array elements
    for (let i=array.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1)); //random index to swap
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function quiz(answerSelected, button){
    if (questionIndex<questions.length){
        if (answerSelected === correctAns[questionIndex]){
            updateScore(true);
        } else {
            updateScore(false);
        }
        ++questionIndex;
        if (questionIndex == questions.length){
            alert("Quiz completed, your score: " + (correctScore/(correctScore+incorrectScore)*100));
            return;
        } else {
            updateQuestion();
            updateOptions();
            
        }
    }
}

function updateQuestion(){
    let currentQuestion = questions[questionIndex];
    questionContent.textContent = currentQuestion;
    domQuestionNumber.textContent = "Question: "+ (questionIndex+1);
}
function updateOptions(){
    let choices = [correctAns[questionIndex], incorrectAns1[questionIndex], incorrectAns2[questionIndex], incorrectAns3[questionIndex]];
    shuffleOptions(choices);
    for (let i=0; i<choices.length; i++){
        options[i].textContent = choices[i];
    }
}
function updateScore(isCorrect){
    if (isCorrect){
        domCorrectScore.textContent = "Correct answers: " + ++correctScore;
    } else {
        domIncorrectScore.textContent = "Incorrect answers: "+ ++incorrectScore;
    }
}

updateQuestion();
updateOptions();

option1.addEventListener("click", () => quiz(option1.textContent, option1));
option2.addEventListener("click", () => quiz(option2.textContent, option2));
option3.addEventListener("click", () => quiz(option3.textContent, option3));
option4.addEventListener("click", () => quiz(option4.textContent, option4));

document.onkeydown = function(e) { //Code to prevent inspection using keys
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
document.addEventListener('contextmenu', event => event.preventDefault()); //code to prevent inspection using right click


