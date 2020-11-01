const puppeteer = require('puppeteer');

(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://blazedemo.com');
    
    // Wait until the `title` is rendered
    await page.waitForSelector('title');
    
    const title = await page.title();
    console.info(`The title is: ${title}`);

    //Getting URL
    console.log("url is: " + page.url());

    await page.waitFor(3000);
    
    //Getting page source
    console.log("Page Source : " + await page.content());
    
    //Close page
    await page.close();


    //close the browser
    await browser.close();

})();