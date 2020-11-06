const puppeteer = require('puppeteer');

(async () => {

  const browser = await puppeteer.launch({ devtools: true, slowMo: 1000 });
  
  // Browser operations
  const page = await browser.newPage();
  await page.goto('https://blazedemo.com');
  
  // Wait until the `title` is rendered
  await page.waitForSelector('title');
    
  const title = await page.title();
  console.info(`The title is: ${title}`);


    //Select departure by using value of the option
    await page.select("select[name='fromPort']", "Philadelphia");

    //Select Destination by using text on the list
    const selectElem = await page.$("select[name='toPort']", "Rome");
    await selectElem.type('Rome');
    
    //Checking if the option is selected correctly?
    await page.evaluate(() => {
        document.querySelector(`select [value="Rome"]`).selected = true;
      });


  await browser.close();
})();