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
    
   //assert url includes/contains text
   const url = await page.url()
   expect(url).to.include("blazedemo")

   //assert text using contains
   var text = await page.$eval("h1", element=> element.textContent)
    expect(text).to.contains("Welcome")

    //Assert using equal
     await page.click("input[value='Find Flights']"); //Click on Fid filights button
     await page.waitFor(1000);
     const numberOfButtons = await page.$$eval('input[value="Choose This Flight"]', element => element.length);
     expect(numberOfButtons).to.equal(5)
    
    
    //close the browser
    await browser.close();

})();