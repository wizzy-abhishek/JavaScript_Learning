function one(){
    const username = "Abhishek" ;

    function two(){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website); // Give error also js execute line by line
    
    two();
}

one();

// closure :: The child function can access to the parent function variables and their is more to it.

/* ****************** intresting ************************ */

addOne(5);

function addOne(num){
    return num++;
}

const addTwo =function(num){ // This is called expression and something called hoisting 
    return num + 2 ;
}

addTwo(5); // This cant be used before the declaration it gives RefrenceError : Cannt access 'addTwo' before initialization