import { IGetId } from "../interfaces/IGetId";
import { IGetSalaryPerHour } from "../interfaces/IGetSalaryPerHour";

export class GetSalaryPerHour implements IGetSalaryPerHour {

    constructor(
        private getId: IGetId
    ) {}
    
    getSalaryPerHour(): number {
        if(this.getId.getId() === "1") return 30;
    };
}