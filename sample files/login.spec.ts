import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import * as credentials from '../test_data/credentials.json';

const admin = credentials.admin;
const user = credentials.user;

test('login test', async ({page}) => {
    const loginPage = new LoginPage(page);
    //Arrange
    await page.goto('/');

    //Act
    await loginPage.login(admin.username, admin.password);
    
    //Assert
    await expect(await page.locator('.inventory_list').isVisible()).toBeTruthy();
})