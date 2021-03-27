//This - in JavaScript
//Battle game, we will have soldiers that will battle each other
//each soldier will have energy and strength.

//Implicit binding
const soldier1 = {
    health: 10,
    strength: 5,
    attack: function() {
        return this.strength; //this represents soldier1
    },
    receiveDamage: function(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}


const strength = soldier1.attack(); //The this keyword represents the object
//left to the dot
console.log(strength);
soldier1.receiveDamage(4);
console.log(soldier1.health); //The this keyword represents the object
//left to the dot

//Explicit binding
function getHealth() {
    console.log(this.health);
}

//Binding the this (soldier1) to the getHealth function 
getHealth.call(soldier1);

const soldier2 = {
    health: 20,
    strength: 10,
    attack: function() {
        return this.strength; //this represents soldier2
    },
    receiveDamage: function(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}

const soldier3 = {
    health: 2,
    strength: 10,
    attack: function() {
        return this.strength; //this represents soldier3
    },
    receiveDamage: function(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}

//Soldier 3 attacking soldier 2
const attackStrength = soldier3.attack();
soldier2.receiveDamage(attackStrength);

console.log(soldier2.health);
if (soldier2.health < 0) {
    console.log('Soldier 2 is gone');
} else {
    console.log('Soldier 2 still stands');
}

//DRY - Don't repeat yourself


