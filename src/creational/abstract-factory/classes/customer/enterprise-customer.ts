import { CustomerProtocol } from "../../protocols/customer-protocol";

export class EnterpriseCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name += ' (ENTERPRISE)';
  }
}