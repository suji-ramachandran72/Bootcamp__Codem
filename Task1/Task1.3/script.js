//Task 3: Simple Interest Calculator  
//Create variables for: principal amount (number) ,rate of interest (number) ,time period (number)
// Calculate simple interest using the formula: (principal * rate * time) / 100.
//Store the calculated interest in a variable.
// Display the final result using console.log() in sentence format.

const prompt=require("prompt-sync")();
let principal = Number(prompt("Enter the principal amount:"));
let rate = Number(prompt("Enter the rate of interest:"));
let time = Number(prompt("Enter the time period (in years):"));

// Simple Interest Calculation
let simpleInterest = (principal * rate * time) / 100;

// Display Result 
console.log(
  "The simple interest for a principal amount of " + principal +" at a rate of " +
  rate +"% for a time period of " + time + " years is " + simpleInterest +".");
