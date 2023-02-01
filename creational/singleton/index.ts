import { Database } from "./classes/database";

const database = Database.getInstance();

database.add({ name: "João" });
database.add({ name: "Pedro" });
database.add({ name: "Moraes" });

database.show();

database.remove(2);

database.show();