const puppeteer = require("puppeteer");
async function textPro(url,textInput){
	let output;
	const browser = await puppeteer.launch({
			'args' : [
    '--no-sandbox',
    '--disable-setuid-sandbox'
  ],
			headless : true
		});
	const page = await browser.newPage();
	await page
			.goto(url,
				{waitUntil : "networkidle2"})
			.then( async () => {
				await textInput.forEach( async (value,i) => {	
					await page.type(`#text-${i}`, value);
					console.log(`typing #text-${i} value : ${value}`)
				})
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

module.exports = textPro;

