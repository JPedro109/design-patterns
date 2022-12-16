import { IRequest } from "../../interfaces/IRequest";

export abstract class AbstractRequestFactory {
    abstract factory(price: number): IRequest;
}