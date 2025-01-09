// const score = 400 ;
// console.log(score);

// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toFixed(3)); //upto 3 decimal values

// console.log(balance.toFixed(3).toString().length);

// const otherNumber = 1234.9234 ;
// console.log(otherNumber.toPrecision(4)); //Rounds of to the value passed as parameter rest is exponential 

// const hunderds = 10546514409870 ;
// console.log(hunderds.toLocaleString("en-IN")); // By deafault it gives the value in US digit system so by passing en-IN we made it in Indian system

// const maxNumber = Number.MAX_VALUE ;
// const maxNumberThatCanBeSaved = Number.MAX_SAFE_INTEGER ;

// console.log(maxNumberThatCanBeSaved);

// const experiment = 9007199254740992345564 ; // We have to convert this into big int
// console.log(experiment);

/**************** * MATHS * *******************/

// console.log(Math.PI);
// console.log(Math.abs(-6)); // Negative to positive
// console.log(Math.round(123786.23)); //Rounds of decimal
// console.log(Math.ceil(51.1)); // Also for decimal 

const random = Math.random() ; // Always gives value between 0 - 1 so multiply with 10 or what you want 
console.log(random);

const min = 10 
const max = 20 

const betweenValue = ((random * (max - min + 1)) + min )
console.log(Math.floor(betweenValue));
