import { ObserverProtocol } from "./observer-protocol";

export interface ObservableProtocol {
    subscribe(...observers: ObserverProtocol[]): void;
    unsubscribe(observer: ObserverProtocol): void;
    notify(): void;
}