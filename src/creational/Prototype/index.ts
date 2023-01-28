import { Person } from "./classes/person";

const personOne = new Person('Luiz', 30);
const personTwo = personOne.clone();

console.log(personOne);
console.log(personTwo);
console.log(personTwo.name, personTwo.age);