//Conditionals are statements that decide which code to run
const weekDay = 'sunday'; // = assigns a value

if (weekDay === 'friday') { // === or == compare values
    //fall here if the condition is true
    console.log('I want to go to the cinema');
} else {
    //fall here if the condition is false
    console.log('I want to stay home');
}

const age = 20;

if (age >= 18) {
    console.log('You can drink beer and gin');
} else if (age >= 16) {
    console.log('You can drink beer');
} else {
    console.log('You cannot drink alcohol');
}


//1. Create a variable called language: portuguese, french
//2. Depending on the language value log the following
//3. language is portuguese -> Olá, Mundo
//4. language is french -> Bonjour
//5. language is something else -> Hello, world
const language = "swahili";

if (language === "french") {
    console.log('Bonjour');
} else if (language === "portuguese") {
    console.log('Olá, Mundo');
} else {
    console.log('Hello, world');
}

//1. Create two variables - numberOne and numberTwo
//2. Compare the two variables values
//3. If they are equal -> console log "the number are equal"
//4. If numberOne is greater than numberTwo -> "number one is greater than two"
//5. Otherwise -> "number two is greater than one"
const numberOne = 2;
const numberTwo = 2;

if (numberOne === numberTwo) {
    console.log('The numbers are equal');
} else if (numberOne > numberTwo) {
    console.log('numberOne is greater then numberTwo');
} else {
    console.log('numberTwo is greater then numberOne');
}

//Switch
const characterName = 'Khal Drogo';

switch(characterName) {
    case 'Jon Snow':
    case 'Sansa':
        console.log('House stark');
    break;
    case 'Khal Drogo':
        console.log('House Dothraki');
    break;
    case 'Miguel':
        console.log('House Braga');
    break;
    default: 
        console.log('I don\'t know that character');
}

if (characterName === 'Jon Snow' || characterName === 'Sansa') {

}

//Refactor the Hello world example using Switch
switch(language) {
    case 'french':   
        console.log('Bonjour');
    break;
    case 'portugues': 
        console.log('Olá, Mundo');
    break;
    default:
        console.log('Hello World');
}














