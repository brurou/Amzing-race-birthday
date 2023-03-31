// Define quiz questions and answers with image URLs
var quizData = [
  {
    question: "What is 2+2?",
    answer: "4",
    image: "https://cdn.pixabay.com/photo/2016/06/13/00/54/mathematics-1453413_960_720.jpg"
  },
  {
    question: "What is the capital of France?",
    answer: "Paris",
    image: "https://cdn.pixabay.com/photo/2016/09/22/13/52/eiffel-tower-1686314_960_720.jpg"
  },
  // Add more questions here...
];

// Initialize quiz index
var quizIndex = 0;

// Get quiz container element
var quizContainer = document.getElementById("quiz");

// Generate HTML for current quiz question
function generateQuizQuestion() {
  var currentQuestion = quizData[quizIndex];
  var questionHTML = "<p>" + currentQuestion.question + "</p>" +
                     "<img src='" + currentQuestion.image + "'>" +
                     "<input type='text' id='inputField'>" +
                     "<button onclick='checkAnswer()'>Submit</button>";
  quizContainer.innerHTML = questionHTML;
}

// Check user's answer against correct answer
function checkAnswer() {
  var input = document.getElementById("inputField").value;
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
