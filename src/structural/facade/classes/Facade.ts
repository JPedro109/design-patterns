import { GetId } from "./get-id";
import { GetSalaryPerHour } from "./get-salary-per-hour";
import { GetTotalSalary } from "./get-total-salary";

export class Facade {
    execute() {
        const getId = new GetId();
        const getSalaryPerHour = new GetSalaryPerHour(getId);
        const getTotalSalary = new GetTotalSalary(getSalaryPerHour);
        return getTotalSalary.getTotalSalary();
    }
}