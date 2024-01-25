'use strict'

const questions = [
  /*
  {
    question: 'שאלון הטריויה שיסעיר אתכם! מוכנים להתחיל?',
    answer: ['חד מש', 'לגמרי', 'כן', 'אם אין ברירה, אז בסדר..'],
    correctAnswer: ['חד מש', 'לגמרי', 'כן', 'אם אין ברירה, אז בסדר..']
  },
  */
  {
    question: 'מאיפה מקבלים אריות את רוב המים שלהם?',
    answer: ['מהטרף שלהם', 'מנחלים', 'ממעיינות', 'מאכילת עלים וצמחים'],
    correctAnswer: 'מהטרף שלהם'
  },
  {
    question: 'מכמה נוירונים מורכב המוח הממוצע?',
    answer: ['100 אלף', 'מיליון', 'מאה מיליארד', '10 מיליון'],
    correctAnswer: 'מאה מיליארד'
  },
  {
    question: 'מה סוג הסוכר שיש בחלב?',
    answer: ['פרוקטוז', 'גלקטוז', 'סוכרוז', 'לקטוז'],
    correctAnswer: 'לקטוז'
  },
  {
    question: 'באיזו שנה טבעה הטיטאניק?',
    answer: ['1921', '1915', '1912', '1927'],
    correctAnswer: '1912'
  },
  {
    question: 'באיזו תקופה גאולוגית חי הדינוזאור הטורף טירנוזאור רקס?',
    answer: ['פלאוגן', 'קרטיקון', 'יורה', 'פרם'],
    correctAnswer: 'קרטיקון'
  },
  {
    question: 'איך קוראים לאטום עם מטען חשמלי חיובי או שלילי?',
    answer: ['מולקולה', 'אלקטרון', 'פרוטון', 'יון'],
    correctAnswer: 'יון'
  }
];

let score = 0;
let currentQuestionIndex = 0;

const elmProgress = document.querySelector('#questionNum');
const elmScore = document.querySelector('#totalScore');
const elmQuestion = document.querySelector('#question');
const elmAnswer1 = document.querySelector('#answer1');
const elmAnswer2 = document.querySelector('#answer2');
const elmAnswer3 = document.querySelector('#answer3');
const elmAnswer4 = document.querySelector('#answer4');

function userChoose(answer) {
  // 1. is the answer correct ? if yes: add 10 points to score
  if (answer === questions[currentQuestionIndex].correctAnswer) {
    score += 10;
  }

  // 2. advance one question (currentQuestionIndex++)
  currentQuestionIndex++;

  // 3. update the UI (html)
  updateDisplay();
}

function updateDisplay() {

  elmScore.innerText = `${score} נקודות`;

  // is game over ?
  if (questions.length === currentQuestionIndex) {
    elmProgress.innerText = `שאלה ${currentQuestionIndex} מתוך ${questions.length}`;
    elmQuestion.innerHTML = 
    `
      המשחק הסתיים
      </br></br>
      צברת ${score} נקודות
      </br>
      מתוך סך הכל ${questions.length*10} אפשריות
    `
    elmAnswer1.remove();
    elmAnswer2.remove();
    elmAnswer3.remove();
    elmAnswer4.remove();
    return;
  }

  elmProgress.innerText = `שאלה ${currentQuestionIndex+1} מתוך ${questions.length}`;

  elmQuestion.innerText = questions[currentQuestionIndex].question;
  elmAnswer1.innerText = questions[currentQuestionIndex].answer[0];
  elmAnswer2.innerText = questions[currentQuestionIndex].answer[1];
  elmAnswer3.innerText = questions[currentQuestionIndex].answer[2];
  elmAnswer4.innerText = questions[currentQuestionIndex].answer[3];

}

updateDisplay();