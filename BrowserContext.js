const puppeteer =  require('puppeteer');

(async () => {
    // Launch a clean browser
    const browser = await puppeteer.launch({ devtools: true });
    const page = await browser.newPage();

    // define context
    const context = browser.defaultBrowserContext();

    // set permission
    context.overridePermissions('https://blazedemo.com/', ['clipboard-read']);
    // do stuff ..

    //cleare set permission
    context.clearPermissionOverrides();
   
    // Create a new incognito browser instance
    const incontext = await browser.createIncognitoBrowserContext();

    // Create a new page inside context.
    const inpage = await incontext.newPage();
    // navigate to the url
    await inpage.goto('https://example.com');
    
    // open new tab
    await page.evaluate(() => window.open('https://blazedemo.com/'));

    //finding a target for a page opened via window.open.  This searches for a target in all browser contexts.
    const newWindowTarget = await browser.waitForTarget(target => target.url() === 'https://blazedemo.com/');

    //open tab
    await page.evaluate(() => window.open('https://www.example.com/'));
    
    //Search for a target in this specific browser context. 
    const newWindowTarget = await context.waitForTarget(target => target.url() === 'https://www.example.com/');
    const newWindowTarget = await incontext.waitForTarget(target => target.url() === 'https://www.example.com/');


  })();