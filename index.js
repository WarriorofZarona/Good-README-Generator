const inquirer = require('inquirer');
const api = require('./utils/api');

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
        message: "Enter a short project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter the installation process: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter the usage of the project: ",
        name: "usage"

    },
    {
        type: "input",
        message: "Enter licenses used for the project: ",
        name: "licenses"
    },
    {
        type: "confirm",
        message: "Will other developers contribute to this project?",
        name: "contribute"

    }, {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter your e-mail: ",
        name: "email"
    }
];

function writeToFile(fileName, data) {
}

function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const username = answers.username
            console.log(username);
            api.getUser(username);
            // Use user feedback for... whatever!!
        });


}

init();
