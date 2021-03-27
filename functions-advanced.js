//Function declaration
printMyName('miguel');

function printMyName(name) {
    console.log(name);
}


//Function expression
const printMyName2 = function(name) {
    console.log(name);
}

printMyName2('miguel');


//Hoisting -> It consists on JavaScript moving function declaration to the
//top of the execution context


//Callbacks / High order functions
function eatDinner(param) {
    console.log('Eating dinner');
    console.log(param);
    param();
}

function eatDessert() {
    console.log('Eating dessert');
}

function eatLunch() {
    console.log('Eating lunch');
}

eatDinner(function() { //Anonymous functions
    console.log('Eating lunch')
});

eatDinner(eatLunch);
//eatDessert();

//Anonymous function
setTimeout(function() { //this function param is an anonymous function
    console.log('Hello after some time');
}, 3000); //waiting 3 seconds to execute the function parameter

console.log('Hello now');

const names = ['Stefano', 'Luis', 'Patricia', 'Joao'];

//Iterate throughout an array using foreach
names.forEach(function(name) { //Anonymous function
    console.log(name);
});

//Arrow functions - ES6 version => from 2015 onwards
names.forEach((name) => { //Declarative programming
    console.log(name)
});

for(let i = 0; i<names.length; i++) { //Imperative programming
    console.log(names[i]);
}

const greeting = (name) => {
    console.log(`Hello ${name}`);
}

const sum = (param1, param2) => param1 + param2;

const result = sum(1, 2);
console.log(result);
greeting('World');