// Task 8: Student Marks Calculation Program  
//Create variables to store marks of five subjects. 
// Calculate the total marks and store the result. 
//Calculate the average marks and store the result. 
//Display total and average using template literals. 
//Log the output to the console.

const prompt=require("prompt-sync")();
let mark1 = Number(prompt("Enter marks for Subject 1:"));
let mark2 = Number(prompt("Enter marks for Subject 2:"));
let mark3 = Number(prompt("Enter marks for Subject 3:"));
let mark4 = Number(prompt("Enter marks for Subject 4:"));
let mark5 = Number(prompt("Enter marks for Subject 5:"));

// Calculations
let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
let averageMarks = totalMarks / 5;

// Display Output using Template Literals
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks}`);
