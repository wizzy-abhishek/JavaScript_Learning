let score = "33";

//Always the type of variable first 

console.log(typeof score); // direct method
console.log(typeof(score)); //score method 

let scoreInNumberForm = Number(score);

/*
If the value will be 33A it shows that its a number in typeof , 
but the value comes NaN (Not A Number)

if score = null it will convert it into zero 
if it is undefined it will then convert it into NaN
*/

console.log(typeof(scoreInNumberForm));
console.log(scoreInNumberForm);

let isLoggedIn = 1 ; 

let convertedValue = Boolean(isLoggedIn);
console.log(convertedValue);

// if "" => converted to flase
// if " is not empty" => true


