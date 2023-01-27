import { IObserver } from "../interfaces/IObserver";
import { Observable } from "./Observable";

export class ObserverOne implements IObserver {
    update(observable: Observable): void {
        if (observable instanceof Observable && observable.number >= 0 && observable.number <= 4) {
            console.log("O estado está variando entre 0 e 4")
        }
    }
}