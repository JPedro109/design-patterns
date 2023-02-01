import { AbstractProduct } from "../abstracts/abstract-product";

export class DecoratorPen extends AbstractProduct {

    getPrice(): number {
        return this.product.getPrice() + 10;
    }

    getName(): string {
        return `Special ${this.product.getName()}`
    }
}
