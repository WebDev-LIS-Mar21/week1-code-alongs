//Non-primitive data type - Array
//Array is a data structure that groups a collection of elements

const names = []; //=> Declared a assigned an empty array to the variable names
const students = ["Dalia", "Dhiren", "Mario", "Patricia"]; //=> An array of strings
const numbers = [1, 3, 5, 7, 10, 6]; //=> An array of numbers
const mixArray = ["Sandra", "Joao", 12, 24, "Luis", true];
const twoDimensionArray = [[1, 2], [3, 4], [5, 6]]; //=> Arrays inside arrays

// console.log(students);
// students.push("Artur"); //=> it adds an element to end of the array
// console.log(students);
// students.unshift("Lucia"); //=> add an element to the begininig of the array
// console.log(students);
// students.pop(); //=> to remove an element from the end of the array
// console.log(students);
// students.shift();
// console.log(students);
// students.splice(1, 1);
// console.log(students);

const myString = "Hello my name is miguel";
console.log(myString);
const myStringArray = myString.split(' '); //=> converting the array into a string
console.log(myStringArray);
myStringArray.reverse() //=> change/mutate the myStringArray
console.log(myStringArray);
const reversedString = myStringArray.join(' '); //=> converting the string into an array
console.log(reversedString);

console.log(students[0]);
console.log(students[1]);

//Use a for loop to iterate throuhgout the elements of the array
//log each element
for(let i = 0; i<students.length; i++) {
    console.log(students[i]);
}

