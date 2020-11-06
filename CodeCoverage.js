const puppeteer = require('puppeteer');
const fs = require('fs');
const pti = require('puppeteer-to-istanbul');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Starts to gather coverage information for JS and CSS files
  await Promise.all([page.coverage.startJSCoverage(), page.coverage.startCSSCoverage()]);

  await page.goto('https://blazedemo.com/');
  await page.waitForSelector('title');

  // Stops the coverage gathering
  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);

  // Calculates how many bytes are being used based on the coverage
  const calculateUsedBytes = (type, coverage) =>
    coverage.map(({ url, ranges, text }) => {
      let usedBytes = 0;

      ranges.forEach(range => (usedBytes += range.end - range.start - 1));

      return {
        url,
        type,
        usedBytes,
        totalBytes: text.length
      };
    });

  console.info([
    ...calculateUsedBytes('js', jsCoverage),
    ...calculateUsedBytes('css', cssCoverage)
  ]);

  // writing to a json file
  fs.writeFile("CoverageOutput.json", JSON.stringify(calculateUsedBytes('css', jsCoverage), null, 4), () => {});

  //Creating html report using istanbul
  pti.write([...jsCoverage, ...cssCoverage], { includeHostname: true , storagePath: './.nyc_output' })
  
  await browser.close();
})();