const inquirer = require('inquirer')


// reserve function === its a function that calls itself 
const question = () => {

    // the inquirer is being called from line 16 and then we are letting it know to Prompt questions below.
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is your name?'
            },
            {
                type: 'list',
                name: 'choice',
                message: 'Pick a number',
                choices: ['one', 'two', 'three']
            }     
        ])
        // .then will always be "res =>"
        .then(res => {
            console.log(res.name, res.choice)
        })
        .catch(err => console.log(err))
}
