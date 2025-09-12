try {

var firstName 
console.log(firstName.toUpperCase())
console.log("I'am after the uppercase")
}

catch(error){
    console.log("sorry, something went wrong.", error.stack)
}

finnally {
    console.log("this is the final block")
}