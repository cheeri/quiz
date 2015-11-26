

var quiz = {
	questions: [],
	currentquestion:0,
	ask:function ask(){
		$('h2').text(this.questions[this.currentquestion].ask);
		$('#label1').text(this.questions[this.currentquestion].choices[0]);
		$('#choice1').val(this.questions[this.currentquestion].choices[0]);

		$('#label2').text(this.questions[this.currentquestion].choices[1]);
		$('#choice2').val(this.questions[this.currentquestion].choices[1]);

		$('#label3').text(this.questions[this.currentquestion].choices[2]);
		$('#choice3').val(this.questions[this.currentquestion].choices[2]);

		$('#label4').text(this.questions[this.currentquestion].choices[3]);
		$('#choice4').val(this.questions[this.currentquestion].choices[3]);

		/*if (this.currentquestion > 0)
		{
			$('h3').text(this.questions[this.currentquestion-1].answer_description);
		}*/

	},
	currentAnswer: function currentAnswer(){
		return this.questions[this.currentquestion].answer
	},
	answerDescription: function answerDescription(){
		return this.questions[this.currentquestion-1].answer_description
	}

}

var question = {
	ask      :'Who won the world cup in 1983', 
	choices  :['India','Australia','West Indies','England'],
	answer   :'India',
	answer_description:''
}

var manager = quizManager();

var correctAnswerCounter = 0;

$( document ).ready(function() {

	manager.initializeData();

	$('#submitButton').click(manager.handleResponse); 
	$("input[type='checkbox']").click(manager.controlchecks); 

});



function quizManager(){
	var thequiz = Object.create(quiz);
	var currentQuizIndex = 0;

	function handleResponse(event){
		
		var choice = $('input:checked').val();
		
		if (choice === thequiz.currentAnswer())
		{
			correctAnswerCounter++;
		}

		
		thequiz.currentquestion++;

		
		$('h3').text(thequiz.answerDescription());
		
		if (thequiz.currentquestion < 6) 
		{
			thequiz.ask();
		}
		else
		{

			var message = 'End of quiz, you got   ' +  correctAnswerCounter.toString() +  '  correct';
			alert(message);
			currentQuizIndex = 0;
			thequiz.currentquestion =0;
			correctAnswerCounter = 0;
			thequiz.ask();
			$('h3').text('');

		}
		
		
	}

	function controlchecks(event){
		
		if (event.currentTarget.id !== 'choice1')
			$('#choice1').prop('checked',false);
		if (event.currentTarget.id !== 'choice2')
			$('#choice2').prop('checked',false);
		if (event.currentTarget.id !== 'choice3')
			$('#choice3').prop('checked',false);
		if (event.currentTarget.id !== 'choice4')
			$('#choice4').prop('checked',false);
	}

	function initializeData(){
		
		//var quiz1 = Object.create(quiz);

		var wcquestion1 = Object.create(question);
		wcquestion1.ask = 'Who won the 1987 World Cup';
		wcquestion1.choices = ['NewZealand','Australia','West Indies','England'];
		wcquestion1.answer = 'Australia';
		wcquestion1.answer_description = 'Australia Won the cup in 1987 . They were underdogs, India/Pakistan were expected to win';

		var wcquestion2 = Object.create(question);;
		wcquestion2.ask = 'Who won the 1992 World Cup';
		wcquestion2.choices = ['India','West Indies','Pakistan','Sri Lanka'];
		wcquestion2.answer = 'Pakistan';
		wcquestion2.answer_description = 'Pakistan  Won the cup in 1992 . An amazing come from behind story';

		var wcquestion3 = Object.create(question);;
		wcquestion3.ask = 'Who won the 1996 World Cup';
		wcquestion3.choices = ['India','South Africa','Pakistan','Sri Lanka'];
		wcquestion3.answer = 'Sri Lanka';
		wcquestion3.answer_description = 'Sri Lanka  Won the cup in 1996 . None expected them to ';

		var wcquestion4 = Object.create(question);;
		wcquestion4.ask = 'Who won the 1999 World Cup';
		wcquestion4.choices = ['Australia','South Africa','Pakistan','Sri Lanka'];
		wcquestion4.answer = 'Australia';
		wcquestion4.answer_description = 'Australia  Won the cup in 1999 . Semi Final agaonst South Africa was probably best game ever played ';

		var wcquestion5 = Object.create(question);;
		wcquestion5.ask = 'Who won the 2003 World Cup';
		wcquestion5.choices = ['India','Australia','Pakistan','Sri Lanka'];
		wcquestion5.answer = 'Australia';
		wcquestion5.answer_description = 'Australia  Won the cup in 2003. They were favorites';

		var wcquestion6 = Object.create(question);;
		wcquestion6.ask = 'Who won the 2007 World Cup';
		wcquestion6.choices = ['Australia','West Indies','Pakistan','Sri Lanka'];
		wcquestion6.answer = 'Australia';
		wcquestion6.answer_description = 'Australia again, easy victory';

		thequiz.questions=[wcquestion1,wcquestion2, wcquestion3,wcquestion4,wcquestion5,wcquestion6 ];
		//listOfQuiz = [quiz1];

		//Ask the first question
		thequiz.ask();

	}

	return{handleResponse:handleResponse, initializeData:initializeData , controlchecks:controlchecks};
}




