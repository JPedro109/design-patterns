import { IteratorProtocol } from "../protocols/iterator-protocol";
import { Iterator } from "./iterator";

export class DataStructure {
    private _items: string[] = [];
    private iterator: IteratorProtocol<string> = new Iterator(this);

    addItem(...items: string[]) {
        items.forEach(item => this._items.push(item));
    }
    
    get items(): string[] {
        return this._items;
    }

    size(): number {
        return this._items.length;
    }

    changeIterator(iterator: IteratorProtocol<string>): void {
        this.iterator = iterator;
    }

    [Symbol.iterator](): IteratorProtocol<string> {
        return this.iterator;
    }

    resetIterator(): void {
        this.iterator.reset();
    }
}