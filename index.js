const { Rectangle, Circle, Triangle } = require('./lib/shapes');

// const rect = new Rectangle("purple", "white", "jason");
// const circ = new Circle("purple", "white", "jason");
// const tri = new Triangle("purple", "white", "jason");

const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            name: 'shape',
            type: 'rawlist',
            message: 'What shape do you want to view?',
            choices: ['circle', 'triangle', 'square'],
            default: 'circle'
        },
        {
            name: 'shapeColor',
            message: 'What color do you want the background of the shape to be?',
            default: 'green'
        },
        {
            name: 'letterColor',
            message: 'What color do you want the letters in the shape to be?',
            default: 'white'
        },
        {
            name: 'letters',
            type: 'input',
            message: 'What letters do you want to dispay in the shape (must be 3 or less)?',
            default: 'xyz',
            validate: function (letters) {
                if (letters.length <= 3) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    ])
    .then(answers => {
        console.info('Answer:', answers.shape);
        // console.info('The shape is' + answers.shape)

        let getInShape;
            switch (answers.shape) {
                case 'circle':
                     getInShape = new Circle(answers.shapeColor, answers.letterColor, answers.letters);
                    break;
                case 'rectangle':
                     getInShape = new Rectangle(answers.shapeColor, answers.letterColor, answers.letters);
                    break;
                case 'triangle':
                     getInShape = new Triangle(answers.shapeColor, answers.letterColor, answers.letters);
            }

            console.log("#####------########")
       console.log(getInShape)
        // const rect = new Rectangle("purple", "white", "jason");
        // const circ = new Circle("purple", "white", "jason");
        // const tri = new Triangle("purple", "white", "jason");


    });