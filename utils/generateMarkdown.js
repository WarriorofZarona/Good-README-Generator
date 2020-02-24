function generateMarkdown(data) {
  return `
# ${data.title}

# ${data.description}

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
${data.contributing}

# Tests
${data.tests}

# Questions
![Profile Avatar](${data.pfp})

If you have any questions, please e-mail me at E-mail: $(data.email).


# Credits

Github: [${data.username}](${data.url})
Copyright ${data.name}. All Rights Reserved.


`;
}

module.exports = generateMarkdown;
