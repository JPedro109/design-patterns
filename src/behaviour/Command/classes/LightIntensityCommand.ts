import { ISmartHouseCommand } from '../interfaces/ISmartHouseCommand';
import { SmartHouseLight } from './SmartHouseLight';

export class LightIntensityCommand implements ISmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensidade de ${this.light.name} é ${intensity}`);
  }
}