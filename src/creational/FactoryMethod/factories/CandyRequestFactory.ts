import { CandyRequest } from "../classes/CandyRequest";
import { IRequest } from "../interfaces/IRequest";
import { AbstractRequestFactory } from "./Abstracts/AbstractRequestFactory";

export class CandyRequestFactory extends AbstractRequestFactory {
    
    factory(price: number): IRequest {
        return new CandyRequest(price);
    }
}