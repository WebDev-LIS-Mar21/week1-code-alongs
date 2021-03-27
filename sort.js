//Sort - sorts arrays
const names = ["Dalia", "Sandra", "Joao", "Artur", "Joao", "Luis", "Rui"];
names.sort(); //Mutates the array
console.log(names);
names.sort().reverse();
console.log(names);

const numbers = [5, 7, 2, 9, 10];
numbers.sort((a, b) => {
    return a - b //if the result is negative the numbers are kept in the position
                // if the result is positive the numbers switch positions
});
console.log(numbers);

names.sort((a, b) => {
    return a.length - b.length
});
console.log(names);


let aux = [];
names.forEach((name) => {
    if (aux.indexOf(name) === -1) { //The name is not on aux
        aux.push(name);
    }
})

console.log(aux);