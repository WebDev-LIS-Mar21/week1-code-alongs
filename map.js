let originalArray = [1, 2, 4];

function multiplyByTwo(param) {
    console.log(param*2);
}

originalArray.forEach((number) => {
    multiplyByTwo(number);  
});


//Map -> returns a new array based on a transformation
const newArray = originalArray.map((item) => {
    return item*2;
});
console.log(originalArray);
console.log(newArray);

const foods = ['pizza', 'soup', 'ice cream'];
// const food = 'pizza';
// console.log(food.toUpperCase());
const newFoods = foods.map((food) => {
    return food.toUpperCase();
});

console.log(foods);
console.log(newFoods);

const students = ['Luis', 'Dhiren', 'Artur'];
//1. Using map add Mr. at the begining of each array item
const mrStudents = students.map((student) => {
    return `Mr. ${student}`;
});
console.log(mrStudents);

const complexStudents = [{name: 'miguel', age: 39}, {name: 'lúcia', age: 27}];
//1. Using map return a new array with only the ages
const newComplexStudents = complexStudents.map(student => student.age);
console.log(newComplexStudents);
const numbers = [1, 2, 3, 4];
//1. Add 1 to each item using map
const newNumbers = numbers.map((number) => {
    return number + 1;
});
const newNumbers2 = numbers.map(number => number + 1);
console.log(newNumbers);





