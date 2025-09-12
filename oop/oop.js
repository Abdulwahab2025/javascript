// Base class Person
class Person {
  constructor(firstName, lastName, gender, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
  }

  changeName(newFirstName, newLastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Worker class extends Person
class Worker extends Person {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    nationalInsuranceNum,
    position,
    shift
  ) {
    super(firstName, lastName, gender, age);
    this.nationalInsuranceNum = nationalInsuranceNum;
    this.position = position;
    this.shift = shift;
  }

  work() {
    return `${this.getFullName()} is working the ${this.shift} shift as a ${
      this.position
    }.`;
  }
}

// Customer class extends Person
class Customer extends Person {
  constructor(
    firstName,
    lastName,
    gender,
    age,
    checkInDate,
    roomNumber,
    checkOutDate
  ) {
    super(firstName, lastName, gender, age);
    this.checkInDate = checkInDate;
    this.roomNumber = roomNumber;
    this.checkOutDate = checkOutDate;
  }

  stayDuration() {
    const oneDay = 24 * 60 * 60 * 1000;
    return Math.round((this.checkOutDate - this.checkInDate) / oneDay);
  }

  getBookingInfo() {
    return `${this.getFullName()} has booked room ${
      this.roomNumber
    } from ${this.checkInDate.toDateString()} to ${this.checkOutDate.toDateString()} (${this.stayDuration()} nights).`;
  }
}

// Example usage
const worker = new Worker(
  "John",
  "Doe",
  "Male",
  30,
  "AB123456C",
  "Receptionist",
  "Morning"
);
console.log(worker.work());

const customer = new Customer(
  "Jane",
  "Smith",
  "Female",
  25,
  new Date("2025-08-20"),
  101,
  new Date("2025-08-25")
);

console.log(customer.getBookingInfo());

// Change name
customer.changeName("Janet", "Doe");
console.log("Updated name:", customer.getFullName());
