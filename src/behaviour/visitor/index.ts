import { Food } from "./classes/food";
import { Cigarette } from "./classes/cigarette";
import { Drink } from "./classes/drink";
import { BrazilTaxVisitor } from "./classes/brazil-tax-visitor";

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholicDrink = new Drink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();

const cart = [food, cigarette, alcoholicDrink];
const total = cart.reduce((sum, item) => item.getPrice() + sum, 0);
const totalWithTaxesBrazil = cart.reduce((sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum, 0);

console.log(total);
console.log(totalWithTaxesBrazil);