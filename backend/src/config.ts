import { DataSource } from "typeorm";
import { Contry } from "./entities/contry";

export const dataSources = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    entities: [Contry],
    synchronize: true,
    logging: ["query", "error"],
});