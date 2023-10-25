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
        const whatShape = answers.shape;

        let getInShape;
        switch (whatShape) {
            case 'circle':
                getInShape = new Circle(answers.shapeColor, answers.letterColor, answers.letters);
                break;
            case 'square':
                getInShape = new Rectangle(answers.shapeColor, answers.letterColor, answers.letters);
                break;
            case 'triangle':
                getInShape = new Triangle(answers.shapeColor, answers.letterColor, answers.letters);
                break; // Added break statement
        }

        const theShapeOutput = getInShape.shape;

        function writeToFile(whatShape, theShapeOutput) {
            const fileName = "./examples/" + whatShape + ".svg";
            console.log("the file name is " + fileName);

            fs.writeFile(fileName, theShapeOutput, (err) => {
                if (err) {
                    console.error("Error writing to file:", err);
                } else {
                    console.log('Saved!');
                }
            });
        }

        writeToFile(whatShape, theShapeOutput);


        // console.log("#####------########");
        // console.log(getInShape.shape);
        // console.log("#####------########");
        // console.log(theShapeOutput);
        // console.log("#####------########");
        // console.log("whatShape is ", whatShape);
        // console.log("#####------########");
    });