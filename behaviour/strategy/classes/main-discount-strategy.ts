import { AbstractDiscountStrategy } from "../abstracts/abstract-discount-strategy";
import { Store } from "./store";

export class MainDiscountStrategy extends AbstractDiscountStrategy {
    protected discount = 0;

    getDiscount(cart: Store): number {
        const total = cart.getTotal();

        if (total >= 350) this.discount = 10;

        return total - total * (this.discount / 100);
    }
}