import { ICustomer } from "../../interfaces/ICustomer";

export class IndividualCustomer implements ICustomer {
    constructor(public name: string) {
      this.name += ' (INDIVIDUAL)';
    }
}