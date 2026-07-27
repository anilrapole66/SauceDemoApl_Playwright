import { APIRequestContext } from "@playwright/test";
import {Config} from "../config/config";

export class UserApi {

    constructor(private request: APIRequestContext) {}

    async getUser(id: number) {

        return await this.request.get(

            `${Config.API_BASE_URL}/users/${id}`

        );

    }

}