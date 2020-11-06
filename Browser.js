const puppeteer = require('puppeteer');

(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://blazedemo.com');

    await page.waitFor(3000);    
        
    // navigate to home pagenpm
    await page.click("a[href='home']");
    await page.waitFor(3000);

    //page backword action
    await page.goBack();
    await page.waitFor(3000);

    //page forward action
    await page.goForward();
    await page.waitFor(3000);

    //page reload action
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.waitFor(3000);
    

    //close the browser
    await browser.close();

})();