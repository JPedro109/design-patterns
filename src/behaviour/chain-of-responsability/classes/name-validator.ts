import { BaseChain } from "./base-chain";
import { User } from "../types";

export class NameValidator extends BaseChain {

    handle(request: User, data: User): User {

        const name = request.name;

        if (name.split(" ")?.length < 2) throw new Error("Preencha um nome válido");

        return super.handle(request, {
            ...data,
            name
        });
    }
}