import { Food } from "../classes/food";
import { Cigarette } from "../classes/cigarette";
import { Drink } from "../classes/drink";

export interface TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForDrink(drink: Drink): number;
}