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

    //Select departure by using value of the option
    await page.select("select[name='fromPort']", "Paris");

    await page.waitFor(3000);

    //Select Destination by using text on the list
    const selectElem = await page.$("select[name='toPort']", "Rome");
    await selectElem.type('Rome');
    
    //Checking if the option is selected correctly?
    await page.evaluate(() => {
        document.querySelector(`select [value="Rome"]`).selected = true;
      });

    await page.waitFor(3000);
    
    //close the browser
    await browser.close();

})();