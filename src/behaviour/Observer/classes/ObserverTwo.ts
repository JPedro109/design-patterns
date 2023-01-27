import { IObserver } from "../interfaces/IObserver";
import { Observable } from "./Observable";

export class ObserverTwo implements IObserver {
    update(observable: Observable): void {
        if (observable instanceof Observable && observable.number >= 5 && observable.number <= 10) {
            console.log("O estado está variando entre 5 e 10")
        }
    }
}