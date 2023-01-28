import { ProductProtocol } from "../protocols/product-protocol";

export class Pen implements ProductProtocol {
    
    private price = 5;
    private name = "Pen";
    
    getPrice(): number {
       return this.price;
    }
    
    getName(): string {
        return this.name;
    }
}