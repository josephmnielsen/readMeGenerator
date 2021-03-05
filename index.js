const fs = require('fs')
const inquirer = require('inquirer')

inquirer.prompt([
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  }, {
    type: 'input',
    name: 'description',
    message: 'Please give us a brief description of your project:'
  }, {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  }, {
    type: 'input',
    name: 'usage',
    message: 'How is this meant to be used?'
  }, {
    type: 'input',
    name: 'contributions',
    message: 'What are the contribution guidelines?'
  }, {
    type: 'input',
    name: 'test',
    message: 'What are the test instructions?'
  }, {
    type: 'list',
    name: 'license',
    message: 'Please choose a license',
    choices: ['A','B','C','D','E']
  }, {
    type: 'input',
    name: 'username',
    message: 'What is your Github username?'
  }, {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
])
.then(res => {

  let body = `
  # ${res.title}

  ## Description
  ${res.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [Contributions](#contributions)
  [Test](#test)

  ## Installation
  ${res.installation}

  ## Usage
  ${res.usage}

  ## Contributions
  ${res.contributions}

  ## Test
  ${res.test}

  ## Questions?
  [My Github](https://github.com/${res.username})
  or
  [Email me!](mailto:${res.email})

  ## License:
  

  `
  fs.writeFile('READMEtest.md', body, err => {
    if (err) {console.log(err)}
  })
})
.catch(err => console.log(err))
