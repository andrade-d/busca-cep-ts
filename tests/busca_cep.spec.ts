import { test, expect } from '@playwright/test';

test('busca_cep', async ({ page }) => {
  await page.goto('https://buscacepinter.correios.com.br/app/endereco/index.php');
  await page.getByPlaceholder('Não utilize nº de casa/apto/').click();
  await page.getByPlaceholder('Não utilize nº de casa/apto/').fill('80700000');
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await page.getByText('Preencha o campo Captcha! (').click();
  await page.getByRole('button', { name: 'Buscar' }).click();
  await expect(page.getByText('Preencha o campo Captcha! (')).toBeVisible();
  await page.close(); 
});

