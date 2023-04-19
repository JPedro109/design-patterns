import { House } from "../classes/house";

export interface BuilderHouseProtocol {
    addDoor(): BuilderHouseProtocol;
    addWindow(): BuilderHouseProtocol;
    addKitchen(): BuilderHouseProtocol;
    addRoom(): BuilderHouseProtocol;
    addLivingRoom(): BuilderHouseProtocol;
    addBathroom(): BuilderHouseProtocol;
    builder(): House;
    reset(): BuilderHouseProtocol;
}