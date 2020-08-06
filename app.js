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

// console.log(companyDetails.getDetails());


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


//an array is a collection of homogenous(same) data. -> is strictly typed languages.
////an array is a collection of hetrogenous(different) data. -> is loosely typed languages.
// Array
var num = ["rohan","mohan","rphan2","raghab","sohan",2,3,4,5,6,]; //right or wrong?


//final example

// var array = [[1,2,3,['a','b','c']],"string",1,"$","^",'*',null, undefined, true, false,function(){console.log("hi")},student,{name:"divyajeet",age:23}];


// console.log(array[0][3][2])
var marks = [23,34,54,6,7,8,9,76,76,4,53,4,3,4,2,32,5,2];

// console.log(marks[6]);


//LOOPS

// for loops
// while -> homework
// do..while -> homework

// this is the body for "for loop"
// for(initialisation;comparision;increament/decreament){
//     //code
// }


//basic for loops.
// for(i=2; i<=10; i+=2){
//     //code
//     console.log(marks[i]);
// }


//range based for loops.
// for..of loop -> variable before ...of will be used as whole element.
// console.log("now i am printing range based loops.")
// for( x of marks){
//     console.log(x)
// }

//for..in loop -> variable before ...in will be used as an index.
// for(y in marks){
//     console.log(y)
// }

// index -> is just a number at which data is present. 0,1,2,...,n.
// element -> is the data present at index. -> array[0], array[1]....array[Nth].

var sayname =  function(){
    console.log("Hello Divyajeet")
}
var numbers = [5,4,3,2,1];

var len = numbers.length-1;
// for( i in numbers){
//     var temp = numbers[i];
//     numbers[i]=numbers[len];
//     numbers[len]=temp;
//     console.log(numbers);
//     len--;
// }


//This is the code for sorting.
// var halfArray = (numbers.length-1)/2;
// for(i=0; i<halfArray; i++){
//     var temp = numbers[i];
//     numbers[i]=numbers[len];
//     numbers[len]=temp;
//     console.log(numbers);
//     len--;
// }
//Homework

// 1) write your own code for sorting.
    // [4,6,7,8,3,4,6,2,1]; -> [1,2,3,4,4,6,6,7,8]
// 2) Write code to insert something at any location into the array
    // var numbers = [1,2,3,4] -> 4th location add 5. numbers[4]=5;, add 5 at 2nd location [1,2,5,3,4] 
// 3) Write code to delete something at any location into the array


//Algorithm
// 1) write pseudo code
// 2) write code

//how to sort -> minus elements from length.
var array = [4,6,7,8,3,4,6,2,1];
// [1,6,7,8,3,4,6,2,4] -> 1st iteration.
// [1,2,7,8,3,4,6,6,4] -> 2nd iteration.
// [1,2,3,8,7,4,6,6,4] -> 3rd iteration.
// [1,2,3,4,7,8,6,6,4] -> 4th iteration.
// [1,2,3,4,4,8,6,6,7]
// [1,2,3,4,4,6,8,6,7]
// [1,2,3,4,4,6,6,8,7]
// [1,2,3,4,4,6,6,7,8] -> finally sorted.
// function sortIt(unSortedArray){
//     for(var i =0; i<unSortedArray.length; i++){
//         var num = unSortedArray[i]; //-> 4
//         var minimum = null;
//         for(var j=i+1; j<unSortedArray.length;j++){

//         }
//     }



// }

// sortIt(array);


// if(condition){
//     //code
// }
// else if(anotherCondition){
//     //code
// }
// else if(thirdCondition){

// }
// else{
//     //code
// }

//In JS except 0,null, undefined, and empty string everything is true. -> slightly wrong.

if("hi buddy"){
    console.log("yes divided!!")
}
else{
    console.log("Not Divided");
}