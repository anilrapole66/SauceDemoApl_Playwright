import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export class Config {

    static readonly BASE_URL = process.env.BASE_URL!;

    static readonly USERNAME = process.env.USERNAME!;

    static readonly PASSWORD = process.env.PASSWORD!;

    static readonly API_BASE_URL = process.env.API_BASE_URL!;

}