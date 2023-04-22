// Define quiz questions and answers with image URLs
var quizData = [
  {
    question: "",
    answer: "jkrc",
    image: "",
    description: "What is the starting code?",
    hint: "silly",
    task: "Let the games begin..."
  },
 
  {
    question: "Who wins? By how much? Answer with adam's score-eve's score e.g 10-0",
    answer: "7-3",
    image: "rps.jpg",
    description: "Adam and Eve play rock-paper-scissors 10 times. You know that: Adam uses rock three times, scissors six times, and paper once. Eve uses rock twice, scissors four times, and paper four times. There are no ties in all 10 games. The order of games is unknown.",
    hint: "Eve didn't play scissors any of the 6 times Adam did so then you can work out how many of those six games Adam won.",
    task: "I'm a fan of Lazarus and his race especially the part with the pages! "
  },
  {
    question: "Find your teams page and enter the code on the back.",
    answer: "parmasean",
    image: "",
    description: "In the forest you will find some colourful pages dashed around.",
    hint: "Look for pages stuck on trees",
    task: "Find your teams colour and enter the clue to"
  },
  {
    question: "What am I.",
    answer: "parmasean",
    image: "bread_dance.jpg",
    description: "I am a place where you can store your wealth, But not in the form of physical health. You can deposit and withdraw as you please. But I am not a vending machine or a sleaze.",
    hint: "a type of protection brand",
    task: "Outside the big blue where ground was broke, you will find the answer to the next question"
  },
  {
    question: "What is the solution?",
    answer: "durex",
    image: "bread_dance.jpg",
    description: "In xerud back, this clue is found purchase one from a shop around.",
    hint: "a type of protection brand",
    task: ""
  },
  {
    question: "Many at a bakers dance",
    answer: "abundance",
    image: "bread_dance.jpg",
    description: "To unlock your first task answer this cryptic crossword (9 letters).",
    hint: "another word for a lot",
    task: "Get to fournos and buy a croissant"
  },
  {
    question: "What's the next best move for white?",
    answer: "",
    image: "bread_dance.jpg",
    description: "Mate in 3 ",
    hint: "",
    task: "",
  },
  {
    question: "Find your teams colour page and enter the code on it is the answer.",
    answer: "",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "In the forest your colour will be found"
  },
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "Do this"
  },
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "Do this"
  },
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "Do this"
  },
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "Do this"
  },
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg",
    description: "Do this"
  }

  
  // Add more questions here...
];

/*
// Initialize quiz index
var quizIndex = 0;

// Get quiz container element
var quizContainer = document.getElementById("quiz");


// or load question (instead of below)

function loadQuestion() {
  var questionContainer = document.getElementById("quiz");
  questionContainer.style.backgroundImage = "url('" + quizData[currentQuestionIndex].image + "')";

  var questionElement = document.getElementById("question");
  questionElement.innerHTML = quizData[currentQuestionIndex].question;

  var answerElement = document.getElementById("answer");
  answerElement.value = "";

  var descriptionElement = document.getElementById("description");
  descriptionElement.innerHTML = quizData[currentQuestionIndex].description;
}


    // Generate HTML for current quiz question
   function generateQuizQuestion() {
      var currentQuestion = quizData[quizIndex];
      var questionHTML = "<p>" + currentQuestion.description + "</p>" +
                         "<p>" + currentQuestion.question + "</p>" +
                         "<img src='" + currentQuestion.image + "'>" +
                         "<input type='text' id='answer'>" +
                         "<button class = 'button' onclick='checkAnswer()'>Submit</button>";
      quizContainer.innerHTML = questionHTML;
    } */

    var currentQuestion = 0;
var numTries = 0;

var questionElem = document.getElementById("question");
var answerElem = document.getElementById("answer");
var submitButton = document.getElementById("submit-answer");
var resultElem = document.getElementById("result");
var imageElem = document.getElementById("image");
var descriptionElem = document.getElementById("description");
var nextButton = document.getElementById("next-question");
var task = document.getElementById("task")

function displayQuestion() {
  var questionObj = quizData[currentQuestion];
  questionElem.textContent = questionObj.question;
  imageElem.src = questionObj.image;
  descriptionElem.textContent = questionObj.description;
  resultElem.textContent = "";
  answerElem.value = "";
  answerElem.focus();
  submitButton.disabled = false;
  nextButton.style.display = "none";
}

function checkAnswer() {
  var questionObj = quizData[currentQuestion];
  var userAnswer = answerElem.value.trim().toLowerCase();
  if (userAnswer === questionObj.answer.toLowerCase()) {
    resultElem.textContent = questionObj.task;
    numTries = 0;
    submitButton.disabled = true;
    nextButton.style.display = "inline-block";
  } else {
    numTries++;
    resultElem.textContent = "Incorrect! Try again.";
    if (numTries >= 3) {
      resultElem.textContent += " Here's a hint: " + questionObj.hint;
    }
  }
}

function goToNextQuestion() {
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    alert("You have completed the quiz!");
  } else {
    displayQuestion();
  }
}

displayQuestion();

submitButton.addEventListener("click", checkAnswer);
nextButton.addEventListener("click", goToNextQuestion);


/*
// Check user's answer against correct answer
function checkAnswer() {
  var input = document.getElementById("answer").value;
  var currentQuestion = quizData[quizIndex];
  if (input === currentQuestion.answer) {
    document.getElementById("output").innerHTML = "Correct!";
    // Move on to next question or display quiz results
    quizIndex++;
    if (quizIndex < quizData.length) {
      generateQuizQuestion();
    } else {
      // Display quiz results
      quizContainer.innerHTML = "<p>Quiz complete!</p>";
    }
  } else {
    document.getElementById("output").innerHTML = "Incorrect. Please try again.";
  }
}



// Start quiz
generateQuizQuestion();


//change background colour
const colorIcons = document.querySelectorAll('.color-icon');
const body = document.querySelector('body');

colorIcons.forEach((icon) => {
  icon.addEventListener('click', () => {
    const color = icon.getAttribute('data-color');
    body.style.backgroundColor = color;
  });
}); */
