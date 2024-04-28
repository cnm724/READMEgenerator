// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const fileName = "README.md"

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What's your project's name?",
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
        choices: ["Apache", "GNU v3.0", "MIT", "BSD 2","BSD 3"],
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
inquirer.prompt(questions).then((answers) => {
  console.log('User Info:');
  console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('The file has been written!')
);
}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
