import { ICustomer } from "../../interfaces/ICustomer";
import { IVehicle } from "../../interfaces/IVehicle";
import { IndividualCustomer } from "../customer/IndividualCustomer";
import { IndividualCar } from "../vehicle/IndividualCar";

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): IVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}