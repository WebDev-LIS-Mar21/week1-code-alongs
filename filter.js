//Filter -> returns a new array, returns the items into a new array, based
//on a condition
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((number) => {
    return number%2===0;
});
console.log(evenNumbers);
console.log(numbers);

const names = ['Lucia', 'Miguel', 'Luis'];
//Using filter, return a new array where names start with L
"miguel".startsWith('m') // true
const namesStartingWithL = names.filter((name) => {
    return name.startsWith('L');
});

console.log(namesStartingWithL);

const complexStudents = [{name: 'miguel', age: 39}, {name: 'lúcia', age: 27}];
//Using filter return students older than 30
const olderThan30Name = complexStudents.filter((student) => {
    return student.age > 30;
}).map((student) => {
    return student.name;
});

console.log(olderThan30Name);