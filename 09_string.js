let firstName = "Abhishek"
let lastName = "Anand"

console.log(firstName + " " + lastName) //This is very not good way to write

// So use back ticks it give string interpoletion and it use place holder

console.log(`Hello my name is ${firstName} ${lastName}`)

// Another way to declare string 

/*
const myName = new String("Abhishek");

console.log(myName === firstName);

console.log(myName.__proto__);
console.log(myName.length)
console.log(myName.toUpperCase());
console.log(myName[0]);
console.log(myName.charAt(3))

*/

const myGf = new String("..GARGI..");

console.log(myGf.indexOf("G"));

// const newName = myGf.substring(2,7);

// console.log(newName);

const useOfSlice = myGf.slice(-4 , 1);
console.log(useOfSlice);


const url = "https://abhishek.com/abhishek%20anand";

const modifiedUrl = url.replace("%20" ,"-");

console.log(modifiedUrl);

const newFeature = "abhishek-anand-84";

const array = newFeature.split("-");

console.log(array);


