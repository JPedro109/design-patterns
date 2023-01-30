import { TaxVisitorProtocol } from "../protocols/tax-visitor-protocol";
import { Drink } from "./drink";
import { Cigarette } from "./cigarette";
import { Food } from "./food";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }

  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }

  calculateTaxesForDrink(drink: Drink): number {
    return drink.getPrice() + drink.getPrice() * 0.5;
  }
}