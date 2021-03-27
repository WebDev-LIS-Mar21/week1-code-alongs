//DRY - Don't repeat yourself
//Function are pieces of reusable code

// function <name>([parameters]) {
//     <instructions>

//     [return <expression>]
// }

//Function declaration
function greeting(time) {
    
    if (time === 'day') {
        console.log('Good morning!');
    } else if (time === 'night') {
        console.log('Good evening!');
    }
    
    console.log(`Date: ${new Date(Date.now())}`);
}

//Function invocation
//day time
greeting('day'); //Good morning

//night time
greeting('night'); //Good evening

//if the parameter time has the value day -> console.log('Good morning');
//else if the parameter time has the value night - console.log('Good evening');

//1. Declare a function named hello
//2. The function hello should receive a parameter called name
//3. When invoking the function, it should log "hello " + the name parameter value
//function declaration
//The purpose of the function hello is to console log somethiing
function hello(name, greetings) {
    console.log(`${greetings} ${name}`);
    greeting('day');
}

//function invocation
hello('miguel', 'hello');
hello('dalia', 'olá');
hello('mario', 'yo');

//The purpose of the sum function is to return a sum
function sum(paramOne, paramTwo) {
    //console.log(paramOne + paramTwo);
    //a lot stuf going on inside this function
    return paramOne + paramTwo;
    console.log('dqwkjdfkw');
    console.log('dqwkjdfkw');
    console.log('dqwkjdfkw');
}

//The result of sum will be assigned to the result variable
const result = sum(1, 2);
const divideByTwo = result/2;

console.log(divideByTwo);

//Create a function with three parameters, and return the multiplication of those parameters
function multiply(paramOne, paramTwo, paramThree) {
    return paramOne * paramTwo * paramThree;
}

const multiplicationResult = multiply(1, 2, 3);
console.log(multiplicationResult);

function sumOfThree(paramOne, paramTwo, paramThree) {
    return paramOne + paramTwo + paramThree;
}

function averageOfThree(sum) {
    return sum/3;
}

const sumResult = sumOfThree(1, 2, 3);
const average = averageOfThree(sumResult);

console.log(average);




