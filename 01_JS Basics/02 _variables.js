const number = 123456 
/*
Once const is assigened it cant be changed it will give
:: Assignment to constant variable at Object.<anonymous>
*/
console.log("const number => " + number);

let email = "Abhishek.com" 
/* 
 We have to use let cause it has the scope defination foor block or funcational scope
  where as the var has no idea of scope defination.
*/
var name = "Abhishek"
city = "Bhopal" 
// If we want we can change these values 
console.table([email , name , city])
