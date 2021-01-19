




// inquirer is another npm that helps you inquir a set of prompts that can be found in its "Documentation"
// This is setting inquirer to be required, in oder for the Documentation to render
const inquirer = require('inquirer')


// this was added after we did "const inquirer". This Functions lets you have a round of question repeat until the end
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
        // if I wanted the just the name in the prompts it would be (res.name || res.choice)
            console.log(res.name, res.choice)
        })
        // .catch will always be "err =>"
        .catch(err => console.log(err))
}
