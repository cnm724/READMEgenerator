// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // turn into a turnary
  if (license) {
    console.log("print a badge");
    // ![Static Badge](https://img.shields.io/badge/:badgeContent)
  } else {
    console.log("no license used");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// put link on badge????
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license) 
- [Tests](#Tests)

## Installation
${data.installation}


## Usage 
${data.usage}

## Contribution
* Collaborator(s): ${data.credits}

## Licenses
This application is covered under the ${data.license} license!

## Tests
${data.tests}

## Questions
You can find me at ${data.github}, and reach me at ${data.email} if you have any additional questions!`

}

module.exports = generateMarkdown;

// credits and license add to readme if added or not?
