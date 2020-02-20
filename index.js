const questions = [
    "What is your Github username?",
    "What is your Project title?",
    "What is your project description?",
    "What are the Table of contents?",


];

function writeToFile(fileName, data) {
}

function init() {

    var inquirer = require('inquirer');
    inquirer
        .prompt([
            /* Pass your questions in here */
        ])
        .then(answers => {
            // Use user feedback for... whatever!!
        });


}

init();
