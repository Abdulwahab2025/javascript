let age = 7;

switch (true) {

 case (age >= 18):
    console.log("you are an adult");
    break;

  case (age <= 3):
    console.log("you are a toddler");
    break;

 case (age >= 13 && age <= 17): 
    console.log("you are a teenager");
   break;
     default:
    console.log("you are not an adult");

}