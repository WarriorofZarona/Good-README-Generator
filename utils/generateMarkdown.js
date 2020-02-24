function generateMarkdown(data, api) {
  return `
# ${data.title}
# Description
## ${data.description}


`;
}

module.exports = generateMarkdown;
