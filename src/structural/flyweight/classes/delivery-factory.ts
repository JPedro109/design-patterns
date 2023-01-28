import { DeliveryLocationDictionary, DeliveryLocationData } from "../types/delivery-types";
import { DeliveryProtocol } from "../protocols/delivery-protocol";
import { DeliveryLocation } from "./delivery-location";
  
export class DeliveryFactory {
    private locations: DeliveryLocationDictionary = {};
  
    private createId(data: DeliveryLocationData): string {
      return Object.values(data)
        .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
        .join('_');
    }
  
    makeLocation(intrinsicState: DeliveryLocationData): DeliveryProtocol {
      const key = this.createId(intrinsicState);
      if (key in this.locations) return this.locations[key];
      this.locations[key] = new DeliveryLocation(intrinsicState);
      return this.locations[key];
    }
  
    getLocations(): DeliveryLocationDictionary {
      return this.locations;
    }
}