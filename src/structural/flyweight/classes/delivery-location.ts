import { DeliveryProtocol } from "../protocols/delivery-protocol";
import { DeliveryLocationData } from "../types/delivery-types";

export class DeliveryLocation implements DeliveryProtocol {
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  delivery(name: string, number: string): void {
    console.log();
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.street, "-", this.intrinsicState.city);
    console.log('Número:', number);
    console.log();
  }
}