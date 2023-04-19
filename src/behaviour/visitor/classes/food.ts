import { TaxVisitorProtocol } from "../protocols/tax-visitor-protocol";
import { AbstractProduct } from "./abstracts/abstract-product";

export class Food extends AbstractProduct {
    constructor(protected price: number) {
        super("Food", price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForFood(this);
    }
}