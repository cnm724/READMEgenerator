// A function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![${license} License](https://img.shields.io/badge/license-${license}-833AB4)`;
  }
  return ``;
}

// A function that returns the license link
function renderLicenseLink(license) {
  if(license !== "None"){
    return "- [License](#license)";
}else{
  return ``;
}
}

// A function that returns the license section of README
function renderLicenseSection(license) {

}

// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description

  ${renderLicenseBadge(data.license)}

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}


  ## Usage 
  ${data.usage}

  ## Credits
  * Collaborator(s): ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  You can find me at [${data.github}](https://github.com/${data.github}), and reach me at [${data.email}](mailto:${data.email}) if you have any additional questions!`

}

module.exports = generateMarkdown;
