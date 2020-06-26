

// question 1

// if 'yes' button is clicked run add show function
// -- listen to click of button
// -- if value is 'yes' show question 2
// -- if 'no' button is clicked show question 2b

// create function which toggles .show
let button1yes = document.getElementById('1yes');
let button1no = document.getElementById('1no');

const question1 = document.getElementById('question-1');
const question2 = document.getElementById('question-2');
const question2b = document.getElementById('question-2b');
const question3 = document.getElementById('question-3');
const question4 = document.getElementById('question-4');
const question5 = document.getElementById('question-5');





function showQuestion(question) {
    question.classList.add("show");
};

//disables buttons and adds "disable" to the question
function disableQuestion(question) {
    var buttons = question.querySelectorAll('button');    
    buttons.forEach(element => {
        element.disabled = true;
        
    });
    question.classList.add("disable");
}



button1yes.addEventListener('click', event => {
    showQuestion(question2); 
    disableQuestion(question1);    
});

button1no.addEventListener('click', event => {
    showQuestion(question2b);
});