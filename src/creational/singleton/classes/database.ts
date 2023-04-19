import { User } from "../types";

export class Database {
    private static instance?: Database;
    private users: User[] = [];
    
    private constructor() {}

    public static getInstance(): Database {
        if(Database.instance === null) return Database.instance;

        return Database.instance = new Database(); 
    } 

    public add (user: User): void {
        this.users.push(user);
    }

    public remove (index: number): void {
        this.users.splice(index, 1);
    }

    public show(): void {
        console.log(this.users)
    }
}