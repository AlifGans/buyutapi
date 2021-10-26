const puppeteer = require("puppeteer");
async function textPro2(url,textInput){
	let output;
	const browser = await puppeteer.launch({
			'args' : [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ],
			headless : false
		});
	const page = await browser.newPage();
	await page
			.goto(url,
				{waitUntil : "networkidle2"})
			.then( async () => {
				await page.type(`#text-0`, textInput[0]);
				await page.type(`#text-1`, textInput[1]);
				await page.click("#submit");
				await new Promise(resolve => setTimeout(resolve,20000));
				const element = await page.$(
					`div[class=thumbnail] > img`
					);
				const text = await ( await element.getProperty("src")).jsonValue();
				output = text;
				await browser.close();		
			}).catch(err => {
				return err;
			})
	return output;
}

module.exports = textPro2;

