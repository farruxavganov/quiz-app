const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quizHead = document.querySelector(".quiz__head");
const questionEle = document.getElementById("question");
const input_a = document.getElementById("text_a");
const input_b = document.getElementById("text_b");
const input_c = document.getElementById("text_c");
const input_d = document.getElementById("text_d");
const inputs = document.querySelectorAll("input[name='answer']");
const submit = document.querySelector(".btn");

let countQuistionIndex = 0;
let correct = 0;

submit.addEventListener("click", main);
createQuiz();

function main () {
	if(checkedElement()){
		countQuistionIndex++;
		corractAnswerCount();
		if(countQuistionIndex < quizData.length){
			unCheck();
			createQuiz();
		}else {
			let element = htmlElement();

			quizHead.innerHTML = element;

			submit.innerHTML = "Reload";
			submit.addEventListener("click", function(){
				location.reload();
			})
			submit.removeEventListener("click", main);
		}
	}else {
		alert("Siz javob tanlamadingiz. Iltmos javob tanlang!")
	}
}

function createQuiz() {
	let question = quizData[countQuistionIndex];

	questionEle.textContent = question.question;
	forNextElementSibling(input_a).textContent = question.a;
	forNextElementSibling(input_b).textContent = question.b;
	forNextElementSibling(input_c).textContent = question.c;
	forNextElementSibling(input_d).textContent = question.d;
}

function checkedElement() {
	let checkedElementValue = undefined;
	inputs.forEach(function(elenent){
		if(elenent.checked){
			checkedElementValue = elenent.value;
		}
	})
	return checkedElementValue;
}

function unCheck() {
	inputs.forEach(item => {
		item.checked = false;
	})
}

function corractAnswerCount(){
	if(checkedElement() == quizData[countQuistionIndex - 1].correct){
		correct++;
	}
}
function forNextElementSibling(nawElement){
	 return nawElement.nextElementSibling;
}
function htmlElement() {
	return `<ul class="quiz__correct">
                <li class="quiz__c">To'g'ri: ${correct}</li>
                <li class="quiz__i">Noto'g'ri: ${quizData.length - correct}</li>
                <li class="quiz__all">Umumiy Savol: ${quizData.length}</li>
            </ul>`
}