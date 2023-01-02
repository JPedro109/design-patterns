import { EmailValidatorAdapter } from "./classes/EmailValidatorAdapter";

const adapter = new EmailValidatorAdapter();

console.log(adapter.isEmail("joaopedro@teste.com"));