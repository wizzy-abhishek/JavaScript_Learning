let score = "33";

//Always the type of variable first 

console.log(typeof score); // direct method
console.log(typeof(score)); //score method 

let scoreInNumberForm = Number(score);

/*
If the value will be 33A it will be converted , 
but the value comes NaN (Not A Number)
*/

console.log(typeof(scoreInNumberForm));
console.log(scoreInNumberForm);