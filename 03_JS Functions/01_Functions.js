
function sayMyName(){
    console.log("A");
    console.log("B");
    console.log('H');
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log('K');
    
}

// sayMyName();

// function addTwoNumber(num1 , num2){
//     return num1 + num2
// }

// const result = addTwoNumber(6 , 84)

// console.log(result);

function loginMessage(username){
    // if(username === undefined){
    //     return "Please give any value"
    // }
    if(!username){
        return "Please give any value"
    }
    const date = new Date()
    return `${username} logged in at ${date.toLocaleString()}`
}

// console.log(loginMessage());

function calculateCartItemPrice(...amt){
    return amt 
}

// console.log(calculateCartItemPrice(200 ,300.25 , 8100 , 81));

const item = {
    name: "I mac",
    price:1000
}

function handleObj(obj){
    return `${obj.name} is pf price ${obj.price}`
}

//console.log(handleObj(item));

