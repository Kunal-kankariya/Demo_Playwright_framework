import { Page } from "@playwright/test";

export const logIn = async (page:Page, username:string, password:string) => {
    await page.goto('/login');
    await page.fill('#userName', username);
    await page.fill('#password', password);
    await page.click('button[id="login"]');
};

