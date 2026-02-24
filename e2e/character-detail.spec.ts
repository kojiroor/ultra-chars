import { test, expect } from '@playwright/test';

test.describe('キャラクター詳細ページ', () => {
  test('ページが正常に表示される', async ({ page }) => {
    await page.goto('/characters/ultraman');
    await expect(page.locator('h1, h2')).toBeVisible();
  });

  test('キャラクター情報が表示される', async ({ page }) => {
    await page.goto('/characters/ultraman');
    // 名前、身長、体重などの情報
    await expect(page.locator('[data-testid="character-name"]')).toBeVisible();
    await expect(page.locator('[data-testid="character-image"]')).toBeVisible();
  });

  test('一覧に戻るで一覧ページに戻れる', async ({ page }) => {
    await page.goto('/characters/ultraman');
    await page.getByRole('link', { name: /一覧に戻る/ }).click();
    await expect(page).toHaveURL('/characters');
  });
});
