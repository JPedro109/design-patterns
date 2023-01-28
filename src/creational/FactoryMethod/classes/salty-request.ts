import { RequestProtocol } from "../protocols/request-protocol";

export class SaltyRequest implements RequestProtocol {
    
    constructor(private price: number) { }

    delivery(): void {
        console.log(`Salty request, R$ ${this.price}, was delivered`)
    }
} 