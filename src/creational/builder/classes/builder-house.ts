import { BuilderHouseProtocol } from "../protocols/builder-house-protocol";
import { House } from "./house";

export class BuilderHouse implements BuilderHouseProtocol {

    private house: House = new House();

    addDoor(): BuilderHouseProtocol {
        this.house.door = this.house.door !== undefined ? this.house.door + 1 : 1;
        return this;
    }

    addWindow(): BuilderHouseProtocol {
        this.house.window = this.house.window !== undefined ? this.house.window + 1 : 1;
        return this;
    }

    addKitchen(): BuilderHouseProtocol {
        this.house.kitchen = this.house.kitchen !== undefined ? this.house.kitchen + 1 : 1;
        return this;
    }

    addRoom(): BuilderHouseProtocol {
        this.house.room = this.house.room !== undefined ? this.house.room + 1 : 1;
        return this;
    }

    addLivingRoom(): BuilderHouseProtocol {
        this.house.livingRoom = this.house.livingRoom !== undefined ? this.house.livingRoom + 1 : 1;
        return this;
    }

    addBathroom(): BuilderHouseProtocol {
        this.house.bathroom = this.house.bathroom !== undefined ? this.house.bathroom + 1 : 1;
        return this;
    }

    builder(): House {
        return this.house;
    }

    reset(): BuilderHouseProtocol {
        this.house = new House();
        return this;
    }
}