//      ** "initializing with NPM" (Node Package Manager) **

//  **command 1. npm init -y
//  **command 2. type npm package => "npm i chalk" or "npm i inquirer"
//  **command 3. create a .gitignore
//  **command 4. repeat process for all new repositories

//  **HINT** if you are pulling from another repo use "npm i" 

// Chalk NPM 
const chalk = require('chalk')
const log = console.log

// combine Styled and normal string
log(chalk.red('Am') + chalk.whiteBright('eri') + chalk.blue('ca!') + ':D')

// Nest Styles
log(chalk.yellowBright('Aye you,', chalk.underline.bgBlue('Gotta Catch em All -POKEMON!')))


// GitHub chalk-animation 
const chalkAnime = require('chalk-animation')
chalkAnime.rainbow('One Punch Man is the best anime, like this text!')