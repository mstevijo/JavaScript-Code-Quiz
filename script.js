var startButton = document.querySelector(".button");
var timerHtml = document.querySelector(".timer");
var quizQuestion =document.getElementById(".question");
var timeLeft = 0;
var intervalId;
var score = 0;
var numCorrect = 0;
var runningQuestion = 0;

document.getElementById("questionbox").style.display = "none";
var myQuestions = [
	{
		question: "question I will ask 1Which of the following is correct about features of JavaScript?",
		answers: {
			a: 'JavaScript is is complementary to and integrated with HTML.',
            b: 'JavaScript is open and cross-platform',
            c: 'All of the above'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which built-in method adds one or more elements to the end of an array and returns the new length of the array",
		answers: {
			a: 'push()',
            b: 'put()',
            c: 'last()',
		},
		correctAnswer: 'a'
	},
	{
		question: "Which built-in method retuns the calling string value converted to lower case letters?",
		answers: {
			a: 'toLower',
            b: 'toLowerCase()',
            c: 'changeCase(case)'
		},
		correctAnswer: 'b'
	}
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');



showQuestions();
	function showQuestions(){
		// we'll need a place to store the output and the answer choices
		var output = [];
		var answers;
 
	let q = myQuestions[runningQuestion];

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = q.question;
	option1.innerHTML = q.answers.a;
    option2.innerHTML = q.answers.b;
    option3.innerHTML = q.answers.c;
	
	}
	
	




	// show questions right away
	
	
	// on submit, show results



	submitButton.onclick = function(){
		//showResults(questions, quizContainer, resultsContainer);
		endGame();
	}
function checkAnswer(answer){
	 
    if( answer == myQuestions[runningQuestion].correctAnswer){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
 //   count = 0;

    
}
var lastQuestion = myQuestions.length - 1;
function answerIsWrong() {
	 
    timeLeft -= 10; 
	 timerHtml.textContent= timeLeft;
	if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestions();
    }else{
		  
        // end the quiz and show the score
        clearInterval(intervalId);
       resultsContainer.innerHTML = "<p>"+ timeLeft +"</p>";
		  var quizContent = `
      <h2>Game over!</h2>
	  `;
     // 
      document.getElementById("questionbox").innerHTML = quizContent;
    }
   // next();
}

function answerIsCorrect() {
	 
    score += 10;
	 timeLeft += 10;
if(timeLeft >75){
		timeLeft = 75;
		 timerHtml.textContent= timeLeft;
	}	 
	 timerHtml.textContent= timeLeft;
   // next();
   if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestions();
    }else{
		 
        // end the quiz and show the score
		 resultsContainer.innerHTML = "<p>"+ timeLeft +"</p>";
        clearInterval(intervalId);
       
		  var quizContent = `
          <h2>Game over!</h2>
      `;
      
     // 
      document.getElementById("questionbox").innerHTML = quizContent;
    }
}
startButton.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("questionbox").style.display = "block";
  timeLeft = 75;

  intervalId = setInterval(function () {
    timeLeft--;
    timerHtml.textContent= timeLeft;

    if (timeLeft == 0){
		clearTimeout(intervalId);
  timeLeft = 0;
        //clearInterval(timerHtml);
        //endGame();
    }
  }, 1000);
 // next();
  }
function scoreRender(){

   
    // calculate the amount of question percent answered by the user
   // const scorePerCent = Math.round(100 * score/myQuestions.length);
    // choose the image based on the scorePerCent
 
        	resultsContainer.innerHTML = "<p>"+ timeLeft +"</p>";
//endGame();
   // scoreDiv.innerHTML = "<img src="+ img +">";
   // scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";

}

  function endGame() {
      prompt("high score!")
      clearInterval(timerHtml)
      var quizContent = `
      <h2>Game over!</h2>
      <h3>You got a ` + numCorrect+ ` marks</h3>
     <h3>That means you got ` + numCorrect+  ` questions correct!</h3>
      <input type="text" id="name" placeholder="First name"> 
      <button onclick="setScore()">Set score!</button>`;
     // 
      document.getElementById("quiz").innerHTML = quizContent;

  }
 