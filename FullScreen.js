const puppeteer = require('puppeteer');

const url = process.env.URL || 'https://blazedemo.com/';

(async() => {

const browser = await puppeteer.launch({
  headless: false,
  args: [
    '--disable-infobars', // Removes the butter bar.
    '--start-maximized',
    // '--start-fullscreen',
    // '--window-size=1920,1080',
    // '--kiosk',
  ],
});

const page = await browser.newPage();
await page.setViewport({width: 1920, height: 1080});
await page.goto(url);
await page.evaluate('document.documentElement.webkitRequestFullscreen()');
await page.waitFor(3000);

await browser.close();
})();