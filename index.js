const inquirer = require('inquirer');
const api = require('./utils/api');
const markdown = require('./utils/generateMarkdown');

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
];

function writeToFile(fileName, data) {



}

function init() {

    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);

            // markdown.generateMarkdown(answers);

            const username = answers.username;
            const title = answers.title;
            const description = answers.description;
            const installation = answers.installation;
            const usage = answers.usage;
            const licenses = answers.licenses;
            const contribute = answers.contribute;
            const tests = answers.tests;
            api.getUser(username);
            // Use user feedback for... whatever!!
        });


}

init();
writeToFile();