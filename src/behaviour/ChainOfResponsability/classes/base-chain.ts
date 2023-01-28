import { User } from "../types";

export class BaseChain {

    protected nextHandler?: BaseChain = null;

    setNextHandler(handle: BaseChain): BaseChain {
        this.nextHandler = handle;
        return handle;
    }
    
    handle(request: User, data?: User): User  {

        if(this.nextHandler) return this.nextHandler.handle(request, data);

        return data;
    }
}