import { DataStructure } from "./classes/data-structure";
import { Iterator } from "./classes/iterator";

const dataStructure = new DataStructure();
dataStructure.addItem("A", "B", "C", "D", "E", "F");

dataStructure.resetIterator();

for (const data of dataStructure) {
  console.log(data);
}

console.log();

dataStructure.changeIterator(new Iterator(dataStructure));

for (const data of dataStructure) {
  console.log(data);
}

console.log();

dataStructure.resetIterator();

for (const data of dataStructure) {
  console.log(data);
}

console.log();