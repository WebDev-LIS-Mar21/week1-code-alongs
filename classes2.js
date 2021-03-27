class Animal {
    constructor(energy, age) {
        this.energy = energy;
        this.age = age;
    }

    eat() {
        this.energy += 1;
    }

    sleep() {
        this.energy += 5;
    }
}

const myAnimal = new Animal(10, 10);
myAnimal.eat();
myAnimal.sleep();
console.log(myAnimal.energy);

//Inheritance
class Dog extends Animal {
    constructor(energy, age, breed) {
        super(energy, age); //=> calling the parent constructor
        this.breed = breed;

    }

    bark() {
        this.energy -= 1;
    }
}

const myDog = new Dog(10, 10, 'German shepard');
myDog.sleep(); //=> come from the parent class Animal
myDog.eat(); //=> come from the parent class Animal
myDog.bark();

//1. Create a class Vehicle
//2. That has color and weight
//3. Has the move function (console.log the vehicle is moving)
class Vehicle {
    constructor(color, weight) {
        this.color = color;
        this.weight = weight;
        this.speed = 0;
    }

    move() {
        this.speed += 10;
        console.log('vehicle is moving')
    }

    changeColor(newColor) {
        this.color = newColor;
    }
}
//1. Create a class car that inherits from Vehicle
//2. Thas has color, weight and numberOfDoors
class Car extends Vehicle {
    constructor(color, weight, numberOfDoors) {
        super(color, weight);
        this.numberOfDoors = numberOfDoors;
    }

    playRadio() {

    }
}

const myCar = new Car('red', '100', '2');
myCar.move();
myCar.playRadio();
myCar.changeColor('blue')
const myCar2 = new Car('blue', '100', '2');


//1. Create a class plane that inherits from Vehicle
//2. Thas has color, weight
//3. Has the fly function
//Java .NET
class Plane extends Vehicle {
    constructor(color, weight) {
        super(color, weight);
    }

    fly() {
        console.log('is flying');
    }
}