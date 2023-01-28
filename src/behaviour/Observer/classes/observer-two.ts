import { ObserverProtocol } from "../protocols/observer-protocol";
import { Observable } from "./observable";

export class ObserverTwo implements ObserverProtocol {
    update(observable: Observable): void {
        if (observable instanceof Observable && observable.number >= 5 && observable.number <= 10) {
            console.log("O estado está variando entre 5 e 10")
        }
    }
}