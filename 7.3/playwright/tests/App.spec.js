
const { test, expect } = require("@playwright/test");

const { validEmail, validPassword, invalidEmail, invalidPassword } = require("../user");

test('valid authorization', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).nth(1).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(validEmail);
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(validPassword);
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});

test('invalid authorization', async ({ page }) => {
  await page.goto('https://netology.ru/');
  await page.getByRole('link', { name: 'Войти' }).nth(1).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(invalidEmail  );
  await page.getByPlaceholder('Пароль').click();
  await page.getByPlaceholder('Пароль').fill(invalidPassword);
  await page.getByTestId('login-submit-btn').click();
  const locator = page.getByTestId('login-error-hint');
  await expect(locator).toContainText("Вы ввели неправильно логин или пароль");
});