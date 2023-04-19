import { RequestProtocol } from "../protocols/request-protocol";

export class CandyRequest implements RequestProtocol {
    
    constructor(private price: number) { }

    delivery(): void {
        console.log(`Candy request, R$ ${this.price}, was delivered`)
    }
} 