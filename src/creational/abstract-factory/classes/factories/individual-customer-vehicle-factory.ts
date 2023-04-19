import { CustomerProtocol } from "../../protocols/customer-protocol";
import { VehicleProtocol } from "../../protocols/vehicle-protocol";
import { IndividualCustomer } from "../customer/individual-customer";
import { IndividualCar } from "../vehicle/individual-car";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): CustomerProtocol {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}