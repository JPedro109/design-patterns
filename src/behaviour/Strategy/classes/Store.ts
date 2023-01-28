import { StoreProductProtocol } from "../protocols/store-product-protocol";
import { AbstractDiscountStrategy } from "../abstracts/abstract-discount-strategy";

export class Store {
    private products: StoreProductProtocol[] = [];
    private _discountStrategy: AbstractDiscountStrategy;

    set discount(discount: AbstractDiscountStrategy) {
        this._discountStrategy = discount;
    }

    addProduct(...products: StoreProductProtocol[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getProducts(): StoreProductProtocol[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }
}