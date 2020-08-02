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
    console.log("Hi "+name);
}

// sayFullName("name5");


var mulBy2 = function (number,num2,...arguments){
    console.log(...arguments)
    return number*num2;
}

// console.log("10 Multiplies by 2 is "+mulBy2(1,2,3,4,5,6,7,8,9));

var student1 = {
    name : "Divyajeet",
    age: 23,
    marks : 100,
    section: "A",
    getInfo: function(){
        console.log(student1.name+" has "+ student1.marks +", is in Section "+student1.section);
    },
    getAge: function(num){
        return num*student1.age;
    }
}

// console.log(student1.getAge(1)); 

// JSON -> JavaScript Standard Object Notation.
// XML -> Xtensible Markup language


// console.log(student1["marks"],student1["name"],student1["age"]) //-> we can add data too.


// console.log(student1.marks,student1.name,student1.age,student1.sport) //-> we can only read the Data.


var companyDetails = {
    name:"MRF",
    emp: 1600,
    getDetails: function(){
        return `The name of company is ${companyDetails["name"]} and has ${companyDetails["emp"]} epms.`
    },
}

console.log(companyDetails.getDetails());


// How to manipulate Strings
// 1) String mutation
// "The name of company is "+companyDetials["name"]+" and has "+companyDetials["emp"]+" emps.";

// 2) String interpolation
// `static Part ${Dynamic part}`
// `The name of company is ${companyDetails["name"] and has ${companyDetails["emp"]} epms.}`



var bankAcc = {
    HolderName: "Divyajeet",
    AccNo:"456789",
    AccType: "Saving",
    Balance : "$45678",
}

var sport = {
    sportName: "table tennis",
    ranking: "A",
    nextTournament: "Paris"
}

var drivesCar = {
    carName: "Honda City",
}

var student = {
    name: "Divyajeet Singh",
    banking: {
        HolderName: "Divyajeet",
        AccNo:"456789",
        AccType: "Saving",
        Balance : "$45678",
        retailBanking:{
            credential:"67o",
            accType:"shared",
            sharedBtw: {
                name: "rohini",
                relation: "wife"
            }
        }
    },
    sport:{
        sportName: "table tennis",
        ranking: "A",
        nextTournament: "Paris"
    }
}


// console.log(student.drivesCar)

// Array
var num = ["rohan","mohan","rphan2","raghab","sohan",2,3,4,5,6,];
console.log(num[0])
