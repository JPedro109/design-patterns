import { BaseChain } from "./classes/base-chain";
import { EmailValidator } from "./classes/email-validator";
import { NameValidator } from "./classes/name-validator";
import { AgeValidator } from "./classes/age-validator";

const chain = new BaseChain();  

chain                            
    .setNextHandler(new EmailValidator())
    .setNextHandler(new NameValidator())
    .setNextHandler(new AgeValidator());

try {
    const result = chain.handle({
        email: "test@test.com",
        name: "João Pedro",
        age: 18
    });
    
    console.log(result);
}
catch(e) {
    console.log(e.message);
}