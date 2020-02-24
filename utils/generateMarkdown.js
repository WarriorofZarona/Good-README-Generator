function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

# Tables of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

# Installation
${data.installation}

# Usage
${data.usage}

# License
${data.licenses}

# Credits
![Profile Avatar](${data.pfp})
Github username: ${data.username}
E-mail: $(data.email)

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
${data.questions}

`;
}

module.exports = generateMarkdown;
