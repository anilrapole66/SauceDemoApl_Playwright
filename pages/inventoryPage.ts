import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class InventoryPage extends BasePage {
  readonly addToCart: Locator;
  readonly shoppingCartLink: Locator;
  readonly selectSorting: Locator;
  readonly selectAscending: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    super(page);
    this.addToCart = this.page.locator('[data-test="add-to-cart"]');
    this.shoppingCartLink = this.page.locator(
      '[data-test="shopping-cart-link"]',
    );
    this.selectSorting = this.page.getByText("Name (A to Z)Name (A to Z)");
    this.selectAscending = this.page.locator(
      '[data-test="product-sort-container"]',
    );
    this.productPrices = this.page.locator(".inventory_item_price");
  }

  async selectProduct(productTestId: string) {
    // productTestId should be like 'item-4'
    await this.page
      .locator(`[data-test="${productTestId}-title-link"]`)
      .click();
  }

  async addProduct() {
    await this.addToCart.click();
  }
  async goToShoppingCart() {
    await this.shoppingCartLink.click();
  }
  async SortLowToHigh() {
    await this.selectSorting.click();
    await this.selectAscending.selectOption("lohi");
  }
  async getProductPrices(): Promise<number[]> {
    const prices = await this.productPrices.allTextContents();

    return prices.map(price =>
      Number(price.replace("$", "").trim())
    );
  }
  
}
