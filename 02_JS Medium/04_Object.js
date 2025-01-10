// // Singleton objects 

// const user = new Object();

// user.id = 123456
// user.name ='Abby'
// user.isLoggedIn = false 

// //console.log(user);

const regularUser = {
    email:'abc@gmail.com',
    fullname: {
        first_name:'Abhishek',
        last_name:'Anand'
    }
}

// console.log(regularUser.fullname);

const obj1 = {1:1 , 2:2}
const obj2 = {3:3 , 4:4}

//const obj3 = Object.assign({} , obj1 , obj2) // Assigned in a new object {} this one 

const obj3 = {...obj1 , ...obj2}

//console.log(obj3);

console.log(Object.keys(regularUser));
console.log(Object.values(regularUser));

console.log(Object.entries(regularUser));

console.log(regularUser.hasOwnProperty('email'));

// Objects destructuring

const {fullname : name} = regularUser

console.log(name);
