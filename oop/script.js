// let person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer',
//     }

// let person1 = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
// };

// let person2 = {
//   name: "Ali",
//   age: 24,
//   occupation: "engineer",
// };

// let person3 = {
//   name: "Osman",
//   age: 45,
//   occupation: "Doctor",
// };

// class Person {
//   constructor(name, age, occupation) {
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }
// }
// let person = new Person('John', 30, 'Developer');
// let person2 = new Person('Ali', 24, 'engineer');
// let person3 = new Person('Osman', 45, 'Doctor');

// console.log(person.name);
// console.log(person["name"])
// let {name} = person;
// console.log(name)

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
   
  }
  speaks() {
    console.log(`${this.name} says hello`);
  }

  run() {
    console.log("animal is running");
  }
}

let dog = new Animal("Buddy", 3, "Canine");
console.log(dog.speaks())
let cat = new Animal("Whiskers", 2, "Feline");
let bird = new Animal("Tweety", 4, "Avian");

