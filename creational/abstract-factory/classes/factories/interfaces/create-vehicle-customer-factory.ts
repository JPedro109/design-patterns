import { CustomerProtocol } from "../../../protocols/customer-protocol";
import { VehicleProtocol } from "../../../protocols/vehicle-protocol";

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}