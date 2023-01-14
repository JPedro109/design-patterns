import { AbstractDiscountStrategy } from "../abstracts/AbstractDiscountStrategy";
import { Store } from "./Store";

export class MainDiscountStrategy extends AbstractDiscountStrategy {
    protected discount = 0;

    getDiscount(cart: Store): number {
        const total = cart.getTotal();

        if (total >= 350) this.discount = 10;

        return total - total * (this.discount / 100);
    }
}