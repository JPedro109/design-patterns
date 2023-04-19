import { IteratorProtocol } from "../protocols/iterator-protocol";
import { DataStructure } from "./data-structure";

export class Iterator implements IteratorProtocol<string> {
    private index = 0;

    constructor(private readonly dataStructure: DataStructure) { }

    reset(): void {
        this.index = 0;
    }

    next(): IteratorResult<string> {
        const value = this.makeValue(this.dataStructure.items[this.index]);
        value.done = this.index >= this.dataStructure.size();
        this.index++;
        return value;
    }

    private makeValue(value: string): IteratorResult<string> {
        return { value, done: false }
    }
}