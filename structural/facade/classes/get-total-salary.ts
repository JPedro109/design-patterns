import { GetSalaryPerHourProtocol } from "../protocol/get-salary-per-hour-protocol";
import { GetTotalSalaryProtocol } from "../protocol/get-total-salary-protocol";

export class GetTotalSalary implements GetTotalSalaryProtocol {

    constructor(
        private getSalaryPerHour: GetSalaryPerHourProtocol
    ){}

    getTotalSalary(): number {
        return this.getSalaryPerHour.getSalaryPerHour() * 160;
    }
    
}