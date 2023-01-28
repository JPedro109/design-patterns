import { PrototypeProtocol } from "../protocols/prototype-protocol";

export class Person implements PrototypeProtocol {
    constructor(public name: string, public age: number) { }

    clone(): Person {
        return Object.create(this);
    }
}