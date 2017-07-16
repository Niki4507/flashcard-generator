
//variable requirements
var ClozeCard 	= require("./clozeCard.js");
var BasicCard 	= require("./basicCard.js");
var inquirer	= require("inquirer");


//choose which card type
var question_1 = [{
	name:"cardChoice",
	message: "Select 1 for BasicCard \n  Select 2 for ClozeCard\n"
}
];
//---For BasicCard option---
var question_2 = [{
	name: "front",
	message: "Enter the card front text here: "
},
{
	name:"back",
	message: "Enter the card back text here: "
}
];
//---For ClozeCard option---
var question_3 = [{
	name: "fullText",
	message: "Enter the full card text here: "
},
{
	name:"cloze",
	message: "Enter the cloze text here: "
}
];











inquirer.prompt(question_1).then(function(answer){
	//basic card choice function
	if(answer.choice == "1"){
		
		inquirer.prompt(question_2).then(function(answer){
			//calling basic constructor
			var basicCardObj = BasicCard(answer.front, answer.back);
			console.log("Front: "+basicCardObj.front+"\nBack: "+ basicCardObj.back);
		});
	}
	//close card choice function
	else if(answer.choice == "2"){
		
		inquirer.prompt(question_3).then(function(answer){
			//does the text contain the cloze answer from question 3 variable?
			if(answer.fullText.includes(answer.cloze)){
				//if so, calling cloze constructor from clozecard.js
				var clozeCardObj = ClozeCard(answer.fullText, answer.cloze);
				console.log("Full Text   : "+ clozeCardObj.fullText +
						  "\nPartial Text: "+ clozeCardObj.partial +
						  "\nCloze       : "+ clozeCardObj.cloze);
			}
			else {
				console.log("'"+ answer.cloze +"' is not the right answer!'"+
					answer.fullText+"'");
			}
		});
	}
});