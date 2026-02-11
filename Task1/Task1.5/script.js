//Task 5: Template Literal Output Program  
//Create variables to store:  name (string) ,role (string) ,organization or company name (string) 
// Use template literals to generate a formatted introduction message. 
// Display the generated message using console.log()

const prompt=require("prompt-sync")();
let name = prompt("Enter your name:");
let role = prompt("Enter your role:");
let organization = prompt("Enter your organization or company name:");

// Template Literal 
let introduction = `Hello! My name is ${name}. 
I work as a ${role} at ${organization}.`;

// Display Output
console.log(introduction);
