import { Store } from '../classes/store';

export abstract class AbstractDiscountStrategy {
  protected discount = 0;

  getDiscount(cart: Store): number {
    return cart.getTotal();
  }
}