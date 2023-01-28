import { ValidateEmailMain } from "./classes/validate-email-main";
import { ValidateEmailSpecial } from "./classes/validate-email-special";

const validateEmailMain = new ValidateEmailMain("email@main.com");
validateEmailMain.templateMethod();
console.log(validateEmailMain.results);

console.log();

const validateEmailSpecial = new ValidateEmailSpecial("email@special.com");
validateEmailSpecial.templateMethod();
console.log(validateEmailSpecial.results);