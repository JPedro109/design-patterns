import { AbstractDiscountStrategy } from "../abstracts/AbstractDiscountStrategy";
import { Store } from "./Store";

export class SecondaryDiscountStrategy extends AbstractDiscountStrategy {
    protected discount = 0;

    getDiscount(cart: Store): number {
        const total = cart.getTotal();

        if (total >= 100) this.discount = 5;

        return total - total * (this.discount / 100);
    }
}