#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
}

// Text + chalk definitions
const data = {
  name: chalk.white('Ana Ribas'),
  handle: chalk.cyan('@anaribaz'),
  labelWork: chalk.white.bold('      Work:'),
  work: chalk.white('MERN Stack Web Developer'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  github: chalk.cyan('https://github.com/anaribazz'),
  labelLinkedIn: chalk.white.bold('  LinkedIn:'),
  linkedin: chalk.cyan('https://linkedin.com/in/anaribas'),
  labelWeb: chalk.white.bold('       Web:'),
  web: chalk.cyan('https://anaribas.ca'),
  labelCard: chalk.white.bold('      Card:'),
  npx: chalk.white('npx anaribas'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen
// effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  newline +
  githubing +
  newline +
  linkedining +
  newline +
  webing +
  newline +
  newline +
  carding

console.log(chalk.green(boxen(output, options)))






// #!




// console.log(`

// Ana Ribas

// MERN Stack Developer
// Get in touch!

// Website - https://www.anaribas.ca
// LinkedIn - https://www.linkedin.com/in/anaribaz
// Github - https://www.github.com/anaribazz

//  `);
