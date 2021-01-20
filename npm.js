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