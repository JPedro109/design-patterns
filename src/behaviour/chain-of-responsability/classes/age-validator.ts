import { BaseChain } from "./base-chain";
import { User } from "../types";

export class AgeValidator extends BaseChain {

    handle(request: User, data: User): User {

        const age = request.age;

        if (age < 0 || age > 99) throw new Error("Preencha uma idade válida");

        return super.handle(request, {
            ...data,
            age
        });
    }
}