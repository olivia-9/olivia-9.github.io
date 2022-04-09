

const quizData = [
	{
		question: 'In what year was Leonardo da Vinci born?',
		a: '1502', 
		b: '1519', 
		c: '1452', 
		d: '1974',
		correctAnswer: "c"
	},

	{	question: 'How many sunflowers did Vincent Van Gogh paint?',
		a: '12', 
		b: '17', 
		c: '8', 
		d: '23',
		correctAnswer: "a"
	},

	{	question: 'What is a triptych?',
		a: 'A three layered print.', 
		b: 'A mix of three colours.', 
		c: 'A three-headed paintbrush.', 
		d: 'A three panelled painting.',
		correctAnswer: "d"
	}
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer == quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})


// function showQuestion(q) {
// 	let titleDiv = document.getElementById('title');
// 	titleDiv.textContent = q.title;

// 	let alts = document.querySelectorAll('.alternative');
// 	console.log(alts);
// 	alts.forEach(function(element, index){
// 		element.textContent = q.alternatives[index];

// 		element.addEventListener('click', function(){
// 			if (q.correctAnswer == index) {
// 				console.log('Correct Answer!');
// 			} else {
// 				console.log('Wrong Answer');
// 			}
// 		})
// 	});
// }

// showQuestion(question);

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function(){
// 	console.log('Clicked!');
// })

