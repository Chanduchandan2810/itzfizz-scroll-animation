const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  
  const getBtnText = async () => page.evaluate(() => document.getElementById('btn-text').textContent);
  const getScrollY = async () => page.evaluate(() => window.scrollY);

  console.log("Initial state:");
  console.log("Button text:", await getBtnText());
  console.log("Scroll Y:", await getScrollY());

  console.log("\nClicking CELEBRATE button...");
  await page.click('#stage-toggle-btn');
  
  // Wait for 3 seconds for the scroll animation (duration 2.5s) to finish
  await new Promise(r => setTimeout(r, 3000));

  console.log("After click (should be at end):");
  console.log("Button text:", await getBtnText());
  console.log("Scroll Y:", await getScrollY());

  console.log("\nClicking RESET button...");
  await page.click('#stage-toggle-btn');
  
  // Wait for 3 seconds for the scroll animation to finish
  await new Promise(r => setTimeout(r, 3000));

  console.log("After reset click (should be at start):");
  console.log("Button text:", await getBtnText());
  console.log("Scroll Y:", await getScrollY());

  await browser.close();
})();
