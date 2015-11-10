var manager = quizManager();

$( document ).ready(function() {

	manager.initializeData();

});


$("#submitButton").click(function(){
      
      
	manager.handleResponse();

 }); 

function quizManager(){
	var listOfQuiz;
	var currentQuizIndex = 0;

	function handleResponse(){
		if ( listOfQuiz[currentQuizIndex].handleResponse())
		{
			// set it to next quiz , if required wrapit back to first
			if (listOfQuiz.length === currentQuizIndex + 1){
				currentQuizIndex = 0;
			} else {
				currentQuizIndex++;
			}
		}
	}

	function initializeData(){
		wcquestion1 = Object.create(question);
		wcquestion1.question = 'Who won the 1987 World Cup';
		wcquestion1.choices = ['India','Australia','West Indies','England'];
		wcquestion1.answer = 'Australia';

		wcquestion2 = Object.create(question);
		wcquestion2.question = 'Who won the 1992 World Cup';
		wcquestion2.choices = ['India','Australia','Pakistan','England'];
		wcquestion2.answer = 'Pakistan';

		quiz1 = Object.create(quiz);
		quiz1.questions=[wcquestion1,wcquestion2];
		listOfQuiz = [quiz1];

		//Ask the first question
		quiz1.askQuestion();

	}

	return{handleResponse:handleResponse, initializeData:initializeData }
}


function quiz(){
	var questions;
	var currentQuestionIndex = 0;
	function handleResponse(){

	}

	function askQuestion(){
		$('h2').html(questions[currentQuestionIndex].question);

	}

	return {questions:questions,handleResponse:handleResponse, askQuestion:askQuestion}
}

function question(){
	question :'Who won the world cup in 1983';
    choices  :['India','Australia','West Indies','England'];
	answer   :'India';
}