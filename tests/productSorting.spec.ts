import {test, expect } from '../fixtures/LoginFixture';

test("product sorting", async ({ LoggedInPage, inventoryPage }) => {
  await inventoryPage.SortLowToHigh();
  
  const actualPrices = await inventoryPage.getProductPrices();

  const expectedPrices = [...actualPrices].sort((a, b) => a - b);

  expect(actualPrices).toEqual(expectedPrices);
  
});