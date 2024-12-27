// All primitive types use stack memory
// All Non primitive use HEAP memory

let myName = "Abhishek" 
let myGfName = myName 

myGfName = "Gargi"

console.log(myName)
console.log(myGfName)


// Non - primitive

let userOne = {
    name:"Abhishek Anand",
    number:123456789
}

let userTwo = userOne ;

console.log("userOne : ") 
console.log(userOne)
console.log("userTwo : ")
console.log(userTwo)

userTwo.number = 100 

console.log("Modified userTwo : ")
console.log(userTwo)
console.log("Checking userOne : ") 
console.log(userOne)