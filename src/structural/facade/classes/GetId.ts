import { IGetId } from "../interfaces/IGetId";

export class GetId implements IGetId {

    getId(): string {
        return "1";
    };
}