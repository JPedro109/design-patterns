import { IAddress, ISystemUser } from "../interfaces/ISystemUser";
import { AdminUser } from "./AdminUser";

export class SystemUserProxy implements ISystemUser {
    private realUser: ISystemUser;
    private realUserAddresses: IAddress[];

    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    private createUser(): ISystemUser {
        if (this.realUser == null) {
          this.realUser = new AdminUser(this.username, this.password);
        }
    
        return this.realUser;
      }
    
      async getAddresses(): Promise<IAddress[]> {
        this.realUser = this.createUser();
    
        if (this.realUserAddresses == null) {
          this.realUserAddresses = await this.realUser.getAddresses();
        }
    
        return this.realUserAddresses;
      }
    
}