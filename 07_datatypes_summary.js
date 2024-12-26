// # Primitives data types 

/* ->   Number ,
        String ,
        null ,
        underfined ,
        Symbol(to make some thimg unique) ,
        boolean , 
        BigInt
*/

const id = Symbol(123);
const anotherId = Symbol(123);

console.log(id === anotherId);


//JS is dynamically typed means no need to define data type

// # Non-Primitive (Reference)

/* ->   Objects , 
        Functions ,
        Arrays
*/

const array = ["1234" , 1234]; // array

console.log(array);


let myObject = {
    name : "Abhishek",
    age: 22
} // Store object in key value pair in it data type can be anything like array or function or primitive dataTypes 

// Function can be treated as variable too and their are many ways to decalre 

let suprise = null ; //type of object

console.log(typeof(suprise));

let first = 6 ;
let second = 84 ;

let myFunction = function(){
    console.log("Hello Abhishek");
}

console.log(typeof(myFunction)); // returns function but more precise is called object function
console.log(myFunction);

console.log(myObject);
