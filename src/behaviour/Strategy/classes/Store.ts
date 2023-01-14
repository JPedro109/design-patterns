import { IStoreProduct } from "../interfaces/IStoreProduct";
import { AbstractDiscountStrategy } from "../abstracts/AbstractDiscountStrategy";

export class Store {
    private products: IStoreProduct[] = [];
    private _discountStrategy: AbstractDiscountStrategy;

    set discount(discount: AbstractDiscountStrategy) {
        this._discountStrategy = discount;
    }

    addProduct(...products: IStoreProduct[]): void {
        products.forEach((product) => this.products.push(product));
    }

    getProducts(): IStoreProduct[] {
        return this.products;
    }

    getTotal(): number {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    getTotalWithDiscount(): number {
        return this._discountStrategy.getDiscount(this);
    }
}