// Define quiz questions and answers with image URLs
var quizData = [
  {
    question: "",
    answer: "jkrc",
    image: "",
    description: "What is the starting code?",
    hint: "",
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
    task: "Can't believe you kept this from us for such a long time 'Sean', oh well onto the next."
  },
  {
    question: "What am I.",
    answer: "bank",
    image: "",
    description: "I am a place where you can store your wealth, But not in the form of physical health. You can deposit and withdraw as you please. But I am not a vending machine or a sleaze.",
    hint: "most of us work for one",
    task: "Time to check that fitness, off to Rosebank now."
  },
  {
    question: "You will need to look hard for the pages.",
    answer: "Village",
    image: "",
    description: "Outside big blue where the ground was first broke, hidden in a tube lies your next stroke",
    hint: "Look for the pick axe",
    task: "Well found! Time for something different."
  },
  {
    question: "Many at a bakers dance",
    answer: "abundance",
    image: "",
    description: "To unlock your next task answer this cryptic crossword (9 letters).",
    hint: "another word for a lot",
    task: "Get to fournos and buy a baked good (if its closed then Bootleggers across the way)"
  },
  
  {
    question: "Name the sex position in the image below",
    answer: "butter churner",
    image: "sex pos.jpg",
    description: "I hope that was a tastey break, but no time for slacking a treasurer awaits.",
    hint: "your do it to goat and cow milk to make something...",
    task: "Nice work, if you got that on the first go come speak to me after the race!"
  },
  
  {
    question: "No answer to this question just click submit.",
    answer: "",
    image: "beatles.jpg",
    description: "You need to re-enact the infamous beatles photo below (and take a picture).",
    hint: "",
    task: "There's nothing you can do that can't be done. ",
  },

  {
    question: "What is it?",
    answer: "durex",
    image: "",
    description: "In xerud back this clue is found, purchase one from a shop around",
    hint: "a type of protection brand",
    task: "Get a condom, you dont need to buy one if you can get one from a public bathroom that's fine. P.S Jake and Rich you can't use any of the ones in your wallets they have been there for too long! ",
  },

  {
    question: "e.g rb6+ qxh5 rc8# (where rb6+ - means rook to B6 check, and qxh5 - means the queen must take on h5, and rc8# - rook to C8 check mate), dont put any comma's just first move then space second move space third move.",
    answer: "qg8+ qe6+ qd6#",
    image: "m3.jpg",
    description: "Any Bobby Fischer's in the house? White has mate in 3 can you find the right moves? ",
    hint: "",
    task: "Genius, I think you ready to take on Magnus!",
  },

  {
    question: "What do you call someone who cries every time they masturbate? - Clue its not Dean",
    answer: "tearjearker",
    image: "",
    description: "Joke time. (One word)",
    hint: "a something jerker ",
    task: "Sorry Deano i'm just projecting here. ",
  },

  {
    question: "No answer here just click submit",
    answer: "",
    image: "",
    description: "Go buy a food item that matches your teams colour. Be sure to bring it back safely.",
    hint: "",
    task: "Time for some ebarassment!",
  },
  {
    question: "Host an impromptu mob dance (doesn't have to be long) and then post the video to the group. When you done just click submit.",
    answer: "",
    image: "mob.jpg",
    description: "Ever seen a mob dance and thought, wow that would be super fun to be a part of?",
    hint: "",
    task: "I'm sure that was spectacular to watch and I will keep the footage forever.",
  },
  {
    question: "What am I?",
    answer: "bar",
    image: "beatles.jpg",
    description: "I am a word that can mean a measure of gold, But I am not a gram or a mold. I can also mean a place to have a drink, But I am not a pub or a sink.",
    hint: "The purchase of alcohol is frequently done there (3 letters)",
    task: "I'm sure you thirsty, head to Tasha's and buy a beer ro cocktail (don't forget to take a picture). ",
  },
  {
    question: "Get a picture with a security gaurd or any wearing an official uniform. Then click submit",
    answer: "",
    image: "beatles.jpg",
    description: "Thirst quenched?  ",
    hint: "",
    task: "We reaching the end of our journey, but there's still work to be done. ",
  },
  {
    question: "What am I?",
    answer: "wanderer",
    image: "beatles.jpg",
    description: "I am someone who roams from place to place, But I am not a bird or a race. I carry my home on my back, And I am always on a journey or a track.",
    hint: "The sports club where i live (singular)",
    task: "Make your way back to the padel gardens I'll see you there!",
  },


  
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
      resultElem.textContent += " Not so smart hey here's a clue to help: " + questionObj.hint;
    }
  }
}

function goToNextQuestion() {
  currentQuestion++;
  if (currentQuestion === quizData.length) {
    alert("Congratulations you are finished!");
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
