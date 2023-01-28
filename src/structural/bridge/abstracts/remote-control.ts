import { ImplemetationProtocol } from "../protocols/implemetation-protocol";

export class RemoteControl {
  constructor(protected implementation: ImplemetationProtocol) {}

  togglePower(): void {
    this.implementation.setPower(!this.implementation.getPower());
    console.log(
      `${this.implementation.getName()} power status: ${this.implementation.getPower()}`,
    );
  }
}