import { ICustomer } from "../../interfaces/ICustomer";

export class EnterpriseCustomer implements ICustomer {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)';
  }
}