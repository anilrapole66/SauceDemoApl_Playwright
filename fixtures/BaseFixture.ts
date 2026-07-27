import {test as base} from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { CartPage } from '../pages/cartPage';
import { InventoryPage } from '../pages/inventoryPage';

type MyFixtures = {
    loginPage: LoginPage;
    cartPage: CartPage;
    inventoryPage: InventoryPage;
  };
export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    inventoryPage: async ({ page }, use) => {
        await use(new InventoryPage(page));
    },
}); 
    