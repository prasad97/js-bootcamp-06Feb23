console.log("Conditional Statements");


/*
1. If
2. If Else
3. If Else If
4. Ternary


if(condition){
    code to evaluate
}

Switch Statement

*/

let age = 17;

if(age>=18){
    console.log("You are an adult");
}
else{
    console.log("you are not an adult");
}


// Ternary operator
// Syntax
// condition ? value if true : value if false

console.log(age >= 18 ? "You are an adult" : "you are not an adult")


let marks = 120;

if(marks>100){
    console.log("Enter correct marks");
}
else if(marks>=75 && marks<=100){
    console.log("Grade is O");
}
else if(marks >= 65 && marks<=75){
    console.log("Grade is A");
}
else if(marks >= 45 && marks<=65){
    console.log("Grade is B");
}
else if(marks >= 35 && marks<=45){
    console.log("Grade is C");
}
else{
    console.log("Grade is FAILED");
}


//Switch Statements

/*
switch(arg){
    case 1:
        code here;
        break;
    case 2:
        code here;
        break;

}
*/

// 0 - Normal, 1 - Silver, 2 - Gold

let userStatus = 3;

switch(userStatus) {
    case 0:
        console.log("You are a normal user");
        break;
    case 1:
        console.log("You are a Silver user");
        break;
    case 2:
        console.log("You are a Gold user");
        break;
    default:
        console.log("User Status not valid");
}
