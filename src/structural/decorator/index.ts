import { DecoratorPen } from "./classes/DecoratorPen";
import { Pen } from "./classes/Pen";

const pen = new Pen();
console.log(pen.getName());
console.log(pen.getPrice());

console.log();

const specialPen = new DecoratorPen(pen);
console.log(specialPen.getName());
console.log(specialPen.getPrice());