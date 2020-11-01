const puppeteer = require('puppeteer');

(async () => {

    //Open browser
    const browser = await puppeteer.launch();

    //open new page
    const page = await browser.newPage();

    //navigate to the url
    await page.goto('https://blazedemo.com');

    // Takes a screenshot of the whole viewport
    await page.screenshot({ path: 'screenshot.png' });
    
    /* 
    // Take a screenshot with coustom viewport
     await page.setViewport({
        width: 640,
        height: 480,
        deviceScaleFactor: 1,
      });

    await page.screenshot({ path: 'screenshot_cusom.png' });
 */



    //close the browser
    await browser.close();

})();