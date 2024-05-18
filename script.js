
const domCorrectScore = document.querySelector(".correct-score");
const domIncorrectScore = document.querySelector(".incorrect-score");
const domQuestionNumber = document.querySelector(".question-number");

const questionContent = document.querySelector(".question-content");

let options = document.querySelectorAll(".option");

let option1 = options[0];
let option2 = options[1];
let option3 = options[2];
let option4 = options[3];


let questions = ["____ yaava uuru?","namma kaaleeju tumba _____","ivattu _________. Pariikshe(test) ide.","bengaLuuru _______ raajadhaani(capital city).","_______________ namma shikshakaru.","run: ooDu :: read ______.","kannaDa form of orange __________..","Twenty in kannada","kannaDa form of 4th is _______..","opposite of eDagaDe X _______.","opposite of hosa X _____.","This is our 10th kannada class.","I am a good student","Please give me 100 rupees.","Other gender of \"maga\"(son) is ______","Other gender of \"tande\" is ___","head: tale :: leg : _____","namma kaaleejina ______. Bank ide.","nimma mane ________. Ide?","vidyaarthigaLu _____ bandaru.(to college)","bangalure is a beautiful city."];
let correctAns = ["niinu", "cannaagide.","namage","namma","avaru","oodu","kittale hannu","ippattu","naalkanee","balagaDe","haleya","idu namma hattanee kannaDa taragati.","naanu oLLeya vidyaarthi.","dayaviTTu nanage nuuru rupaayi koDi","magaLu","taayi","kaalu","oLage","elli","kaaleejige","bengaLuuru ondu sundaravaada nagara"];
let incorrectAns1 = ["nimma", "cannaagideyaa?","naavu","naanu","idu","OOdu","keesari baNNa","eppattu","naalkara","bala","haLe","idu 10 kannaDa taragati.","naanu oLLeya magu","dayaviTTu nuuru koDi","magu","tangi","kaLu","meele","yaaru","kaaleeju","bengaLuuru ondu sundaravaada haLLi."];
let incorrectAns2 = ["niMa", "cannaagiddiini.","niinu","nanna","ivara","odu","kittale baNNa","eraDu sonne","naalku","balakke","hoLedu","idu nanna hattanee kannaDa taragati.","naavu oLLeya vidyaarthigaLu.","dayaviTTu nooru rupaayi koDi","heNNu","taayi","kaalugaLu","munde","yaLLi","kaaleejina","bengaLuuru ondu nagara."];
let incorrectAns3 = ["neenu", "cannaagilla","naanu","nannadu","idara","oDu","kittale","yeppattu","naalakku","balakaDe","haleDu","idu nanna haTTanee kannaDa taragati.","naavu oLLeya vidyaarthigaLu alla.","dayaviTTu nooru rupaayi KoDi","maga","tandi","kalu","monde","eLLi","kaaleju","bengaluru ondu sundaravaada nagara"];



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

