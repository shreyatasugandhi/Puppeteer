const puppeteer = require('puppeteer');

(async () => {

    //Open browser
    const browser = await puppeteer.launch({headless: false});

    //open new page
    const page = await browser.newPage();

    //navigate to the url
    await page.goto('https://blazedemo.com');

    // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });

  console.log('Dimensions:', dimensions);


    //close the browser
    await browser.close();

})();