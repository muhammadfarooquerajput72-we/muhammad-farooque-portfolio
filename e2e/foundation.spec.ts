import { expect, test } from "@playwright/test";

const routes = [
  {
    path: "/",
    heading: "Muhammad Farooque",
    title: "Muhammad Farooque | Learning Across Tech",
  },
  { path: "/work", heading: "Work in progress", title: "Work | Muhammad Farooque" },
  { path: "/learning", heading: "Learning in public", title: "Learning | Muhammad Farooque" },
  {
    path: "/about",
    heading: "A practical learner across disciplines",
    title: "About | Muhammad Farooque",
  },
] as const;

const viewports = [
  { name: "mobile", width: 320, height: 720 },
  { name: "tablet", width: 768, height: 900 },
  { name: "laptop", width: 1024, height: 768 },
  { name: "desktop", width: 1440, height: 900 },
] as const;

for (const viewport of viewports) {
  test.describe(`${viewport.name} ${viewport.width}px`, () => {
    test.use({ viewport });

    for (const route of routes) {
      test(`${route.path} renders without overflow or console errors`, async ({ page }) => {
        const consoleErrors: string[] = [];
        page.on("console", (message) => {
          if (message.type() === "error") consoleErrors.push(message.text());
        });

        await page.goto(route.path);

        await expect(page).toHaveTitle(route.title);
        if (route.path === "/") {
          await expect(page.locator("[data-film-still]")).toBeVisible();
          await expect(page.locator("#home-title")).toHaveCount(1);
        } else {
          await expect(
            page.getByRole("heading", { level: 1, name: route.heading }),
          ).toBeVisible();
        }
        await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible();

        const hasHorizontalOverflow = await page.evaluate(
          () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
        );

        expect(hasHorizontalOverflow).toBe(false);
        expect(consoleErrors).toEqual([]);
      });
    }
  });
}

test("shell is operable by keyboard", async ({ page }) => {
  await page.goto("/");

  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();

  await page.keyboard.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();

  await page.getByRole("link", { name: "Contact", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/#contact$/);
});

test("reduced-motion preference disables nonessential transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");

  const transitionDuration = await page
    .getByRole("link", { name: "Contact" })
    .evaluate((element) => getComputedStyle(element).transitionDuration);

  expect(Number.parseFloat(transitionDuration)).toBeLessThanOrEqual(0.00001);
});

test("capability fields expand by keyboard and remain inside the viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.985);
  });
  await page.waitForTimeout(700);

  const createField = page.getByRole("button", { name: /create/i });
  await createField.focus();
  await page.keyboard.press("Enter");

  await expect(createField).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByText(/combining AI video/i)).toBeVisible();

  const hasHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  expect(hasHorizontalOverflow).toBe(false);
});

test("cinematic sequence scrubs forward and reverses with page scroll", async ({ page }) => {
  await page.goto("/");
  const video = page.locator("video").first();
  await expect(page.locator("[data-film-still]")).toBeVisible();
  await expect(video).toHaveCount(1);
  await expect(video).toHaveJSProperty("paused", true);

  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.76);
  });
  await page.waitForTimeout(700);
  const forwardTime = await video.evaluate((element: HTMLVideoElement) => element.currentTime);
  expect(forwardTime).toBeGreaterThan(1);

  await page.locator("[aria-label='A scroll-controlled introduction to Muhammad Farooque']").evaluate((element) => {
    const sequence = element as HTMLElement;
    window.scrollTo(0, sequence.offsetTop + (sequence.scrollHeight - window.innerHeight) * 0.2);
  });
  await page.waitForTimeout(700);
  const reverseTime = await video.evaluate((element: HTMLVideoElement) => element.currentTime);
  expect(reverseTime).toBeLessThan(forwardTime);
});
