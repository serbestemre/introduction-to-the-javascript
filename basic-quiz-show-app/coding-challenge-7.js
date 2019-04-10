var allQuestions =[];
var Question = function(query, chooices, answer){
    this.query = query;
    this.chooices=chooices;
    this.answer=answer;
}

function createQuestion(q) {
    allQuestions.push(q);
}

var q1 = new Question('Which is an even number?', [4,1,3,9],0);
var q2 = new Question('Which is an odd number?', [6,12,13,2],2);
var q3 = new Question('Which team is first established team in Turkey?', ['Fenerbahçe','Beşiktaş','Galatasaray','Trabzonspor'],1);
var q4 = new Question('Only the .... survive?', ['paranoid','engineer','doctor'],0);
var q5 = new Question('Which is bigger than -5 ?', [-6,-4],1);



var randomQuestion = Math.floor(Math.random()* allQuestions.length);
console.log(allQuestions[randomQuestion].query);
    
var choice = parseInt(prompt('Please select the correct answer.'));
console.log("user choice => " + choice);

    
    
console.log('Q number ==>> ' + randomQuestion);

createQuestion(q1);
createQuestion(q2);
createQuestion(q3);
createQuestion(q4);
createQuestion(q5);



for(var i =0; i<allQuestions[randomQuestion].chooices.length;i++){
    console.log(i+': ' + allQuestions[randomQuestion].chooices[i]);
}

    
if( allQuestions[randomQuestion].answer === choice){
    console.log("CORRECT ANSWER!!\nYour got 1 point");
}else{
    console.log("Wrong answer! :\( Sorry!")
}
