import { SaltyRequest } from "../classes/SaltyRequest";
import { IRequest } from "../interfaces/IRequest";
import { AbstractRequestFactory } from "./Abstracts/AbstractRequestFactory";

export class SaltyRequestFactory extends AbstractRequestFactory {
    factory(price: number): IRequest {
        return new SaltyRequest(price);
    }
}