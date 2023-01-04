import { GetId } from "./GetId";
import { GetSalaryPerHour } from "./GetSalaryPerHour";
import { GetTotalSalary } from "./GetTotalSalary";

export class Facade {
    execute() {
        const getId = new GetId();
        const getSalaryPerHour = new GetSalaryPerHour(getId);
        const getTotalSalary = new GetTotalSalary(getSalaryPerHour);
        return getTotalSalary.getTotalSalary();
    }
}