import { SaltyRequest } from "../classes/salty-request";
import { RequestProtocol } from "../protocols/request-protocol";
import { AbstractRequestFactory } from "./abstracts/abstract-request-factory";

export class SaltyRequestFactory extends AbstractRequestFactory {
    factory(price: number): RequestProtocol {
        return new SaltyRequest(price);
    }
}