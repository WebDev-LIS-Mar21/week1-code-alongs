//A class it's a generic representation of an object
//Create instances of this class, that represent specific objects
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(amountOfDamage) {
        this.health = this.health - amountOfDamage;
    }
}

//Creates a new instance of Soldier
const soldier1 = new Soldier(10, 10);
const soldier2 = new Soldier(5, 15);
const soldier3 = new Soldier(50, 80);

const attackStrength = soldier1.attack()
soldier2.receiveDamage(attackStrength);
console.log(soldier2.health);
