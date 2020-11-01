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
    await page.select("select[name='fromPort']", "Philadelphia");

    await page.waitFor(1000);

    //Select Destination by using text on the list
    const selectElem = await page.$("select[name='toPort']", "Rome");
    await selectElem.type('Rome');
    
    //Checking if the option is selected correctly?
    await page.evaluate(() => {
        document.querySelector(`select [value="Rome"]`).selected = true;
      });

      
    await page.waitFor(3000);
    
    //Click on Fid filights button
    await page.click("input[value='Find Flights']");

    await page.waitFor(3000);
    
    // clicking on an element with same text on it
    const elements = await page.$x('//input[@value="Choose This Flight"]');
    await elements[0].click();

    await page.waitFor("#inputName");
    
    // typeing text into textbox
    await page.type("#inputName", "Shreyata")

    //type with delay
    await page.type("#city", "Pune", {delay:500})

    //Checking checkbox
    await page.click("#rememberMe");

    await page.click("input[value='Purchase Flight']");
   
    await page.waitFor(1000);

    //Get text from page
    var text = await page.$eval("h1",
                element=> element.textContent)
    console.log(text);


    // navigate to home page
    await page.click("a[href='home']");
    await page.waitFor(1000);

    // get attribute of a link
    var linkClass = await page.$eval("a[href='https://blazedemo.com/password/reset']",
    element=> element.getAttribute("class"))
    console.log(`The class attribute of Forgot password link is : ${linkClass}`);


    // get attribute of a text box
    var passboxname = await page.$eval("#password", 
    element => element.getAttribute("name"))
    console.log(`Password box has name attribute as :  ${passboxname}`);


    //close the browser
    await browser.close();

})();