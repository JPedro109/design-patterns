import { TaxVisitorProtocol } from "../protocols/tax-visitor-protocol";
import { AbstractProduct } from "./abstracts/abstract-product";

export class Drink extends AbstractProduct {
    constructor(protected price: number) {
        super("Drink", price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForDrink(this);
      }
}