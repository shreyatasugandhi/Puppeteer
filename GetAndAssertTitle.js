const puppeteer = require('puppeteer');
const expect = require('chai').expect;


(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await page.goto('https://blazedemo.com');
    
    // Wait until the `title` is rendered
    await page.waitForSelector('title');
    
    const title = await page.title();
    console.info(`The title is: ${title}`);
    

    //assert title
   expect(title).to.be.a("string", " BlazeDemo")
    
    
    
    //close the browser
    await browser.close();

})();