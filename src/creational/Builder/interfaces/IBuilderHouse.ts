import { House } from "../classes/House";

export interface IBuilderHouse {
    addDoor(): IBuilderHouse;
    addWindow(): IBuilderHouse;
    addKitchen(): IBuilderHouse;
    addRoom(): IBuilderHouse;
    addLivingRoom(): IBuilderHouse;
    addBathroom(): IBuilderHouse;
    builder(): House;
    reset(): IBuilderHouse;
}