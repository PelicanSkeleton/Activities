// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "password",
            message: "Set your password.",
            name: "password"
        },
        {
            type: "checkbox",
            message: "What type of music do you normally have here?",
            choices: ["Blues", "Rock", "Both kinds. Country and Western"],
            name: "music"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function(inquirerResponse){
        if(inquirerResponse.confirm){
            console.log("Welcome " + inquirerResponse.username);
            console.log("Oh we have " + inquirerResponse.music);
        }else {
            console.log("You're not ready to rock, " + inquirerResponse.username + "?");
        }
    })