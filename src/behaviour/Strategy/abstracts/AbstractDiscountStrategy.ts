import { Store } from '../classes/Store';

export abstract class AbstractDiscountStrategy {
  protected discount = 0;

  getDiscount(cart: Store): number {
    return cart.getTotal();
  }
}