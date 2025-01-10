// singleton
//Object.create


// Now we are using OBJECT LITERALS

const mySym = Symbol("key")

const jsUser = {
    name: 'Abhishek',
    age: 21,
    mySym:"My key as string",
    [mySym]:"My key as symbol",
    location: 'Bhopal',
    email: 'Workspace.abhishek.08@gmail.com',
    isLoggedIn: false ,
    lastLoginDays: ["Today" , "Yesterday" , "Tomorrow"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]); //use this if key is also explicitly defined in string quotes

// console.log(jsUser[mySym]); // key is a symbol not the string one

jsUser.email = 'Workspace.abhishek.08@GoldmanSach.com'
//Object.freeze(jsUser)
// jsUser.email = 'Workspace.abhishek.08@kaddu.com'
// console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello ${this.name}`);
}

console.log(jsUser.greeting());

// use . to access untill we need to use []
