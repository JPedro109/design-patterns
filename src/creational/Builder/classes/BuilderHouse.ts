import { IBuilderHouse } from "../interfaces/IBuilderHouse";
import { House } from "./House";

export class BuilderHouse implements IBuilderHouse {

    private house: House = new House();

    addDoor(): IBuilderHouse {
        this.house.door = this.house.door !== undefined ? this.house.door + 1 : 1;
        return this;
    }

    addWindow(): IBuilderHouse {
        this.house.window = this.house.window !== undefined ? this.house.window + 1 : 1;
        return this;
    }

    addKitchen(): IBuilderHouse {
        this.house.kitchen = this.house.kitchen !== undefined ? this.house.kitchen + 1 : 1;
        return this;
    }

    addRoom(): IBuilderHouse {
        this.house.room = this.house.room !== undefined ? this.house.room + 1 : 1;
        return this;
    }

    addLivingRoom(): IBuilderHouse {
        this.house.livingRoom = this.house.livingRoom !== undefined ? this.house.livingRoom + 1 : 1;
        return this;
    }

    addBathroom(): IBuilderHouse {
        this.house.bathroom = this.house.bathroom !== undefined ? this.house.bathroom + 1 : 1;
        return this;
    }

    builder(): House {
        return this.house;
    }

    reset(): IBuilderHouse {
        this.house = new House();
        return this;
    }
}