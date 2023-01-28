export interface ObserverProtocol {
    update(...args: unknown[]): void;
}