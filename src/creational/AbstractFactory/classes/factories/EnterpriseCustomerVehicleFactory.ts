import { ICustomer } from "../../interfaces/ICustomer";
import { IVehicle } from "../../interfaces/IVehicle";
import { EnterpriseCustomer } from "../customer/EnterpriseCustomer";
import { EnterpriseCar } from "../vehicle/EnterpriseCar";

export class EnterpriseCreateVehicleCustomerFactory {
    createCustomer(customerName: string): ICustomer {
      return new EnterpriseCustomer(customerName);
    }
  
    createVehicle(vehicleName: string, customerName: string): IVehicle {
      const customer = this.createCustomer(customerName);
      return new EnterpriseCar(vehicleName, customer);
    }
  }