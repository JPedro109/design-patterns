import { EmailValidateAbstract } from "../abstracts/EmailValidateAbstract";

export class ValidateEmailMain extends EmailValidateAbstract {

    constructor(protected email: string) {
        super(email);
    }

    public results: string[] = [];

    protected validateOrigin(): void {
        this.email.split("@")?.[1] === "main.com" ? this.results.push("A origem é válida") : this.results.push("A origem email é inválida");
    }

    protected hook(): void {
        console.log("As validações do ValidateEmailMain acabaram");
    }

}