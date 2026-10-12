import { expect, test } from "@playwright/test";

test("capture scroll cinematic sequence", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await expect(page.locator("[data-film-still]")).toBeVisible();
  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.48);
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: ".impeccable/review/scroll-film-middle.png", fullPage: false });
  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.94);
  });
  await page.waitForTimeout(700);
  await page.screenshot({ path: ".impeccable/review/scroll-film-handoff.png", fullPage: false });
});

test("capture desktop homepage review surfaces", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.985);
  });
  await page.waitForTimeout(700);
  await expect(page.getByRole("heading", { level: 1, name: "Muhammad Farooque" })).toBeVisible();
  await page.screenshot({ path: ".impeccable/review/desktop.png", fullPage: true });
  await page.screenshot({ path: ".impeccable/review/hero-repro.png", fullPage: false });
  await page.getByRole("button", { name: /support/i }).click();
  await expect(page.getByText(/helping people keep everyday systems working/i)).toBeVisible();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: ".impeccable/review/expanded-support.png",
    fullPage: false,
  });

});

test("capture mobile homepage review surfaces", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.985);
  });
  await page.waitForTimeout(700);
  await expect(page.getByRole("heading", { level: 1, name: "Muhammad Farooque" })).toBeVisible();
  await page.screenshot({ path: ".impeccable/review/mobile.png", fullPage: true });
  await page.getByRole("button", { name: /create/i }).click();
  await expect(page.getByText(/combining AI video/i)).toBeVisible();
  await page.waitForTimeout(500);
  await page.screenshot({
    path: ".impeccable/review/expanded-create-mobile.png",
    fullPage: false,
  });
});

test("export the Flow animation end frame", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/");
  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.985);
  });
  await page.waitForTimeout(700);
  await expect(page.getByAltText("Muhammad Farooque")).toBeVisible();

  await page.addStyleTag({
    content: `
      header, footer, nextjs-portal, .atlas-hero__copy, .atlas-registration,
      .atlas-coordinate, .atlas-nodes, .atlas-orbits,
      .atlas-proof-preview, .field-guide, .evidence-spine,
      .atlas-closing { display: none !important; }
      main { height: 1080px; overflow: hidden; }
      .atlas-hero {
        display: grid !important;
        grid-template-columns: 42% 58% !important;
        grid-template-rows: 1080px !important;
        width: 1920px !important;
        max-width: none !important;
        min-height: 1080px !important;
        height: 1080px !important;
        padding: 0 96px !important;
      }
      .atlas-hero::before { inset-inline: 96px !important; }
      .atlas-hero::after { display: none !important; }
      .atlas-visual {
        grid-column: 2 !important;
        width: 860px !important;
        justify-self: center !important;
        margin: 0 !important;
      }
    `,
  });

  await page.screenshot({
    path: "resources/animation/frames/hero-end-frame.png",
    fullPage: false,
  });
});
