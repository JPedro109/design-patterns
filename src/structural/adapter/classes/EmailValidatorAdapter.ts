import validator from "validator";
import { IEmailValidator } from "../interfaces/IEmailValidator";

export class EmailValidatorAdapter implements IEmailValidator {
    isEmail(email: string): boolean {
        return validator.isEmail(email);
    }
}