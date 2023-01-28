import validator from "validator";
import { EmailValidatorProtocol } from "../protocols/email-validator-protocol";

export class EmailValidatorAdapter implements EmailValidatorProtocol {
    isEmail(email: string): boolean {
        return validator.isEmail(email);
    }
}