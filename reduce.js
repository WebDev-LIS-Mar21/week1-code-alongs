//Reduces - it reduces the array into one single value
const numbers = [1, 2, 3, 4, 5];
                                //prev          //curr
const sum = numbers.reduce((accumulator, currentValue) => {
    
    console.log(`accumulator: ${accumulator}, currentValue ${currentValue}`);
    return accumulator + currentValue;
});

const product = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

console.log(sum);
console.log(product);

const words = ["this", "is", "a", "sentence"];
//Use reduce to transform the array into a single string
const sentence = words.reduce((prev, curr) => {
    return `${prev} ${curr}`;
});

console.log(sentence);




