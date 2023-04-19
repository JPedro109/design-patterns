import { MainDiscountStrategy } from "./classes/main-discount-strategy";
import { SecondaryDiscountStrategy } from "./classes/secondary-discount-strategy";
import { Store } from "./classes/store";

const storeMain = new Store();

const mainDiscountStrategy = new MainDiscountStrategy();
storeMain.discount = mainDiscountStrategy;

storeMain.addProduct({ name: "Produto 1", price: 150 });
storeMain.addProduct({ name: "Produto 2", price: 150 });
storeMain.addProduct({ name: "Produto 3", price: 150 });
console.log(storeMain.getTotal());
console.log(storeMain.getTotalWithDiscount());

console.log();

const storeSecondary = new Store();

const secondDiscountStrategy = new SecondaryDiscountStrategy();
storeSecondary.discount = secondDiscountStrategy;

storeSecondary.addProduct({ name: "Produto 1", price: 50 });
storeSecondary.addProduct({ name: "Produto 2", price: 50 });
storeSecondary.addProduct({ name: "Produto 3", price: 50 });
console.log(storeSecondary.getTotal());
console.log(storeSecondary.getTotalWithDiscount());