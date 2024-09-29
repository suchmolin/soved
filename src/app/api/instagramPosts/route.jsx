import puppeteer from "puppeteer";

export default async function GET() {
  const url =
    "https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ%3D%3D";
  const browser = await puppeteer.launch({
    headless: true,
    slowMo: 200,
  });
  const page = await browser.newPage();
  await page.goto(url);

  const data = await page.evaluate(() => {
    return document.querySelectorAll(
      ".x1lliihq .x1n2onr6 .xh8yej3 .x4gyw5p .xfllauq .xo2y696 .x11i5rnm .x2pgyrj"
    );
  });

  await browser.close();

  return "yes";
}
