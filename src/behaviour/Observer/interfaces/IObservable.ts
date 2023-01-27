import { IObserver } from "./IObserver";

export interface IObservable {
    subscribe(...observers: IObserver[]): void;
    unsubscribe(observer: IObserver): void;
    notify(): void;
}