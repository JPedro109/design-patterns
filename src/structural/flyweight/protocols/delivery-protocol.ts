export interface DeliveryProtocol {
    delivery(name: string, number: string): void;
}