// You should create an array named questions.
// The questions array should contain at least five objects, each having the keys category, question, choices, and answer.
// The category key should have the value of a string representing a question category.
// The question key should have the value of a string representing a question.
// The choices key should have the value of an array containing three strings, which are alternative answers to the question.
// The answer key should have the value of a string, representing the correct answer to the question. Also, the value of answer should be included in the choices array.
// You should have a function named getRandomQuestion that takes an array of questions as a parameter and returns a random question object from the array.
// You should have a function named getRandomComputerChoice that takes the array of the available choices as a parameter, and returns a random answer to the selected question.
// You should have a function named getResults that takes the question object as the first parameter and the computer's choice as the second parameter. The function should return The computer's choice is correct! if the answer is correct. Otherwise, it returns The computer's choice is wrong. The correct answer is: <correct-answer>, where <correct-answer> is the value of the correct answer to the chosen question.

const questions = [
  {
    category: "JavaScript",
    question:
      "Which method is used to convert a JSON string into a JavaScript object?",
    choices: ["JSON.parse()", "JSON.stringify()", "Object.fromJSON()"],
    answer: "JSON.parse()",
  },
  {
    category: "Web3",
    question: "Which blockchain uses the Move programming language?",
    choices: ["Solana", "Sui", "Polygon"],
    answer: "Sui",
  },
  {
    category: "Gaming",
    question: "Which role is commonly played in MOBA games?",
    choices: ["Support", "Pilot", "Striker"],
    answer: "Support",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2O", "CO2"],
    answer: "H2O",
  },
  {
    category: "General Knowledge",
    question: "Which planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
];

function getRandomQuestion(pertanyaan) {
  const acak = Math.floor(Math.random() * pertanyaan.length);
  return pertanyaan[acak];
}

function getRandomComputerChoice(pilihan) {
  const acak = Math.floor(Math.random() * pilihan.length);
  return pilihan[acak];
}

function getResults(question, computerchoice) {
  if (question.answer === computerchoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
const randomQ = getRandomQuestion(questions);
const randomC = getRandomComputerChoice(randomQ.choices);
const result = getResults(randomQ, randomC);
