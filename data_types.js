//Data types
//Primitive data types / Non-primitive data types

//Primitive types//
//String -> text
//Number
//Boolean (true, false)
//Null
//Undefined

let myName = "Miguel"; //<= String because it's wrapped inside quotes
let age = 39; //<= Number (integer, decimal)
let year = "2021"; //<= String

let isVegetarian = false; //<= Boolean
let isFlexitarian = "true"; //<= String

//1. Declare a variable named operator one, assing any value
const operatorOne = 1;
//2. Declare a variable named operator two, assign any value
const operatorTwo = 2;
//3. Declare a variable called result, and assign to it the sum
//of operator one plus operator two (+)
const result = operatorOne + operatorTwo;
//4. Console.log the result variable
console.log(result);

console.log(1 + 4);
console.log(5 * 4);
console.log(4 / 2);
console.log(4 - 3);

console.log(4%2); // <= remainder of the division if the result is 0 
//then 4 it's an even number
console.log(5%2); // <= remainder of the division

//String interpolation
const greeting = "Hello";
const firstName = "Miguel";

//Concats strings //Before ES6
const fullGreeting = greeting + " " + firstName;
console.log(fullGreeting);

//Concat string ES6
const anotherFullGreeting = `${greeting} ${firstName}`;
console.log(anotherFullGreeting);

console.log(greeting.length);

//Use string interpolation to console.log "The length is (length of firstName)"
console.log(`The length is: ${firstName.length}`);

//Get string character by index
console.log(firstName[0]);
// M i g u e l //length is 6
// 0 1 2 3 4 5
console.log(firstName[2]);
console.log(firstName.charAt(2));

console.log(firstName.indexOf('g'));

const message = 'Don\'t be sad, be happy!'; //<= Escaping characters
console.log(message);

const subMessage = message.substr(0, 3);
console.log(subMessage);

console.log(firstName.includes('Mix'));

//Undefined
let myNewVariable;
console.log(myNewVariable);
myNewVariable = "Something";
console.log(myNewVariable);

//Null
let someNewVariable = "miguel";
someNewVariable = null;