import { test as base } from "./BaseFixture";
import { Page} from '@playwright/test';
import { LoginPage } from "../pages/loginPage";
import { Config } from "../config/config";

type LoginFixture = {
    LoggedInPage: Page; 
    loginPage: LoginPage;
};

export const test = base.extend<LoginFixture>({
    LoggedInPage: async ({ page, loginPage }, use) => {
        await page.goto('/');
        await loginPage.login(Config.STANDARD_USER, Config.PASSWORD);
        await loginPage.verifyLoginSuccess();
        await use(page);
    }
});
export { expect } from "@playwright/test";