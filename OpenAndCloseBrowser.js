const puppeteer = require('puppeteer');

(async () => {

    //Open browser
    const browser = await puppeteer.launch();   

    //open browser in headful mode
    //const browser = await puppeteer.launch({headless: false});

    //opning browser with devTool
    //const browser = await puppeteer.launch({devtools: true, timeout: 2000});

    console.log("Browser launched");
    console.info(browser);

    
    //close the browser
    await browser.close();

})();