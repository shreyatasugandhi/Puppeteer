const puppeteer = require('puppeteer');

(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false});

    //open new page
    const page = await browser.newPage();

    //navigate to the url
    await page.goto('https://blazedemo.com');
    
    //Close page
    await page.close()

    //close the browser
    await browser.close();

})();