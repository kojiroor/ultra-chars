import { test, expect } from '@playwright/test';

test.describe('TOPページ', () => {
  test('ページが正常に表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('ULTRA CHARACTER VIEWER');
  });

  test('キャラクター一覧へボタンが表示される', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: /キャラクター一覧/ })).toBeVisible();
  });

  test('ボタンクリックで一覧ページに遷移する', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /キャラクター一覧/ }).click();
    await expect(page).toHaveURL('/characters');
  });
});
