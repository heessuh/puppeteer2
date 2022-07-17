import puppeteer from "puppeteer"

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  })
  const page = await browser.newPage()
  await page.goto("https://cobaltintelligence.com")

  const h1 = await page.$eval("h1", (element) => element.textContent)
  console.log("h1", h1)

  const linkText = await page.$eval("nav a:nth-of-type(2)", (element) => element.textContent)
  const linkHref = await page.$eval("nav a:nth-of-type(2)", (element) => element.getAttribute("href"))
  console.log("link stuff", linkText, linkHref)

  // const featureLabels = await page.$$('.absolute.flex.items-center.justify-center.h-12.w-12.rounded-md.bg-indigo-500.text-white')

  // for (let i = 0; i < featureLabels.length; i++) {
  //     const featureLabel = featureLabels[i]

  //     const text = await featureLabel.$eval('.feature-label', element => element.textContent)

  //     console.log('text', text)
  // }

  await page.click(".rounded-md.shadow")

  await page.waitForSelector('button[type="submit"]')

  await browser.close()
})()
