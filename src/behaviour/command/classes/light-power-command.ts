import { SmartHouseCommandProtocol } from '../protocols/smart-house-protocol';
import { SmartHouseLight } from './smart-house-light';

export class LightPowerCommand implements SmartHouseCommandProtocol {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}