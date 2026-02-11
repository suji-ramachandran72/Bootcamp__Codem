//Task 10: JavaScript Utility Program (Programming Mandatory)  
//Create variables to store:user name (string), age (number),marks of five subjects (numbers)  
//Convert the user name to uppercase. 
//Find the length of the user name. 
//Calculate total marks. 
//Calculate average marks.
//Display all calculated and processed values using template literals and  
// Log the final output using console.log().

const prompt=require("prompt-sync")();
let userName = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));

let mark1 = Number(prompt("Enter marks for Subject 1:"));
let mark2 = Number(prompt("Enter marks for Subject 2:"));
let mark3 = Number(prompt("Enter marks for Subject 3:"));
let mark4 = Number(prompt("Enter marks for Subject 4:"));
let mark5 = Number(prompt("Enter marks for Subject 5:"));

// Calculations
let totalMarks = mark1 + mark2 + mark3 + mark4 + mark5;
let averageMarks = totalMarks / 5;

// String Processing
let upperCaseName = userName.toUpperCase();
let nameLength = userName.length;

// Display Output using Template Literals
let output = `
Student Name       : ${userName}
Name in Uppercase  : ${upperCaseName}
Name Length        : ${nameLength}
Age                : ${age}

Total Marks        : ${totalMarks}
Average Marks      : ${averageMarks}
`;

// Log Final Output
console.log(output);
