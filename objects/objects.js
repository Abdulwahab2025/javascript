// let student1 = {  
//  firstName : "Farhiya",
//  lastName : "Abdi",
// age : 25,
// }

// let student2 = {
// firstName : "Ahmed",
//  lastName : "Ali",
//  age : 30,
// }

// console.log(`The age of Farhiya is  ${student1.age}`)


// let person = new Object()
// person.firstName = "Farhiya"
// person.age = 25

// person.talk = function () {
//     console.log("This person is talking")
// }


// person.talk()




// let person = {}
// console.log(person)
// person["firstName"] = "Ahmed"
// // person.firstName = "Ahmed"
// console.log(person ["firstName"])

let person = {
    firstName : "Ahmed",
    lastName : "Maryan",
     age : 25,
     isMarried : false,
}
 for (let prop in person) {
    console.log(person[prop])
 }