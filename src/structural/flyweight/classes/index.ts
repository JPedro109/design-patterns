import { DeliveryFactory } from "./DeliveryFactory";

export const deliveryContext = (
  factory: DeliveryFactory,
  name: string,
  number: string,
  street: string,
  city: string,
): void => {
  const location = factory.makeLocation({ street, city });
  location.delivery(name, number);
};