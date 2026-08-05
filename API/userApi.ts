import { APIRequestContext } from "@playwright/test";
import {Config} from "../config/config";

export class UserApi {

    constructor(private request: APIRequestContext) {}

    async getUser(id: number) {

        const base = Config.API_BASE_URL ? Config.API_BASE_URL.replace(/\/+$/g, "") : "";
        const endpoint = `/users/${id}`;
        const url = base ? `${base}${endpoint}` : endpoint;

        return await this.request.get(url);

    }

}