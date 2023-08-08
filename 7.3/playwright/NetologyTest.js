const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 2000,
    //devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");
  await page.click(':nth-match([data-testid="header-navigatorBtn"], 3)');
  await page.pause();

  //assertion
  await browser.close();
})();
