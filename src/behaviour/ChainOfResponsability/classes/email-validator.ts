import { BaseChain } from "./base-chain";
import { User } from "../types";

export class EmailValidator extends BaseChain {

    handle(request: User, data: User): User {

        const email = request.email;

        if (email.split("@")?.length < 2) throw new Error("Preencha um email válido");

        return super.handle(request, {
            ...data,
            email
        });
    }
}