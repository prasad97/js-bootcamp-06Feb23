console.log("var let & const");


// var userName = "Prasad";
// console.log(userName);
// console.log(userName);


/*
var
1. Function Scope

let - introduced in 2015
1. Block scope

*/

let userName = "User";

loggedIn = true;

if(loggedIn == true){
// Block scope
   let userName = "Prasad";
   console.log(userName);
}

console.log(userName);

var a = 1;
var a = 2;

let b = 1;
 b = 2;


var sayHi = "Hey User";
function greet(){

    var sayHi = "Hello User";
    console.log(sayHi);

}

greet();
console.log(sayHi);


/*
const - Constant
*/

const carname = "honda";
console.log(carname);
// carname = "mercedes";


const userObject = {
    username : "Prasad",
    city : "Mumbai"
}

userObject.username = "Rocky";
console.log(userObject);
userObject = {
    username : "Prasad",
    city : "Mumbai"
}
