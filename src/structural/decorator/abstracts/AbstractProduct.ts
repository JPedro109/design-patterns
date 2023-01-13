import { IProduct } from "../interfaces/IProduct";

export  class AbstractProduct implements IProduct  {
    constructor(protected product: IProduct) { }

    getPrice(): number {
        return this.product.getPrice();
    }

    getName(): string {
        return this.product.getName();
    }
}