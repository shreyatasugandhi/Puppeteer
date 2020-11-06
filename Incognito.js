const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false});
  
    // A reference for the default browser context
    const defaultContext = browser.defaultBrowserContext();
    console.info(defaultContext.isIncognito()); // False

    // // Closes the browser with the default context
    // await browser.close();

    // Create a new incognito browser context.
    const context = await browser.createIncognitoBrowserContext();
    // Create a new page in a pristine context.
    const page = await context.newPage();
    console.info(newContext.isIncognito()); // True

    //   // Closes the created browser context
    //   await newContext.close();

})();