function generateMarkdown(data) {
  return `
# ${data.title} ![GitHub package.json version](https://img.shields.io/github/package-json/v/WarriorofZarona/Good-README-Generator)
${data.description}

# Tables of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Credits](#credits)

# Installation
${data.installation}

# Usage
${data.usages}

# License
${data.licenses}



# Contributing
${data.contribute}

# Tests
${data.tests}

# Questions
![Profile Avatar](${data.pfp})

If you have any questions, please e-mail me at ${data.email}.


# Credits

Github: [${data.username}](${data.url})


Copyright ${data.name}. All Rights Reserved.


`;
};

module.exports = generateMarkdown;
