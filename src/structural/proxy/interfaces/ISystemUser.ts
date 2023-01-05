export type IAddress = { 
    street: string;
    number: number;
}

export interface ISystemUser {
    username: string;
    password: string;

    getAddresses(): Promise<IAddress[]>;
}