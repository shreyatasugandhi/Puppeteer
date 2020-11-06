const puppeteer = require('puppeteer');

(async () => {

    //Open browser
    const browser = await puppeteer.launch({headless: false});

    //open new page
    const page = await browser.newPage();

    try {
         //navigate to the url
         await page.goto('https://blazedemo.com/demo', {timeout: 100});        
    } catch (error) {
        console.log("URL is not working")        
    }

    //close the browser
    await browser.close();

})();