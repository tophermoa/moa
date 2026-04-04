const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({ headless: true });
  
  // ============================
  // e-Learning LMS Web Screenshot
  // ============================
  console.log("Processing e-Learning login...");
  const page1 = await browser.newPage();
  await page1.setViewportSize({ width: 1280, height: 720 });
  await page1.goto('https://animated-axolotl-c09c9b.netlify.app', { waitUntil: 'networkidle' });
  
  // Fill credentials (any random credential)
  await page1.fill('#id-username-login', 'admin');
  await page1.fill('#id-password-login', 'password123');
  
  // Solve captcha
  const num1 = parseInt(await page1.innerText('#id-captcha-num1-login'), 10);
  const num2 = parseInt(await page1.innerText('#id-captcha-num2-login'), 10);
  await page1.fill('#id-captcha-your-answer-login', (num1 + num2).toString());
  
  // Click login
  await page1.click('button[name="btn-login"]');
  console.log("Logged in to e-Learning. Waiting for dashboard...");
  
  // Wait for navigation / dashboard load
  await page1.waitForTimeout(4000); 
  await page1.screenshot({ path: `public/projects/e-learning-1.png` });

  // Scroll down a bit
  await page1.evaluate(() => window.scrollBy(0, 300));
  await page1.waitForTimeout(1000);
  await page1.screenshot({ path: `public/projects/e-learning-2.png` });

  // Go to My Course or Dashboard navigation
  try {
    const locators = await page1.locator(':text("Course")').all();
    if(locators.length > 0) {
       await locators[locators.length - 1].click();
    }
  } catch(e) { console.log(e.message); }
  await page1.waitForTimeout(3000);
  await page1.screenshot({ path: `public/projects/e-learning-3.png` });

  // Scroll
  await page1.evaluate(() => window.scrollBy(0, 400));
  await page1.waitForTimeout(1000);
  await page1.screenshot({ path: `public/projects/e-learning-4.png` });
  
  await page1.close();

  // ============================
  // PharmaStock Screenshot
  // ============================
  console.log("Processing PharmaStock login...");
  const page2 = await browser.newPage();
  await page2.setViewportSize({ width: 1280, height: 720 });
  await page2.goto('https://legendary-axolotl-5cb8bd.netlify.app', { waitUntil: 'networkidle' });
  
  // Fill credentials
  await page2.fill('input[type="text"]', 'admin@pharmastock.com');
  await page2.fill('input[type="password"]', 'admin123');
  
  // Click login (Pharmastock uses a generic submit button)
  await page2.click('button[type="submit"]');
  console.log("Logged in to PharmaStock. Waiting for dashboard...");
  
  await page2.waitForTimeout(4000);
  await page2.screenshot({ path: `public/projects/pharma-stock-1.png` });

  // Scroll dashboard
  await page2.evaluate(() => window.scrollBy(0, 400));
  await page2.waitForTimeout(1000);
  await page2.screenshot({ path: `public/projects/pharma-stock-2.png` });

  // Click on "Inventory" from sidebar
  try {
    await page2.click(':text("Inventory")');
  } catch(e) { console.log(e.message); }
  await page2.waitForTimeout(3000);
  await page2.screenshot({ path: `public/projects/pharma-stock-3.png` });

  // Click on "Suppliers"
  try {
    await page2.click(':text("Suppliers")');
  } catch(e) { console.log(e.message); }
  await page2.waitForTimeout(3000);
  await page2.screenshot({ path: `public/projects/pharma-stock-4.png` });

  await page2.close();
  
  await browser.close();
  console.log("Done overwriting e-Learning and PharmaStock screenshots!");
})();
