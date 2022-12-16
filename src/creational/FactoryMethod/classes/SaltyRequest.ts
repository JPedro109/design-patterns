import { IRequest } from "../interfaces/IRequest";

export class SaltyRequest implements IRequest {
    
    constructor(private price: number) { }

    delivery(): void {
        console.log(`Salty request, R$ ${this.price}, was delivered`)
    }
} 