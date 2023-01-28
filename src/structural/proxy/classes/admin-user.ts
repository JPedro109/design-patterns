import { AddressProtocol, SystemUserProtocol } from "../protocols/system-user-protocol";

export class AdminUser implements SystemUserProtocol {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    async getAddresses(): Promise<AddressProtocol[]> {
        return new Promise((resolve) => {
          return setTimeout(() => {
            return resolve([
              { street: 'Av. Brasil', number: 50 },
              { street: 'Rua A.', number: 40 },
            ]);
          }, 2000);
        });
      }
    
}