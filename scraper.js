const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false
        });
    const page = await browser.newPage();
    await page.goto('https://signin.blackbaud.com/', { waitUntil: 'networkidle0'})
    await page.type('#sign-in-email', CREDS.email); //CREDS will be set with environment variables instead of hard-coding
    await page.type('#sign-in-password', CREDS.password);
    await Promise.all([
        page.click('.sign-in-button'),
        page.waitForNavigation({ waitUntil: 'networkidle0' }),
      ]);
    // await browser.close();
})();
