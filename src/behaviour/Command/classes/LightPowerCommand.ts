import { SmartHouseLight } from './SmartHouseLight';
import { ISmartHouseCommand } from '../interfaces/ISmartHouseCommand';

export class LightPowerCommand implements ISmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}