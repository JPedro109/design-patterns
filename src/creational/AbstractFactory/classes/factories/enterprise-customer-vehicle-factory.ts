import { CustomerProtocol } from "../../protocols/customer-protocol";
import { VehicleProtocol } from "../../protocols/vehicle-protocol";
import { EnterpriseCustomer } from "../customer/enterprise-customer";
import { EnterpriseCar } from "../vehicle/enterprise-car";

export class EnterpriseCreateVehicleCustomerFactory {
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}