import { test, expect } from '@playwright/test';

test.describe('キャラクター一覧ページ', () => {
  test('ページが正常に表示される', async ({ page }) => {
    await page.goto('/characters');
    await expect(page.locator('h1, h2')).toContainText('キャラクター一覧');
  });

  test('キャラクターカードが表示される', async ({ page }) => {
    await page.goto('/characters');
    // 最低1つのキャラクターカードが表示される
    const cards = page.locator('[data-testid="character-card"]');
    await expect(cards.first()).toBeVisible();
  });

  test('ページネーションが表示される', async ({ page }) => {
    await page.goto('/characters');
    const pagination = page.locator('[data-testid="pagination"]');
    await expect(pagination).toBeVisible();
  });

  test('キャラクターカードクリックで詳細ページに遷移する', async ({ page }) => {
    await page.goto('/characters');
    const firstCard = page.locator('[data-testid="character-card"]').first();
    await firstCard.click();
    await expect(page).toHaveURL(/\/characters\/.+/);
  });
});
