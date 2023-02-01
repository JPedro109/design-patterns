import { ProductProtocol } from "../protocols/product-protocol";

export  class AbstractProduct implements ProductProtocol  {
    constructor(protected product: ProductProtocol) { }

    getPrice(): number {
        return this.product.getPrice();
    }

    getName(): string {
        return this.product.getName();
    }
}