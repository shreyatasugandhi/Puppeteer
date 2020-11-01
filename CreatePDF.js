const puppeteer = require('puppeteer');

(async () => {

    //Open browser
    const browser = await puppeteer.launch();

    //open new page
    const page = await browser.newPage();

    //navigate to the url and wait until
    await page.goto('https://blazedemo.com', {waitUntil: 'networkidle2'});

    await page.pdf({path: 'Page.pdf', format: 'A4'});

    //close the browser
    await browser.close();

})();