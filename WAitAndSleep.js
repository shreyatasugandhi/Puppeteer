const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ devtools: true });

  // Browser operations
  const page = await browser.newPage();
  await page.goto('https://blazedemo.com');
  
  // Wait until the `title` is rendered
  await page.waitForSelector('title');
  
  const title = await page.title();
  console.info(`The title is: ${title}`);

  // Option 1 - resolving a promise when `setTimeout` finishes
  const sleep = duration => new Promise(resolve => setTimeout(resolve, duration));
  await sleep(3000);

  // Option 2 - if we have a page instance, just using `waitFor`
  await page.waitFor(3000);

  // wait until explicitely terminated or performed action
  await browser.waitForTarget(() => false);


  await browser.close();
})();