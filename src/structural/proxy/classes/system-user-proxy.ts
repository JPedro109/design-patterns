import { AddressProtocol, SystemUserProtocol } from "../protocols/system-user-protocol";
import { AdminUser } from "./admin-user";

export class SystemUserProxy implements SystemUserProtocol {
    private realUser: SystemUserProtocol;
    private realUserAddresses: AddressProtocol[];

    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    private createUser(): SystemUserProtocol {
        if (this.realUser == null) {
          this.realUser = new AdminUser(this.username, this.password);
        }
    
        return this.realUser;
      }
    
      async getAddresses(): Promise<AddressProtocol[]> {
        this.realUser = this.createUser();
    
        if (this.realUserAddresses == null) {
          this.realUserAddresses = await this.realUser.getAddresses();
        }
    
        return this.realUserAddresses;
      }
    
}