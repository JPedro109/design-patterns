import { IAddress, ISystemUser } from "../interfaces/ISystemUser";

export class AdminUser implements ISystemUser {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    async getAddresses(): Promise<IAddress[]> {
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