const { Rectangle, Circle, Triangle } = require('./shapes');
// const Triangle = require('./shapes');
// , Circle, Triangle } from './shapes';

const rect = new Rectangle("purple", "white", "jason");
const circ = new Circle("purple", "white", "jason");
const tri = new Triangle("purple", "white", "jason");

console.log(rect.shape);
console.log(circ.shape);
console.log(tri.shape);
