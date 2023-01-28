import { IObserver } from "./observer-protocol";

export interface ObservableProtocol {
    subscribe(...observers: IObserver[]): void;
    unsubscribe(observer: IObserver): void;
    notify(): void;
}