import {test,expect} from '../fixtures/LoginFixture';
import * as users from "../test_data/users.json";

const user = users.user;

test("checkout flow", async ({ LoggedInPage, inventoryPage, cartPage }) => {
  await inventoryPage.selectProduct("item-4");
  await inventoryPage.addProduct();
  await inventoryPage.goToShoppingCart();
  await cartPage.checkout(user.firstname, user.lastname, user.postalcode);
  await expect(await cartPage.orderConformation()).toBe(
    "Thank you for your order!",
  );
});
