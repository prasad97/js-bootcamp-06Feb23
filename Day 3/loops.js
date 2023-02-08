console.log("Loops");


/*
1. For loop
2. While loop
3. Do While
*/

// For Loop
/*
syntax

for(intializer;condition;increment/decrement){
    code to repeat until condition is not satisfied
}

*/
// Print numbers 1 to 50 which are even
// break
// continue
// for(let i = 0;i<=50;i++){
//     // if(i%2==0){
//     //     console.log(i);
//     // }
//     if(i==20){
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// let fruits = ['apple','mango','orange','watermelon','pear','pineapple'];
// // console.log(fruits[0]);
// console.log(fruits.length);

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }


// While Loop
// while(some condition){
//     code to be executed
// }

let a = 0;
console.log("while loop");
while(a<0){
    console.log(a);
    a++;
}

//Do while
// do{
//     code to be executed
// }while(condition to be checked)
let b = 0;
console.log("do while loop");

do{
    console.log(b);
    b++;
}while(b<0)