import { IDelivery } from "../interfaces/IDelivery";
import { DeliveryLocationData } from "../types/DeliveryTypes";

export class DeliveryLocation implements IDelivery {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delivery(name: string, number: string): void {
    console.log();
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.street, "-", this.intrinsicState.city);
    console.log('Número:', number);
    console.log();
  }
}