// 
// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md";

// An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's your project's title?",
  },
  {
    type: 'input',
    name: 'description',
    message: "Describe your project?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "How do you install this app?",
  },
  {
    type: 'input',
    name: 'usage',
    message: "Provide a brief description of instructions/examples for use?",
  },
  {
    type: 'input',
    name: 'credits',
    message: "Who did you collaborate with on this project?",
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license did you use?',
    choices: ["Apache", "GNU_v3.0", "MIT", "BSD_2", "BSD_3", "None"],
  },
  {
    type: 'input',
    name: 'tests',
    message: "Please write an example to test the app?",
  },
  {
    type: 'input',
    name: 'github',
    message: "What is your GitHub Username?",
  },
  {
    type: 'input',
    name: 'email',
    message: "What is your email?",
  },

];

// Function that writes a README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('The file has been written!')
  );
}

//initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile(fileName, generateMarkdown(answers));
    })
    .catch ((err) => console.error(err));

}

// Function call to initialize app
init();
