
let question = 'text';
let answer1 = 'text';
let answer2 = 'text';
let answer3 = 'text';
let count = 0;

// let answer1HTML = document.createTextNode(answer1);
// .appendChild(answer1);

function ask (arr) {

  question = arr[count].question;
  answer1 = arr[count].answer1;
  answer2 = arr[count].answer2;
  answer3 = arr[count].answer3;


	count += 1;
	
	const getTheDiv = document.getElementById('questions')
	const questionsForm = document.createElement('form');
	getTheDiv.appendChild(questionsForm);
	const legend = document.createElement('legend');
	questionsForm.appendChild(legend);
	let questionHTML = document.createTextNode(question);
	legend.appendChild(questionHTML);

	const theInput = document.createElement('input');
	theInput.setAttribute('id', 'answer1');
	theInput.setAttribute('type', 'radio');
	theInput.setAttribute('name', 'answer');
	questionsForm.appendChild(theInput);
	const label1 = document.createElement('label');
	label1.setAttribute('for', 'answer1')
	let answer1HTML = document.createTextNode(answer1);
	label1.appendChild(answer1HTML);
	questionsForm.appendChild(label1)


	const theInput2 = document.createElement('input');
	theInput.setAttribute('id', 'answer2');
	theInput2.setAttribute('type', 'radio');
	theInput2.setAttribute('name', 'answer')
	questionsForm.appendChild(theInput2);
	const label2 = document.createElement('label');
	label2.setAttribute('for', 'answer2');
	let answer2HTML = document.createTextNode(answer2);
	label2.appendChild(answer2HTML);
	questionsForm.appendChild(label2);

	const theInput3 = document.createElement('input');
	theInput.setAttribute('id', 'answer3');
	theInput3.setAttribute('type', 'radio');
	theInput3.setAttribute('name', 'answer')
	questionsForm.appendChild(theInput3);
	const label3 = document.createElement('label');
	label3.setAttribute('for', 'answer3')
	let answer3HTML = document.createTextNode(answer3);
	label3.appendChild(answer3HTML);
	questionsForm.appendChild(label3);

	const submitButton = document.createElement('button');
	submitButton.setAttribute('type', 'button');
	submitButton.
	questionsForm.appendChild(submitButton);
}

questionsArr = [
  {question: 'qual eh?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
  },
  {question: 'qual foi?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
  },
];

//   on click pra saber o que respondeu
//   condicional pra dizer se acertou
//   volta jogo;