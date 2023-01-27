import { IObservable } from "../interfaces/IObservable";
import { IObserver } from "../interfaces/IObserver";

export class Observable implements IObservable {

    private observers: IObserver[] = [];

    public number: number = 0;

    subscribe(...observers: IObserver[]): void {
        observers.forEach((observer) => {
            if (!this.observers.includes(observer)) {
                this.observers.push(observer);
            }
        });
    }

    unsubscribe(observer: IObserver): void {
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