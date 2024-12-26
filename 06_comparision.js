
let a = "Abhishek" ;
let b = "Anand";
let c = 'Abhishek' ;

console.log(a == b);
console.log(a==c);

/*********  COMPARISION OF DIFFERENT DATA TYPES **********/

console.log("2" < 1); //JS automatically converting string to number 

console.log(null < 0); //false 
console.log(null == 0);//false 
console.log(null > 0);//false 
console.log(null >= 0); // true 
console.log(null <= 0);//true

/* 
The reason behind this is that equality == and comparisons > < <= >= works differently 
Comparision converts null to a number treating it as 0
Thats why null >= 0 is true and null > 0 is false 

*/

// Well UNDEFINED always gives false 

/* strict check (===) it checks for data types too */

console.log("2" === 2);
console.log(true == 1);
console.log(false === 0);
