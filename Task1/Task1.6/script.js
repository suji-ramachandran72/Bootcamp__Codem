//Task 6: Variable Behavior Program   
//Declare one variable using var. 
//Declare one variable using let. 
//Declare one variable using const. 
//Attempt to reassign values to each variable. 
//Attempt redeclaration where applicable. 
//Log the results to the console. 
//Add comments explaining the observed behavior.

// Declaring variables
var x = 10;       // var declaration
let y = 20;       // let declaration
const z = 30;     // const declaration

console.log("Initial values:");
console.log("var x =", x);
console.log("let y =", y);
console.log("const z =", z);

// Reassigning values
x = 15;           // Allowed
y = 25;           // Allowed
// z = 35;        //  Not allowed (will cause error)

console.log("After reassignment:");
console.log("var x =", x);
console.log("let y =", y);
// console.log("const z =", z); // remains same

// Redeclaration
var x = 50;       // Allowed (var allows redeclaration)
// let y = 60;    //  Not allowed (error)
// const z = 70;  // Not allowed (error)

console.log("After redeclaration:");
console.log("var x =", x);
