export type AddressProtocol = { 
    street: string;
    number: number;
}

export interface SystemUserProtocol {
    username: string;
    password: string;

    getAddresses(): Promise<AddressProtocol[]>;
}