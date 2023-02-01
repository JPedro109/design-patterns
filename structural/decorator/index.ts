import { DecoratorPen } from "./classes/decorator-pen";
import { Pen } from "./classes/pen";

const pen = new Pen();
console.log(pen.getName());
console.log(pen.getPrice());

console.log();

const specialPen = new DecoratorPen(pen);
console.log(specialPen.getName());
console.log(specialPen.getPrice());