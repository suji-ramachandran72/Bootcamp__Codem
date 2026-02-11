//Task 2: Arithmetic Operations Program.
// Create two numeric variables.
// Perform the following operations:addition, subtraction, multiplication, division, modulus,power.
// Store each operation result in a separate variable.
// Log each result to the console with a meaningful description.
 
const prompt=require("prompt-sync")();
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// Arithmetic Operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;
let power = num1 ** num2;

// Display Results
console.log("----- Arithmetic Operations Results -----");
console.log(`Addition (${num1} +${num2}):`, addition);
console.log(`Subtraction (${num1}-${num2}):`, subtraction);
console.log(`Multiplication (${num1} * ${num2}):`, multiplication);
console.log(`Division (${num1} / ${num2}):`, division);
console.log(`Modulus(${num1} % ${num2}):`, modulus);
console.log(`Power (${num1} ^${num2}):`, power);

