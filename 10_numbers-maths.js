const score = 400 ;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toFixed(3)); //upto 3 decimal values

console.log(balance.toFixed(3).toString().length);

const otherNumber = 1234.9234 ;
console.log(otherNumber.toPrecision(4)); //Rounds of to the value passed as parameter rest is exponential 

const hunderds = 10546514409870 ;
console.log(hunderds.toLocaleString("en-IN")); // By deafault it gives the value in US digit system so by passing en-IN we made it in Indian system

const maxNumber = Number.MAX_VALUE ;
const maxNumberThatCanBeSaved = Number.MAX_SAFE_INTEGER ;

console.log(maxNumberThatCanBeSaved);

const experiment = 9007199254740992345564 ; // We have to convert this into big int
console.log(experiment);
