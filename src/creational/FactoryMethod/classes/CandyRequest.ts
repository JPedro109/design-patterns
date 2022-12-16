import { IRequest } from "../interfaces/IRequest";

export class CandyRequest implements IRequest {
    
    constructor(private price: number) { }

    delivery(): void {
        console.log(`Candy request, R$ ${this.price}, was delivered`)
    }
} 