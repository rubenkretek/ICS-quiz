let button1yes = document.getElementById('1yes');
let button1no = document.getElementById('1no');
let button2b = document.getElementById('2b-submit');

let borrowingAmount = 0;

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



button2b.addEventListener('click', event => {
    let inputField = document.getElementById('2b-input').value;
    borrowingAmount = inputField;

    if (borrowingAmount > 1999999 && borrowingAmount < 5000000) {
        console.log("ct sme");   
    } else if (borrowingAmount > 5000000 && borrowingAmount < 10000000){
        console.log('ct executive');        
    } else if (borrowingAmount > 10000000) {
        console.log('ct corporate');        
    }
});
