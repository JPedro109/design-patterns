import { GetIdProtocol } from "../protocol/get-id-protocol";
import { GetSalaryPerHourProtocol } from "../protocol/get-salary-per-hour-protocol";

export class GetSalaryPerHour implements GetSalaryPerHourProtocol {

    constructor(
        private getId: GetIdProtocol
    ) {}
    
    getSalaryPerHour(): number {
        if(this.getId.getId() === "1") return 30;
    };
}