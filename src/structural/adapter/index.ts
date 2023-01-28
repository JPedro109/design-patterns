import { EmailValidatorAdapter } from "./classes/email-validator-adapter";

const adapter = new EmailValidatorAdapter();

console.log(adapter.isEmail("joaopedro@teste.com"));