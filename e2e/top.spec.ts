import { test, expect } from '@playwright/test';

test.describe('TOP page', () => {
  test('displays title', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('text=Ultra Character Viewer')).toBeVisible();
  });

  test('has link to character list', async ({ page }) => {
    await page.goto('/');
    const button = page.getByRole('link', { name: /キャラクター一覧/i });
    await expect(button).toBeVisible();
  });
});
