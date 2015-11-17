var manager = quizManager();

var quiz = {
	questions: [],
	currentquestion:0,
	ask:function(){
		$('h2').text(this.questions[this.currentquestion].ask);
		$('#label1').text(this.questions[this.currentquestion].choices[0]);
		$('li#choice2 label').text(this.questions[this.currentquestion].choices[1]);
		$('li#choice3 label').text(this.questions[this.currentquestion].choices[2]);
		$('li#choice4 label').text(this.questions[this.currentquestion].choices[3]);

	}


}

var question = {
	ask      :'Who won the world cup in 1983', 
	choices  :['India','Australia','West Indies','England'],
	answer   :'India'
}

$( document ).ready(function() {

	$('li').click(function(e){
    	e.stopPropagation();
  	});

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
		
		var quiz1 = Object.create(quiz);

		var wcquestion1 = Object.create(question);
		wcquestion1.ask = 'Who won the 1987 World Cup';
		wcquestion1.choices = ['NewZealand','Australia','West Indies','England'];
		wcquestion1.answer = 'Australia';

		var wcquestion2 = Object.create(question);;
		wcquestion2.question = 'Who won the 1992 World Cup';
		wcquestion2.choices = ['India','West Indies','Pakistan','Sri Lanka'];
		wcquestion2.answer = 'Pakistan';

		quiz1.questions=[wcquestion1,wcquestion2];
		listOfQuiz = [quiz1];

		//Ask the first question
		quiz1.ask();

	}

	return{handleResponse:handleResponse, initializeData:initializeData };
}




