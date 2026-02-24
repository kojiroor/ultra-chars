import { test, expect } from '@playwright/test';

test.describe('Character list page', () => {
  test('displays character cards', async ({ page }) => {
    await page.goto('/characters');
    await expect(page.locator('text=ウルトラマン')).toBeVisible();
  });

  test('navigates to detail on card click', async ({ page }) => {
    await page.goto('/characters');
    await page.click('text=ウルトラマン');
    await expect(page).toHaveURL(/\/characters\/ultraman/);
  });
});
