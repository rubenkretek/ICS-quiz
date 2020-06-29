let button1yes = document.getElementById('1yes');
let button1no = document.getElementById('1no');
let button2 = document.getElementById('2-submit');
let button2b = document.getElementById('2b-submit');
let button3yes = document.getElementById('3yes');
let button3no = document.getElementById('3no');
let button4yes = document.getElementById('4yes');
let button4no = document.getElementById('4no');
let button5yes = document.getElementById('5yes');
let button5no = document.getElementById('5no');

let borrowingAmount = 0;

let amountTextField = document.getElementById('amount-borrowing');

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
const anwserTooLow = document.getElementById('answer-too-low');
const anwserRaiseValuation = document.getElementById('answer-raise-valuation');



function showQuestion(question) {
    question.classList.add("show");
};

function showAnswer(answer) {
    answer.classList.add("show");
};

//Checks amount user wants to borrow and then shows the correct message
function checkAmount(amount) {
    if (borrowingAmount < 2000000) {
        console.log("too low");
        showAnswer(anwserTooLow);   
    } else if (borrowingAmount >= 2000000 && borrowingAmount < 5000000) {
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


//disables buttons and adds "disable" class to the question
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

//Question 2 (and amount shown on question 3)------
button2.addEventListener('click', event => {
    let inputField = document.getElementById('2-input').value;
    borrowingAmount = inputField;
    let borrowingAmountPercantage = borrowingAmount * 1.3;

    if (borrowingAmount < 250000) {
        showAnswer(anwserNA);   
    } else if (borrowingAmount >= 250000 && borrowingAmount <= 4000000){
        amountTextField.innerHTML = borrowingAmountPercantage;
        showQuestion(question3);        
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

//Question 3 ------
button3yes.addEventListener('click', event => {
    showQuestion(question4); 
    disableQuestion(question3);    
});



button3no.addEventListener('click', event => {
    checkAmount(borrowingAmount);
    disableQuestion(question3);
});


//Question 4 ------
button4yes.addEventListener('click', event => {
    showQuestion(question5);
    disableQuestion(question4);    
});

button4no.addEventListener('click', event => {
    showAnswer(anwserRaiseValuation);
    disableQuestion(question4);
});


//Question 5 ------
button5yes.addEventListener('click', event => {
    checkAmount(borrowingAmount);
    disableQuestion(question5);    
});

button5no.addEventListener('click', event => {
    showAnswer(anwserRaiseValuation);
    disableQuestion(question5);
});