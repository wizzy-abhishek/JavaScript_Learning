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

/******************************** OPERATIONS ********************************/

let value = 3 ;
let negValue = -value;

console.log(value);
console.log(negValue);

let a = "Abhishek";
let b = " Anand";

console.log(a+b);

console.log("1"+2); // It will concatinate the value as in JAVA too
console.log(1+2+"4"); //It will give 34 // Toprimitive takes input and then optional type

console.log(3 + 4 *5/6); // DONT do this type of stuff, use parenthisis for operations 

console.log(+true); // It gives 1 
console.log(+"") //It gives 0 

