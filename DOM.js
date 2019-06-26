
let questionsArr = [
  {question: 'qual eh?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: 'sim',
  },
  {question: 'qual foi?',
    answer1: 'sim',
    answer2: 'NAO',
    answer3: 'sim',
    rightAnswer: 'NAO',
  },
  {question: 'qual 3',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: 'sim',
  },
  {question: 'qual 4?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: 'sim',
  },
  {question: 'qual 5',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
  {question: 'qual 6',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
  {question: 'qual 7?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
  {question: 'qual 8?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
  {question: 'qual 9?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
  {question: 'qual 10?',
    answer1: 'sim',
    answer2: 'nao',
    answer3: 'sim',
    rightAnswer: this.answer1,
  },
];

let question = 'text';
let answer1;
let answer2;
let answer3;
let rightAnswer;
let rateValue1;
let rateValue2;
let rateValue3;
let count = 0;
let answers;
let canCrash = true;
let getTheDiv;

function ask (arr) {

  question = arr[count].question;
  answer1 = arr[count].answer1;
  answer2 = arr[count].answer2;
  answer3 = arr[count].answer3;

  getTheDiv = document.getElementById('questions')
  const questionsForm = document.createElement('form');
  getTheDiv.appendChild(questionsForm);
  const legend = document.createElement('legend');
  questionsForm.appendChild(legend);
  let questionHTML = document.createTextNode(question);
  legend.appendChild(questionHTML);

  const theInput = document.createElement('input');
  theInput.setAttribute('id', 'answer1');
  theInput.setAttribute('type', 'radio');
  theInput.setAttribute('value', answer1)
  theInput.setAttribute('name', 'answer');
  questionsForm.appendChild(theInput);
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'answer1')
  let answer1HTML = document.createTextNode(answer1);
  label1.appendChild(answer1HTML);
  questionsForm.appendChild(label1)


  const theInput2 = document.createElement('input');
  theInput2.setAttribute('id', 'answer2');
  theInput2.setAttribute('type', 'radio');
  theInput2.setAttribute('name', 'answer')
  theInput2.setAttribute('value', answer2)
  questionsForm.appendChild(theInput2);
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'answer2');
  let answer2HTML = document.createTextNode(answer2);
  label2.appendChild(answer2HTML);
  questionsForm.appendChild(label2);

  const theInput3 = document.createElement('input');
  theInput3.setAttribute('id', 'answer3');
  theInput3.setAttribute('type', 'radio');
  theInput3.setAttribute('name', 'answer')
  theInput3.setAttribute('value', answer3)
  questionsForm.appendChild(theInput3);
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'answer3')
  let answer3HTML = document.createTextNode(answer3);
  label3.appendChild(answer3HTML);
  questionsForm.appendChild(label3);

  const submitButton = document.createElement('button');
  submitButton.setAttribute('onclick', 'getInfo()')
  submitButton.setAttribute('type', 'button');
  questionsForm.appendChild(submitButton);
}

function getInfo () {
  if (document.getElementById('answer1').checked) {
    rateValue1 = document.getElementById('answer1').value;
    console.log('resposta1')
  }
  if (document.getElementById('answer2').checked) {
    rateValue2 = document.getElementById('answer2').value;
    console.log('resposta2');
  }
  if (document.getElementById('answer3').checked) {
    rateValue3 = document.getElementById('answer3').value;
    console.log('resposta3')
  };
	if (rateValue1 === questionsArr[count].rightAnswer || rateValue2 === questionsArr[count].rightAnswer || rateValue3 === questionsArr[count].rightAnswer) {
		console.log('rodou');
		count += 1
		rightAnswerInterval();
		setTimeout(() => {
			canCrash = true;
		}, 2000);
	}
}

// let radios = document.getElementsByName(radioName);
// for (let i = 0; i < radios.length; i+=1) {
// 	if(radios[i].checked)
// 		return radios[i].value;
// }
// 	if (getInfo(questions[i] === answers[i]))
// 	return `Congratulations! You are right`;
// } else {
// 	`You're wrong`;
// }
// 	const output = [];
// }

//   condicional pra dizer se acertou
//   volta jogo;