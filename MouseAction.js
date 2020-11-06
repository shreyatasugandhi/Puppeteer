const puppeteer = require('puppeteer');

(async () => {

    //open browser in headful mode
    const browser = await puppeteer.launch({headless: false, args: ['--start-maximized']});

    //open new page
    const page = await browser.newPage();

    // set the viewport
    await page.setViewport({ width: 1920, height: 1080 });

    //navigate to the url
    await page.goto('https://blazedemo.com/login');
    
    //wait for selector
    await page.waitForSelector("#email")
    
    await page.waitFor(3000)

    //move mouse at x-y co-ordinates
    await page.mouse.move(800, 150);
    await page.mouse.up(800, 50);
    await page.mouse.down(800, 250);

    await page.waitFor(3000)

    //mouse click at x-y co-ordinates
    await page.mouse.click(900, 150, { button: 'left' })
    await page.mouse.click(900, 150, { button: 'right' })

    await page.waitFor(3000)

    
    //mouse double click at x-y co-ordinates
    await page.mouse.click(700, 120, {clickCount: 2})
    await page.waitFor(3000)


    //App changed
    await page.goto('https://jqueryui.com/droppable/')

    await page.waitFor(3000)

    //mouse hover
    await page.hover("a[href='https://jqueryui.com/demos/']")

    await page.waitFor(3000)

    //mouse wheel action -- positive value for wheeling up and negative value is for wheeling down
    await page.mouse.wheel({ deltaY: -400})
    await page.waitFor(3000)
    await page.mouse.wheel({ deltaY: 400})
    await page.waitFor(3000)

    
    //close the browser
    await browser.close();

})();