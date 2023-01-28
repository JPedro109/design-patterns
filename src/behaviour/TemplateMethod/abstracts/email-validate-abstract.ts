export abstract class EmailValidateAbstract {

    public results: string[] = [];

    constructor(protected email: string) { }

    readonly templateMethod = () => {
        this.validateEmail();
        this.validateOrigin();
        this.hook();
    }

    protected validateEmail(): void {
        this.email.split("@")?.length === 2 ? this.results.push("O email é válido") : this.results.push("O email é inválido");
    }

    protected abstract validateOrigin(): void;

    protected hook(): void {}
}