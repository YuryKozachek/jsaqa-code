let page;

describe("Github Marketplace imgbot page test", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/marketplace/imgbot");
  });

  afterEach(() => {
    page.close();
  });

  test("The header content text", async () => {
    const textImgbot = ".f00-light.lh-condensed.mb-3";
    const actual = await page.$eval(textImgbot, link => link.textContent);
    expect(actual).toContain("Imgbot");
  });

  test("The button content text", async () => {
    const textBtn = ".btn.btn-primary.px-6.py-2.mb-2";
    const actual = await page.$eval(textBtn, link => link.textContent);
    expect(actual).toContain("Set up a free trial");
  });

});

describe("Github Marketplace page test", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/marketplace");
  });

  afterEach(() => {
    page.close();
  });

  test("The header content text", async () => {
    const textH1 = ".h1.mb-2.lh-condensed-ultra";
    const actual = await page.$eval(textH1, link => link.textContent);
    expect(actual).toContain("Extend GitHub");
  });

  test("The button content text", async () => {
    const textBtn = ".btn.btn-large.mr-2";
    const actual = await page.$eval(textBtn, link => link.textContent);
    expect(actual).toContain("Explore free apps");
  });

});

describe("Github page tests", () => {

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });
  
  afterEach(() => {
    page.close();
  });

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub: Let’s build from here · GitHub');
  }, 11000 );

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  });

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  });
  
});
