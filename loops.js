//Loops are necessary to do repetitive tasks

//log on my console numbers from 1 to 5
// DRY -> Don't repeat yourself
//While loop
let counter = 0;
while(counter < 5) {
    //Anything here, will run until the condition is false
    //Each run inside a loop, we call *iteration*
    //console.log(`I\'m inside the loop ${counter}`);

    //if the counter is 2 -> console.log "two"
    //otherwise console.log the counter
    if (counter === 2) {
        console.log('Two');
    } else {
        console.log(counter);
    }
  
    //I always need to increase the counter
    //counter = counter + 1;
    //counter += 1;
    counter++;
}

//For loop
//i is the counter
//increment the counter (i) by one, one each iteration
for(let i = 0; i<5; i++) {
    //if the i is 2 -> console.log "two"
    //otherwise console.log the i
    if (i === 2) {
        console.log('two')
    } else {
        console.log(i);
    }
}

const myName = 'miguel';
const letter = 2;
console.log(myName[letter]);

for(let i = 0; i<myName.length; i++) {
    //continue -> skip an iteration
    //break -> stops the loop
    if (i === 2) {
        break;
    }
    console.log(myName[i]);
}

//Log in console even or odd the numbers from 1 to 20
//Use a for loop %2 === 0
for (let i = 1; i<=20; i++) {
    if (i%2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

//Write my name backwards
//l
//e
//u
//g
//i
//m
for (let i = myName.length-1; i>=0; i--) {
    console.log(myName[i].toUpperCase());
}