const logIn = async (page, username, password) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('#userName', username);
    await page.fill('#password', password);
    await page.click('button[id="login"]');
    
};

module.exports = { logIn };
