
let inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "Enter your Github username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "What is your project description?",
        name: "description"
    },
];

function writeToFile(fileName, data) {
}

function init() {

    inquirer
        .prompt([
            /* Pass your questions in here */
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
        });


}

init();
