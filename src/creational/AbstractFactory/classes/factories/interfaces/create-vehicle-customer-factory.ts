import { ICustomer } from "../../../protocols/customer-protocol";
import { IVehicle } from "../../../protocols/vehicle-protocol";

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle;
}