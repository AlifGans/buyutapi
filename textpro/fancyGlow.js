const puppeteer = require("puppeteer");

async function textFancyGlow(text0){
	let url;
	const browser = await puppeteer.launch({
			executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
			headless : false
		});
	console.log("meluncurkan browser")
	const page = await browser.newPage();
	console.log("terbuat page")
	await page
			.goto("https://textpro.me/free-advanced-glow-text-effect-873.html",
				{waitUntil : "networkidle2"})
			.then( async () => {
				await page.type("#text-0", text0);
				await page.click("#submit");
				await new Promise(resolve => setTimeout(resolve,20000));
				const element = await page.$(
					`div[class=thumbnail] > img`
					);
				const text = await ( await element.getProperty("src")).jsonValue();
				url = text;
				await browser.close();		
			}).catch(err => {
				console.log(err)
			})
	return url;
}