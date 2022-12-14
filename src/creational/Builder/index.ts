import { BuilderHouse } from "./classes/BuilderHouse";

const builder = new BuilderHouse();

const houseOne = builder
    .addBathroom()
    .addDoor()
    .addDoor()
    .addKitchen()
    .addRoom()
    .addRoom()
    .addLivingRoom()
    .addLivingRoom()
    .addWindow()
    .addWindow()
    .builder();

builder.reset();

const houseTwo = builder
    .addBathroom()
    .addDoor()
    .addKitchen()
    .addRoom()
    .addWindow()
    .addLivingRoom()
    .addWindow()
    .builder();

console.log(houseOne);
console.log(houseTwo);