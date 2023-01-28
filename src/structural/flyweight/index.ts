import { DeliveryFactory } from "./classes/delivery-factory";
import { deliveryContext } from "./classes";

const factory = new DeliveryFactory();

deliveryContext(factory, "João", "336", "Mariano Cursino", "São Paulo");
deliveryContext(factory, "Pedro", "337", "Mariano Cursino", "São Paulo");
deliveryContext(factory, "Tobias", "338", "Cursino Mario", "Sorocoba");
deliveryContext(factory, "Manuel", "339", "Cursino Mario", "Sorocoba");

console.log(factory);