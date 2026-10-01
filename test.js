const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));
  
  const extract = () => {
    const getBounds = (el) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { top: r.top, left: r.left, width: r.width, height: r.height };
    };
    // The hero is now sticky, so we query the main container and the sticky inner
    const container = document.querySelector('.h-\\[500vh\\]');
    const hero = document.querySelector('.sticky');
    const header = document.querySelector('#site-header');
    
    return { 
      container: getBounds(container),
      hero: getBounds(hero),
      header: getBounds(header),
      scrollY: window.scrollY
    };
  };

  console.log("Initial state:");
  console.log(await page.evaluate(extract));

  console.log("\nScrolling 10px...");
  await page.evaluate(() => window.scrollTo(0, 10));
  await new Promise(r => setTimeout(r, 100));
  console.log(await page.evaluate(extract));
  
  console.log("\nScrolling 50px...");
  await page.evaluate(() => window.scrollTo(0, 50));
  await new Promise(r => setTimeout(r, 100));
  console.log(await page.evaluate(extract));

  console.log("\nScrolling to 3000px...");
  await page.evaluate(() => window.scrollTo(0, 3000));
  await new Promise(r => setTimeout(r, 100));
  console.log(await page.evaluate(extract));

  console.log("\nScrolling to very end (4000px)...");
  await page.evaluate(() => window.scrollTo(0, 4000));
  await new Promise(r => setTimeout(r, 100));
  console.log(await page.evaluate(extract));

  await browser.close();
})();
