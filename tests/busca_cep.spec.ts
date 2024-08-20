import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  try {
    await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php');
    await page.getByRole('heading', { name: 'Busca CEP' }).click();
    await page.getByPlaceholder('Não utilize nº de casa/apto/').click();
    await page.getByPlaceholder('Não utilize nº de casa/apto/').fill('80700000');
    await page.getByRole('button', { name: 'Buscar' }).click();
    await page.getByText('Preencha o campo Captcha! (').click();
  } catch (error) {
    console.error('An error occurred:', error);
  } finally {
    await page.close();
  }
});