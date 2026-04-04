const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://animated-axolotl-c09c9b.netlify.app', { waitUntil: 'networkidle' });
  const formText = await page.locator('form').innerText();
  console.log('e-learning form text:\n', formText);
  let html = await page.locator('form').evaluate(el => el.innerHTML);
  console.log('e-learning form html:\n', html);
  
  await browser.close();
})();
