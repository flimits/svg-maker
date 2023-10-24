const { H } = require("jest-haste-map");

// Here I will create a shapes class that will have several child classes in it.
class Shapes {
    constructor(shapeColor,letterColor,characters,height,width) {
      this.shapeColor = shapeColor;
      this.letterColor = letterColor;
      this.characters = characters;
      this.height = height;
      this.width = width;
    }
  }
  
  class Rectangle extends Shapes{
    constructor (shapeColor,letterColor,characters,height, width) {
        super(shapeColor,letterColor,characters,height,width);

    }
  }

  class Circle extends Shapes{
    constructor (shapeColor,letterColor,characters,height, width) {
        super(shapeColor,letterColor,characters,height,width);


    }
  }

  class Triangle extends Shapes{
    constructor (shapeColor,letterColor,characters,height, width) {
        super(shapeColor,letterColor,characters,height,width);

    }
  }

  const bett = new Shapes("blue","red","jason");
  const dude = new Rectangle("purple","white","jason",100,100)
  const winny = new Triangle("yellow","black","jason",100,100)


  console.log(bett);
  console.log(dude);
  console.log(winny);
