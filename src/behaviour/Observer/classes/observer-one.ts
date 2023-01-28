import { ObserverProtocol } from "../protocols/observer-protocol";
import { Observable } from "./observable";

export class ObserverOne implements ObserverProtocol {
    update(observable: Observable): void {
        if (observable instanceof Observable && observable.number >= 0 && observable.number <= 4) {
            console.log("O estado está variando entre 0 e 4")
        }
    }
}