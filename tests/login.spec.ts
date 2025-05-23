import {test, expect} from '@playwright/test';
import { logIn } from '../utils/common';
import {testData} from '../utils/testData';

test('valid login', async ({ page }) => {
   const { validUser } = testData.credentials;
   await logIn(page, validUser.username, validUser.password);
   await expect(page).toHaveURL('/profile');
});

test('invalid login', async ({ page }) => {
   const { invalidUser } = testData.credentials;
   await logIn(page, invalidUser.username, invalidUser.password);
   await expect(page.locator('#name')).toHaveText('Invalid username or password!');
});
