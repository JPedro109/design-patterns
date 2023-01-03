import { IImplemetation } from "../interfaces/IImplemetation";

export class RemoteControl {
  constructor(protected implementation: IImplemetation) {}

  togglePower(): void {
    this.implementation.setPower(!this.implementation.getPower());
    console.log(
      `${this.implementation.getName()} power status: ${this.implementation.getPower()}`,
    );
  }
}