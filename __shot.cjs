const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  for (const width of [768, 1024, 1440, 1920]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle' });
    const el = await page.getByText('90 zł miesięcznie').first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
    await page.screenshot({ path: `/private/tmp/claude-501/-Users-jakub-russak-Downloads-plz-redesign/0cbd90a1-af1f-4544-87f6-fed4f5a11ea3/scratchpad/pricingcta-pad-${width}.png` });
    console.log(width, 'scrollWidth', scrollWidth, 'clientWidth', clientWidth);
    await page.close();
  }
  await browser.close();
})();
