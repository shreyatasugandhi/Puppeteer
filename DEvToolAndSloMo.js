const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({ devtools: true, slowMo: 200 });
  
  // Browser operations
  const page = await browser.newPage();
  await page.goto('https://blazedemo.com');
  
  // Wait until the `title` is rendered
  await page.waitForSelector('title');
  debugger;
  
  const title = await page.title();
  console.info(`The title is: ${title}`);

  await browser.close();
})();