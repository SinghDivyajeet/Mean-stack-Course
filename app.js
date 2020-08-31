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

// if("hi buddy"){
//     console.log("yes divided!!")
// }
// else{
//     console.log("Not Divided");
// }

//Homework 5th-August *

// 1) study if-else
// 2) find max and min in an array. 

// WAP for finding max in an array

// var array = [4,6,7,8,3,4,6,2,1,9];

function max(array){
    var maximum = array[0];

    for(var i = 1; i<array.length; i++){
        if(array[i] > maximum){
            maximum = array[i];
        }
    }
    return maximum;
}

// console.log( max(array))

// var array = [4,6,7,8,0,3,4,6,2,1,9];

function min(array){
    var minimum  = array[0];

    for(var i=1; i<array.length; i++){
        if(array[i] < minimum){
            minimum = array[i];
        }
    }
    return minimum;
}

// console.log(min(array));

//Homework 6-08-2020
// 1) print an array from backwards -> [1,2,3,4] -> [4,3,2,1]
// 2) duplicate an array but reversed. -> [1,2,3,4] -> return a new array [4,3,2,1]
// 3) arr = [1,2,3,0,4,0,5,0,6,0,2,0] -> move all the 0's in the back
    // -> return [1,2,3,4,5,6,2,0,0,0,0,0]

// function hero(number){
//     return number;
// }
// var returned = hero(6);
// console.log(returned)

// for(initialisation; comparision; increament/decreament){
    
    
//     //code
 

// }



// break;

// continue -> it won't let any of the statement after it, get executed.
// and it will directly send execution flow to the inc/dec part;

// and-> && ,or-> ||

//Strings

// the best movie i have seen is "The Matrix".
// var bestMovie = "the best movie i have seen is \"The Matrix\"";
// var name = "ab\c\*d";
// console.log(name.length)
// console.log(bestMovie)

// var array = [4,6,7,8,3,4,6,2,1,9];

// function addOne(arr){

//     for(var i=0; i<arr.length; i++){
//         arr[i] = arr[i]+1;
//     }
    
// }

// console.log(array)
// addOne(array)
// console.log(array)


// var string = "'Paras' is a good guy";

//WAP to extract names from the string (HINT-> names are in single quotes).

// var firstSingleQoute = string.indexOf("'");
// var lastSingleQuote = string.lastIndexOf("'");
// var name = string.slice(firstSingleQoute+1,lastSingleQuote);
// console.log(name)

var fruits = ['Banana','grape','mango','peach'];
var numbers = [1,2,3,4,5,6,7]

// toString() -> to join all array elements into a comma seperated string.
var allFruits = fruits.toString();
// console.log(allFruits+'-> toString')

// ------------------------------------------------------------------------------------

//join() -> to join all array elements into a "dynamic seprated" fashion.

var allFruitsWithColon = fruits.join("?");
// console.log(allFruitsWithColon+'-> Join')

// ------------------------------------------------------------------------------------

//pop() -> to delete the last element of the arrray.
// var lastFruit = fruits.pop();
// console.log(fruits);

// ------------------------------------------------------------------------------------

//push() -> it will push the new element at the last of the array.
// var i = 2;
// fruits.push(fruits[i]);
// console.log(fruits);

//Opposites:
// pop() (will function at last) <-> shift() (will function at beginning)
// push() (will function at last) <-> unshift() (will function at beginning)

// ------------------------------------------------------------------------------------


// var fruits = ['Banana','grape','mango','peach'];

// shift() (will function same as pop() but at beginning) 
fruits.shift();
// console.log(fruits);

// ------------------------------------------------------------------------------------

// unshift() (will function same as push() but at beginning) 

fruits.unshift("strawberry");
// console.log(fruits)

fruits[3]="avacado";
// console.log(fruits)

delete fruits[2];
// console.log(fruits)
fruits[2]="Dragon Fruit";
// console.log(fruits)

// ["strawberry", "grape", "Dragon Fruit", "avacado"]

// fruits.splice(2,2,"mango","kiwi");

// console.log(fruits.slice(1,3));

var string = "a quick brown fox was here";
var stringToSearch = "FoX";

function search(string, stringToSearch){
    stringToSearch = stringToSearch.toLowerCase();
    string = string.toLowerCase();

    var array = string.split(" ");
    for(var i of array){
        if(i=== stringToSearch){
            return "Matched";
        }
    }
    return "Not Matched";
}
// console.log(search(string,stringToSearch));

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
var a = 3/2;

// console.log(Math.round(1.5));
var min = Math.min(2,3,4,5,6,7,1);
// console.log(min)

function add(a,b){
    if(Number.isInteger(a) && Number.isInteger(b)){
        return a+b;
    }
    else{
        console.log("One of the argument is not number");
    }
}
// console.log(add("string",3));

var string = "a quick brown fox";

function capatalize(string){
    var array = string.split(" ");
    // how to change the 0th position -> homework
    console.log(array[1].charAt(0).toUpperCase()+array[1].substr(1))
   

}

// capatalize(string)

var remo = "remove_non_ascii('?????PHP-MySQL??????')";


// a[i] =  

function remove(a, b) {

    var len = a.length - 1;

    for (var i = 0; i < len; i++) {
        var value = a[i];
        if ( value === b) {

            // console.log(a.length);

            a = a.replace(b, "");
            i--;
        }

    }
    return a;
}

// console.log(remove(remo,"?"));

function changeColor(){
    var box = document.getElementById('box3');
    box.style.border="2px solid red";
}

function showMyName(){
    var field  = document.getElementsByTagName('input');
    var value = field[0].value;
    alert(value);
}

// event handlers === event listeners
// function tellMyName(event){
//     console.log("Box Clicked")
//     // console.log(event)
//     event.stopPropagation();
// }
// function tellYourName(event){
//     console.log("Container Clicked")
// }
// function bodyClicked(event){
//     console.log("Body clicked");
// }



// box1.addEventListener('click',tellMyName);
// container.addEventListener('click',tellYourName);
// document.body.addEventListener('click',bodyClicked);


// box1.addEventListener('click',function(event){
//     console.log('box is clicked');
//     event.stopPropagation();
// });

var box2 = document.getElementById('box2');
var container = document.getElementById('container'); 

var para = document.createElement("p");
var text = document.createTextNode("Hi I am dynamically created!");
para.appendChild(text);

document.body.firstElementChild.insertBefore(para,box2);

box2.remove();

//arrow function
// var add2 = (number)=>number+2;

// var num2 = add2(3);
// console.log(num2);


//TIMING EVENTS

// 1) setInterval(); -> runs repeatedly after a particular interval.
// 2) setTimeout(); runs once after a particular interval.

function print2(){
    console.log("Print 2");
}

// setTimeout( ()=>console.log("Print 2"), 2000);


//HOW TO MAKE A COUNTDOWN TIMER
// var min = 5;
// var sec = 0;
// var flag = true;

// var para = document.getElementsByClassName('time');
// // min =0;
// var stopID = setInterval(() => {
//     if(min>0 && sec==0){
//         min--;
//         sec=60;
//     }
//     else if(min==0 && flag){
//         //last 60 seconds
//         flag=false;
//         sec=60;
//     }
//     else if(min==0 && sec==0){
//         console.log("Counter Done")
//         alert("Your time is up");
//         clearInterval(stopID);
//     }
//     var time = `${min}:${sec--}`;
//     para[0].innerHTML = time;
//     console.log(time)
// }, 10);


// console.log("HI bud");
// setTimeout(() => {
//     console.log("Print 2")
// }, 2000);
// setTimeout(() => {
//     console.log("Print 3")
// }, 2000);
// console.log("Last part");


//Design a system where user downloads a file, then compress it, and finally
// uploads the file to the server.
//Homework -> we can all functions individually
// -> can skip functions in between by passing callback
//-> can make them do work automatically.

// function download(url,callback){
//     console.log(`File is being downloaded from ${url}`);
//     var file = url.split("/").pop();
//     setTimeout(()=>{
//         console.log(`${file} Downloaded`);
//         if(typeof callback === 'function')
//             callback(file);
//     },2000)

// }

// function compress(file,callback){
//     if(file.split(".")[1]!=="zip"){
//         console.log(`${file} is compressing.`);
//         var archive = file.split(".")[0]+".zip";
//         setTimeout(()=>{
//             console.log(`${file} is compressed into ${archive}.`);
//             callback(archive,"S3");
//         },2000)
//     }
//     else{
//         upload(file,"S3");
//     }
    
    
// }

// function upload(archive,server){
//     console.log(`${archive} is uploading to ${server}.`);
//     setTimeout(()=>{
//         console.log(`${archive} is uploaded the ${server}.`)
//     },2000)

// }

//fashion-1
// download('www.somesite.com/imges/image.jpg',(file)=>{
//     compress(file,(archive, server)=>{
//         upload(archive,server)
//     });
// });

//fashion-2
// download('www.somesite.com/imges/image.jpg');
// compress(file);
// upload(archive,server);

// fashion-3
// can skip functions in between



//Learning Promises

function download(url){
    return new Promise((resolve,reject)=>{
        if(url.startsWith("https://")){
            console.log(`File is being downloaded from ${url}`);
            var file = url.split("/").pop();
            setTimeout(()=>{
                console.log(`${file} Downloaded`);
                resolve(file);
            },2000)
        }
        else{
            return reject(new Error("Url doesn't starts with https://"));
        }
    });
}

function compress(file){
    if(file.split(".")[1]!=="zip"){
        console.log(`${file} is compressing.`);
        var archive = file.split(".")[0]+".zip";
        setTimeout(()=>{
            console.log(`${file} is compressed into ${archive}.`);
            callback(archive,"S3");
        },2000)
    }
    else{
        upload(file,"S3");
    }
    
    
}

function upload(archive,server){
    console.log(`${archive} is uploading to ${server}.`);
    setTimeout(()=>{
        console.log(`${archive} is uploaded the ${server}.`)
    },2000)

}

//PROMISE SYNTAX
//  return new Promise((resolve, reject)=>{
//     // if sucessfull
//     resolve();


//     // if fails
//     return reject();
// });

// download("https://www.somesite.com/images/image.jpg").then((file)=>{
//     compress(file).then((archive)=>{
//         upload(archive);
//     },(err)=>{})
// },(err)=>{
//     console.log(err);
// })


//Better way to write code
download("www.somesite.com/images/image.jpg")
.then((file)=>{
    compress(file)
    .then((archive)=>{
        upload(archive)
        .then((msg)=>{
            //further code.
        })
    })
}).catch((err)=>{
    console.log(err);
})




// homework
// 1) why should we use node js?
// 2) why shouldn't we use node js?
// 3) merits and demerits of node js
// 4) what is routing frameworks? -> express.js, find others too.
// 5) what is server, diff. b/t application server and web server.