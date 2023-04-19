import { RequestProtocol } from "../../protocols/request-protocol";

export abstract class AbstractRequestFactory {
    abstract factory(price: number): RequestProtocol;
}