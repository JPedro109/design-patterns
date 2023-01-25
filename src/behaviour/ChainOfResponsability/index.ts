import { BaseChain } from "./classes/BaseChain";
import { EmailValidator } from "./classes/EmailValidator";
import { NameValidator } from "./classes/NameValidator";
import { AgeValidator } from "./classes/AgeValidator";

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