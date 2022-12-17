import { ICustomer } from "../../../interfaces/ICustomer";
import { IVehicle } from "../../../interfaces/IVehicle";

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): ICustomer;
  createVehicle(vehicleName: string, customerName: string): IVehicle;
}