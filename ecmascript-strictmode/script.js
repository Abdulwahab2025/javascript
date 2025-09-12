// ===== 1. let and const =====
let count = 10;
const name = "Alice";
count = 20;
// name = "Bob"; // ❌ Error: Assignment to constant variable

// ===== 2. Arrow Functions =====
const add = (a, b) => a + b;
console.log("Add:", add(2, 3)); // 5

// ===== 3. Template Literals =====
const greeting = `Hello, ${name}!`;
console.log("Greeting:", greeting); // Hello, Alice!

// ===== 4. Destructuring =====
const [x, y] = [1, 2];
console.log("Destructured Array:", x, y); // 1 2

const user = { name: "Bob", age: 30 };
const { name: userName, age } = user;
console.log("Destructured Object:", userName, age); // Bob 30

// ===== 5. Default Parameters =====
function greet(person = "Guest") {
  console.log(`Hi, ${person}`);
}
greet(); // Hi, Guest

// ===== 6. Rest and Spread Operators =====
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Sum:", sum(1, 2, 3)); // 6

const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log("Spread Array:", arr2); // [1, 2, 3, 4]

// ===== 7. Enhanced Object Literals =====
const ageVal = 25;
const person = {
  name,
  age: ageVal,
  greet() {
    console.log("Hi from enhanced object!");
  },
};
person.greet();

// ===== 8. Promises =====
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded"), 1000);
  });

fetchData().then((data) => console.log("Promise:", data));

// ===== 9. Classes =====
class Person {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`Hi, I'm ${this.name}`);
  }
}
const p = new Person("Eve");
p.speak(); // Hi, I'm Eve

// ===== 10. Modules (for use in separate files) =====
// --- math.js ---
// export const multiply = (a, b) => a * b;

// --- main.js ---
// import { multiply } from './math.js';
// console.log("Multiply:", multiply(2, 3));

// You can simulate module use in an actual project by separating the above comments into files.
