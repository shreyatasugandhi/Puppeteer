const puppeteer = require('puppeteer');

(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false});

    //open new page
    const page = await browser.newPage();

    //navigate to the url
    await page.goto('https://blazedemo.com/login');
    
    //wait for selector
    await page.waitForSelector("#email")

    //type userid
    await page.type("#email", "goldentouch.shreyata@gmail.com")


    // press tab key from keyborad to move to the cursor to password box
    await page.keyboard.press('Tab')

    await page.waitFor(3000)

    // press Enter key to submit the form
    await page.keyboard.press('Enter', {delay: 50})

    await page.type("#password", "123455");
    
    await page.keyboard.down()
    

    //await page.keyboard.press('Tab')
    //await page.keyboard.press('Space')

    //await page.keyboard.press('Space')

    await page.waitFor(3000)

    //close the browser
    await browser.close();

})();