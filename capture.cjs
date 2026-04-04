const { chromium } = require('playwright');

const projects = [
  { id: 'e-learning', url: 'https://animated-axolotl-c09c9b.netlify.app' },
  { id: 'pharma-stock', url: 'https://legendary-axolotl-5cb8bd.netlify.app' },
  { id: 'parallax', url: 'https://bejewelled-pegasus-71734b.netlify.app' },
  { id: 'digital-comic', url: 'https://clinquant-tanuki-92426b.netlify.app' },
  { id: 'qna', url: 'https://earnest-frangipane-577bab.netlify.app' }
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });

  for (const { id, url } of projects) {
    console.log(`Processing ${id}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.waitForTimeout(2000);
      
      // Screenshot 1 (Top / Same as original)
      await page.screenshot({ path: `public/projects/${id}-1.png` });

      // Screenshot 2
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `public/projects/${id}-2.png` });

      // Screenshot 3
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `public/projects/${id}-3.png` });

      // Screenshot 4
      await page.evaluate(() => window.scrollBy(0, window.innerHeight));
      await page.waitForTimeout(1000);
      await page.screenshot({ path: `public/projects/${id}-4.png` });
      
    } catch (e) {
      console.log(`Error on ${id}: ${e.message}`);
    }
  }

  await browser.close();
  console.log("Done!");
})();
