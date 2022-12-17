import { ProductComposite } from "./classes/ProductComposite";
import { ProductLeaf } from "./classes/ProductLeaf";

const pen = new ProductLeaf("pen", 2);
const pencil = new ProductLeaf("pencil", 3);
const school = new ProductComposite();
school.add(pen, pencil);

const samsung = new ProductLeaf("samsung", 6000);
const iphone = new ProductLeaf("iphone", 10000);
const smartphone = new ProductComposite();
smartphone.add(samsung, iphone);

const lg = new ProductLeaf("lg", 5000);
const philco = new ProductLeaf("philco", 7000);
const tv = new ProductComposite();
tv.add(lg, philco);

const store = new ProductComposite();
store.add(school, smartphone, tv);

console.log({
    school: school.getPrice(),
    smartphone: smartphone.getPrice(),
    tv: tv.getPrice(),
    store: store.getPrice(),
});