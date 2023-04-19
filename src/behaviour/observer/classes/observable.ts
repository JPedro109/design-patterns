import { ObservableProtocol } from "../protocols/observable-protocol";
import { ObserverProtocol } from "../protocols/observer-protocol";

export class Observable implements ObservableProtocol {

    private observers: ObserverProtocol[] = [];

    public number: number = 0;

    subscribe(...observers: ObserverProtocol[]): void {
        observers.forEach((observer) => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }

    unsubscribe(observer: ObserverProtocol): void {
        const observerIndex = this.observers.indexOf(observer);

        if (observerIndex !== -1) this.observers.splice(observerIndex, 1);
    }

    notify(): void {
        this.observers.forEach((observer) => observer.update(this));
    }

    modifyState(): void {
        this.number++;
        this.notify();
    }
}