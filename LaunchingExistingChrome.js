const puppeteer = require('puppeteer');

(async () => {
  // Initializing a Chrome instance manually
  const browser = await puppeteer.launch({executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: false});
  
  console.log(browser);
  //close the browser
  await browser.close();

})();