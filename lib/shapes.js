// Here I will create a shapes class that will have several child classes in it.
class Shapes {
  constructor(shapeColor, letterColor, characters) {
    this.shapeColor = shapeColor;
    this.letterColor = letterColor;
    this.characters = characters;
  }
}

 class Square extends Shapes {
  constructor(shapeColor, letterColor, characters) {
    super(shapeColor, letterColor, characters);
    this.shape = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="200" fill="${this.shapeColor}" />
        
        <text x="100" y="100" font-family="Arial" font-size="30" fill="${letterColor}">${characters}</text>
        </svg>`
  }
}

class Circle extends Shapes {
  constructor(shapeColor, letterColor, characters) {
    super(shapeColor, letterColor, characters);

    this.shape = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${letterColor}">${characters}</text>
      
      </svg>`
  }
}

class Triangle extends Shapes {
  constructor(shapeColor, letterColor, characters) {
    super(shapeColor, letterColor, characters);
    this.shape = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,0 0,300 300,300" fill="${shapeColor}" />
        
        <text x="110" y="170" font-family="Arial" font-size="30" fill="${letterColor}" font-weight="bold">${characters}</text>
      </svg>`
  }
}

// We really only need to export the 3 modues to display the 3 shapes to choose from.
module.exports = { Square, Circle, Triangle };

