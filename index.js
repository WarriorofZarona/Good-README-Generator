const inquirer = require('inquirer');
const fs = require('fs');
const api = require('./utils/api');
const markdown = require('./utils/generateMarkdown');
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

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
        type: "input",
        message: "Enter contributing information: ",
        name: "contribute"

    }, {
        type: "input",
        message: "Enter any tests you are running for your project: ",
        name: "tests"
    },
];

async function writeToFile(fileName, data) {


    writeFileAsync(fileName, data).then(function () {
        console.log("Successfully wrote README!");

    }).catch(err => {
        console.log('err ', err);
    })
}

async function init() {

    await inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
            const apiData = api.getUser(answers.username);
            apiData.then(res => {
                console.log(res);
                const data =
                {
                    username: answers.username,
                    title: answers.title,
                    description: answers.description,
                    installation: answers.installation,
                    usages: answers.usage,
                    licenses: answers.licenses,
                    tests: answers.tests,
                    email: res.email,
                    pfp: res.avatar_url
                }
                console.log(data);
                const final = markdown(data)
                console.log(final);
                writeToFile("./output/README.md", final);
            })
                .catch(err => {
                    console.log('err ', err);
                })
        });


}

init();