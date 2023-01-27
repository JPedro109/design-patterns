export interface IObserver {
    update(...args: unknown[]): void;
}