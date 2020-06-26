let button1yes = document.getElementById('1yes');
let button1no = document.getElementById('1no');
let button2 = document.getElementById('2-submit');
let button2b = document.getElementById('2b-submit');

let borrowingAmount = 0;

const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question2b = document.getElementById('question-2b');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');

const anwserSME = document.getElementById('answer-sme');
const anwserExecutive = document.getElementById('answer-executive');
const anwserCorporate = document.getElementById('answer-corporate');
const anwserNA = document.getElementById('answer-na');

function showQuestion(question) {
    question.classList.add("show");
};

function showAnswer(answer) {
    answer.classList.add("show");
};

//Checks amount user wants to borrow and then shows the correct message
function checkAmount(amount) {
    if (borrowingAmount >= 2000000 && borrowingAmount < 5000000) {
        console.log("ct sme");
        showAnswer(anwserSME);   
    } else if (borrowingAmount >= 5000000 && borrowingAmount < 10000000){
        console.log('ct executive');        
        showAnswer(anwserExecutive);
    } else if (borrowingAmount >= 10000000) {
        console.log('ct corporate');
        showAnswer(anwserCorporate);        
    }
};


//disables buttons and adds "disable" to the question
function disableQuestion(question) {
    var buttons = question.querySelectorAll('button');    
    var inputs = question.querySelectorAll('input');
    buttons.forEach(element => {
        element.disabled = true;    
    });
    inputs.forEach(element => {
        element.disabled = true;    
    });
    question.classList.add("disable");
}

//Question 1 -----
button1yes.addEventListener('click', event => {
    showQuestion(question2); 
    disableQuestion(question1);    
});



button1no.addEventListener('click', event => {
    showQuestion(question2b);
    disableQuestion(question1); 
});

//Question 2 ------
button2.addEventListener('click', event => {
    let inputField = document.getElementById('2-input').value;
    borrowingAmount = inputField;

    if (borrowingAmount < 250000) {
        showAnswer(anwserNA);   
    } else if (borrowingAmount >= 250000 && borrowingAmount <= 4000000){
        console.log('carry on with form');        
    } else if (borrowingAmount > 4000000) {
        checkAmount(borrowingAmount);        
    }

    disableQuestion(question2); 
});

//Question 2b -----
button2b.addEventListener('click', event => {
    let inputField = document.getElementById('2b-input').value;
    borrowingAmount = inputField;
    checkAmount(borrowingAmount);
    disableQuestion(question2b); 
});
