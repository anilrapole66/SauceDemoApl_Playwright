import { Page, Locator,expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
    readonly checkoutButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;

    constructor(page: Page) {
        super(page);
        this.checkoutButton = this.page.locator('[data-test="checkout"]');
        this.firstName = this.page.locator('[data-test="firstName"]');
        this.lastName = this.page.locator('[data-test="lastName"]');
        this.postalCode = this.page.locator('[data-test="postalCode"]');
        this.continueButton = this.page.locator('[data-test="continue"]');
        this.finishButton = this.page.locator('[data-test="finish"]');
    }
     
    async checkout(firstname: string, lastname: string, postalcode: string) {
        await this.checkoutButton.click();
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode);
        await this.continueButton.click();
        await this.finishButton.click();
    }

    async orderConformation() {
        return await this.page.locator('.complete-header').textContent();
    }
}