import { IPrototype } from "../interfaces/IPrototype";

export class Person implements IPrototype {
    constructor(public name: string, public age: number) { }

    clone(): Person {
        return Object.create(this);
    }
}