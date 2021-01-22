const { prompt } = require('inquirer')
 
const question = () => {

    prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your name?'
            },
            {
                type: 'list',
                name: 'choice',
                message: 'What is your favorite Pokemon?',
                choices: ['Charizard', 'MewTwo', 'Pikachu']
            },
            {
                type: 'confirm',
                name: 'confirm',
                message: 'Are there more than 100 pokemon?'
            }      
        ])
        // .then will always be "res =>"
        .then(res => {
            console.log(
                ` Okay awesome so...
                  Your name is ${res.name}
                  Your favorite pokemon is ${res.choice}
                  If you answered YES, then your correct! ==> Your answer ${res.confirm}
                  `)
        })
        .catch(err => console.log(err))
}

question()
