//Objects -> Data structure, where each item is represented by a 
//key-value pair

let nameOfTheArray = []; //A new empty array
let nameOfTheObject = {};  //A new empty object

const olympicRecords = {
    //key            //value
    athletics100Men: 'Justin Gatlin',
    athleticsLongJump: 'Mike Powel',
    quidditch: 'Harry Potter'
}

console.log(`Athlete with the long jump record: ${olympicRecords.athleticsLongJump}`);
console.log(olympicRecords.athletics100Men);

olympicRecords.swimming200Men = 'Michael Phelps';
console.log(olympicRecords);
olympicRecords.athletics100Men = 'Usain Bolt';
console.log(olympicRecords);

//1. Add new key value pair with the record for "quidditch"
//2. Console log the quidditch athlete
console.log(olympicRecords.quidditch);
console.log(olympicRecords["quidditch"]);

//Checking if key exists in the object
console.log("athletics100Men" in olympicRecords); 

//Delete key-value pair from object
delete olympicRecords.athleticsLongJump;
console.log(olympicRecords);

//Get all keys existing on the object
console.log(Object.keys(olympicRecords));

for (let key in olympicRecords) {
    console.log(`${key} => ${olympicRecords[key]}`);
}

//Books
const book1 = {
    title: 'Harry Potter',
    author: 'J.K. Rolling'
}

const book2 = {
    title: 'Lord of the rings', 
    author: 'Tolkien'
}

//Users - Structured information about my user
const user1 = {
    name: 'miguel', //String
    age: 39, //Number
    hobbies: ['swimming', 'running'], //Array
    address: { //Object
        street: 'first street',
        city: 'lisbon'
    },
    books: [book1, book2]
}

//1. Console.log the name of user1
console.log(user1.name);
//2. Console.log the user1 street
console.log(user1.address.street);
//3. Console.log the user1 second hobbie
console.log(user1.hobbies[1]);
//4. Console.log the user1 second book author
console.log(user1.books[1].author);

const user2 = {
    name: 'lucia', //String
    age: 27, //Number
    hobbies: ['watching frozen', 'pokemon go'], //Array
    address: { //Object
        street: 'second street',
        city: 'lisbon'
    },
    books: [book2]
}

function getUserName(object) {
    return object.name
}

const username1 = getUserName(user1); //miguel
const username2 = getUserName(user2); //lucia

console.log(username1);

//4. Create a function (getUserCity) that recieves an object (user) 
//and returns the user's city
function getUserCity(object) {
    return object.address.city;
}

getUserCity(user2);