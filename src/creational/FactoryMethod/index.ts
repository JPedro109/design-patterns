import { SaltyRequestFactory } from "./factories/salty-request-factory";
import { CandyRequestFactory } from "./factories/candy-request-factory";

const saltyRequestFactory = new SaltyRequestFactory();
const candyRequestFactory = new CandyRequestFactory();

const saltyRequestOne = saltyRequestFactory.factory(15);
const saltyRequestTwo = saltyRequestFactory.factory(20);
const saltyRequestThree = saltyRequestFactory.factory(25);

const candyRequestOne = candyRequestFactory.factory(30);
const candyRequestTwo = candyRequestFactory.factory(35);
const candyRequestThree = candyRequestFactory.factory(40);

saltyRequestOne.delivery();
saltyRequestTwo.delivery();
saltyRequestThree.delivery();
console.log();
candyRequestOne.delivery();
candyRequestTwo.delivery();
candyRequestThree.delivery();