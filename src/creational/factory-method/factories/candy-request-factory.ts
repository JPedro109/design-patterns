import { CandyRequest } from "../classes/candy-request";
import { RequestProtocol } from "../protocols/request-protocol";
import { AbstractRequestFactory } from "./abstracts/abstract-request-factory";

export class CandyRequestFactory extends AbstractRequestFactory {
    
    factory(price: number): RequestProtocol {
        return new CandyRequest(price);
    }
}