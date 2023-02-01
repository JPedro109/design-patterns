import { GetIdProtocol } from "../protocol/get-id-protocol";

export class GetId implements GetIdProtocol {

    getId(): string {
        return "1";
    };
}