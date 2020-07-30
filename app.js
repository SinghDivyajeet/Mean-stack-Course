//1) declare, 2) defining 

// prompt("enter data") -> to take input
// alert("show data") -> to show data on webpage.
//to join to string -> string concetanation

// operands and operators-> -,+,*,/,**, ++, -- , %
//1) post-increament/decreament.
//2) pre-increament/decreament.

var a = 2;
var b = 5;


// console.log(typeof b)

//number
//string
//object
//null 
//undefined
//boolean -> true, false

//Function naming rules:
// 1)function keyword
// 2) function name
// 3) double round brakets
// 4) cruly braces / paranthesis.
// 5) the code to run will come between braces.

//How to use functions:
// 1) make a function.
// 2) call the function.


//Types of functions:
// 1)non-returning, no-parameter 
// 2)returning, no-parameter
// 3)non-returning, parameter
// 4)returning, parameter

// parameter -> is something which you give to the function.
// return ->  is what function returns you.
function subtraction(){
    //code
    // type-1
    var a = 6;
    var b = 2;
    var c = a-b;
    console.log(c)
}

function multiply(){
    //type-2
    var a = 2;
    var b = 4;
    var c = a*b;
    return c;
}

function addition(){
    // type-1
    var a = prompt("Enter 1st number:");
    var b =  prompt("Enter 2nd number:");
    var c = Number(a)+Number(b);
    alert(c);
}


function sayFullName(name){
    writeInEmail("Hi "+name);
}

sayFullName(name5);
