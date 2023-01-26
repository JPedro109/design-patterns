import { ValidateEmailMain } from "./classes/ValidateEmailMain";
import { ValidateEmailSpecial } from "./classes/ValidateEmailSpecial";

const validateEmailMain = new ValidateEmailMain("email@main.com");
validateEmailMain.templateMethod();
console.log(validateEmailMain.results);

console.log();

const validateEmailSpecial = new ValidateEmailSpecial("email@special.com");
validateEmailSpecial.templateMethod();
console.log(validateEmailSpecial.results);