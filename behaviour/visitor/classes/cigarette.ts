import { TaxVisitorProtocol } from "../protocols/tax-visitor-protocol";
import { AbstractProduct } from "./abstracts/abstract-product";

export class Cigarette extends AbstractProduct {
    constructor(protected price: number) {
        super("Cigarrete", price);
    }

    getPriceWithTaxes(visitor: TaxVisitorProtocol): number {
        return visitor.calculateTaxesForCigarette(this);
    }
}