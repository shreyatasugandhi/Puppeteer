const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Get a DevTools trace with screenshots
    await page.tracing.start({ path: 'profile.json', screenshots: true });// Drag and drop this JSON file to the DevTools Performance panel!
    await page.goto('https://blazedemo.com/');
    await page.tracing.stop();

    await page.waitForSelector('title');

    // Executes Navigation API within the page context
    const metrics = await page.evaluate(() => JSON.stringify(window.performance));

    // Parses the result to JSON
    console.info(JSON.parse(metrics));

    //Get Runtime performance metrics
        const metrics1 = await page.metrics();
        console.info(metrics1);

    await browser.close();
})();