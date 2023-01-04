import { IGetSalaryPerHour } from "../interfaces/IGetSalaryPerHour";
import { IGetTotalSalary } from "../interfaces/IGetTotalSalary";

export class GetTotalSalary implements IGetTotalSalary {

    constructor(
        private getSalaryPerHour: IGetSalaryPerHour
    ){}

    getTotalSalary(): number {
        return this.getSalaryPerHour.getSalaryPerHour() * 160;
    }
    
}