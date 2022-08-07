const readLineSync = require("readline-sync");

let guestName = ''
const welcome = () => {
  console.log('Welcome To The Cricket Quiz 🏏🏏🏏\n')
  guestName = readLineSync.question("Please Enter Your Name: ");
  console.log(`${'Welcome '}${guestName}\n`)
}

const questionArray = [
  {
    id: 1,
    question: 'Who is the captain of team India when they won the world-cup in 2011?',
    options: [
      { id: 1, value: 'Sachin' },
      { id: 2, value: 'Dhoni' },
      { id: 3, value: 'Kohli' },
      { id: 4, value: 'None of the above' }
    ],
    answer: 'Dhoni'
  },
  {
    id: 2,
    question: 'In which year India won 20-20 World Cup?',
    options: [
      { id: 1, value: '2007' },
      { id: 2, value: '2009' },
      { id: 3, value: '2011' },
      { id: 4, value: '2015' }
    ],
    answer: '2007'
  },
  {
    id: 3,
    question: 'How many centuries did Sachin hit in his entire carrer',
    options: [
      { id: 1, value: '50' },
      { id: 2, value: '100' },
      { id: 3, value: '150' },
      { id: 4, value: '200' },
    ],
    answer: '100'
  },
  {
    id: 4,
    question: 'How many max overs one bowser can bowl in ODI?',
    options: [
      { id: 1, value: '30' },
      { id: 2, value: '40' },
      { id: 3, value: '20' },
      { id: 4, value: '10' },
    ],
    answer: '10'
  },
  {
    id: 5,
    question: `If bowler oversteps while bowling then what it's called?`,
    options: [
      { id: 1, value: 'Wide' },
      { id: 2, value: 'Yorker' },
      { id: 3, value: 'No Ball' },
      { id: 4, value: 'Leg Byes' },
    ],
    answer: 'No Ball'
  },
  {
    id: 6,
    question: `How many players are in a cricket team?`,
    options: [
      { id: 1, value: '7' },
      { id: 2, value: '8' },
      { id: 3, value: '10' },
      { id: 4, value: '11' },
    ],
    answer: '11'
  },
  {
    id: 7,
    question: `A century is a score of ______ or more`,
    options: [
      { id: 1, value: '50' },
      { id: 2, value: '100' },
      { id: 3, value: '150' },
      { id: 4, value: '200' },
    ],
    answer: '100'
  },
  {
    id: 8,
    question: `How is an over in which no runs are scored called?`,
    options: [
      { id: 1, value: 'Maiden' },
      { id: 2, value: 'Yorker' },
      { id: 3, value: 'Overthrows' },
    ],
    answer: 'Maiden'
  },
  {
    id: 9,
    question: `What does IPL stand for?`,
    options: [
      { id: 1, value: 'International Players League' },
      { id: 2, value: 'Indain Pool League' },
      { id: 3, value: 'Indian Premier League' },
      { id: 4, value: 'None of the above' },
    ],
    answer: 'Indian Premier League'
  },
]

const startQuiz = () => {
  let score = 0;
  console.log(`Please type your answer from given options \n`)

  questionArray.forEach((item) => {
    console.log(`${item.id}.${item.question}`)
    item.options.forEach((option) => {
      console.log(`  ${option.id}.${option.value}`)
    })
    const userAnswer = readLineSync.question('\nYour Answer: ')

    if (userAnswer.toLowerCase() === item.answer.toLowerCase()) {
      console.log('Right 🥳🥳🥳\n');
      score += 1;
    } else {
      console.log('Wrong 🥺🥺🥺\n');
    }
    console.log(`${'Your Score is'} ${score} \n`);
  })

  console.log(`${guestName}, Your Final Scoer is ${score} out of ${questionArray.length}`)
}

welcome();
startQuiz();
