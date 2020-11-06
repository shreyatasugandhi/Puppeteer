const puppeteer =  require('puppeteer');

(async () => {
    // Launch a clean browser
    const browser = await puppeteer.launch({ devtools: true });
    const page = await browser.newPage();

    // grant permission for changing geolocation
    const context = browser.defaultBrowserContext()
    await context.overridePermissions("https://chercher.tech/practice/geo-location", ['geolocation'])

    //set the location
    await page.setGeolocation({latitude:90, longitude:20})
    
    //open url
    await page.goto("https://chercher.tech/practice/geo-location");

    //await browser.close();

  })();