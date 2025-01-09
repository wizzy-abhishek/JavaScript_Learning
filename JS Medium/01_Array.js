// // Array are heterogenous in js 
// // we dont use braces here we use square bracket

// const array = ["I" , 1 , 2 ,3, true];
// console.log(array[0]);
// // Array methods 

// array.push('Hello')
// array.push("Hiii")

// array.pop()

// //array.unshift(1000000); // Adds element to the 0th index and shifts every element ahead
// array.shift() // removes 0th index element 

// console.log(array);

// console.log(array.includes('Hiii'));
// console.log(array.indexOf('Hiii')); 

// let arrayToString = array.join()

// console.log(arrayToString);

// Slice & Splice

const myNewArray = [0,1,2,3,4,5,6,7,8,9]

console.log("A " , myNewArray);

const sliceOfMyNewArray = myNewArray.slice(1 , 5) // Give the element from 1 to 4 index

console.log(sliceOfMyNewArray);
console.log("B" , myNewArray);

const spliceOfMyNewArray = myNewArray.splice(1 ,5) //Removes the whole 1 to 5 element from myNewArray 
console.log(spliceOfMyNewArray);
console.log("C " , myNewArray);


