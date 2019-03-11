///////////////////////////////////////
// Lecture: Hoisting


calculateAge(1965); // it works in funciton declaration 

function calculateAge(year){ //function declaration
    console.log(2016 - year);
}
calculateAge(1990);

// retirement(1994); this not works in functin expression
var retirement = function(year){ // function expression
    console.log(65 - (2016 - year));
}
retirement(1990);


// variable

console.log(age); // undfined
var age =23; // global execution context object

function foo(){
    var age = 65; // execution context object
    console.log(age);
}
foo();
console.log(age);



///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); //lexical scoping
    }
    
   // console.log(c); does not work because var c is not in global scoping
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!'; //global scope / global execution context 
//in global context scope we can only access var a
first();

function first() { //here we can only acces a,b
    var b = 'Hi!';
    second();

    function second() { //here we can only acces a,b,c
        var c = 'Hey!';
        third()
    }
}

function third() { //here we can only access /a,d
    var d = 'John';
   // console.log(a + b + c + d);
    console.log(a+d);
}





///////////////////////////////////////
// Lecture: The this keyword









