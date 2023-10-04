import { BrowserContext } from '@playwright/test';
import { test as base, expect } from 'playwright-test-coverage';
import { cookieCategories } from '../src/lib/cookies';

export class CookieConsentFixture {
	constructor(
		private context: BrowserContext,
		private baseURL: string | undefined,
	) {}

	/**
	 * Set the given consent value as if the user had explicity chosen it
	 */
	async give(consent: Record<string, boolean | string[]> | string) {
		let value: string;
		if (typeof consent === 'string') {
			value = btoa(consent);
		} else {
			const consentObject = this.createConsentObject(consent);
			value = btoa(JSON.stringify(consentObject));
		}

		await this.context.addCookies([
			{
				name: 'lp_cookies',
				value,
				url: this.baseURL,
				httpOnly: true,
				sameSite: 'Lax',
			},
		]);
	}

	/**
	 * Expect the given consent to have been given by the user
	 */
	async expectConsent(consent: Record<string, boolean | string[]>) {
		const cookies = await this.context.cookies(this.baseURL);
		const cookie = cookies.find((c) => c.name === 'lp_cookies');
		expect(cookie).toBeDefined();
		const expectedConsentObject = this.createConsentObject(consent);
		const cookieConsentObject = JSON.parse(atob(cookie?.value ?? ''));
		expect(cookieConsentObject).toEqual(expectedConsentObject);
	}

	/**
	 * Quickly create a consent object like `{ analytics: true }` which gets filled out to
	 * `{ analytics: ["cookie1", "cookie2", ...] }`
	 */
	private createConsentObject(consent: Record<string, boolean | string[]>) {
		const consentObject: Record<string, string[] | false> = {};
		for (const [categoryName, cookies] of Object.entries(consent)) {
			let cookieNames: string[] | boolean;
			if (cookies === true) {
				const category = cookieCategories.find((c) => c.name === categoryName);
				cookieNames = category?.cookies?.map((c) => c.name) ?? [];
			} else {
				cookieNames = cookies;
			}
			consentObject[categoryName] = cookieNames;
		}
		return consentObject;
	}
}

export const test = base.extend<{
	cookieConsent: CookieConsentFixture;
}>({
	async page({ page, javaScriptEnabled }, use) {
		const goto = page.goto;
		page.goto = async (...params) => {
			const res = await goto.apply(page, params);
			if (javaScriptEnabled !== false) {
				// Wait for hydration
				await page.locator('#svelte-announcer').waitFor();
			}
			return res;
		};
		await use(page);
	},
	async cookieConsent({ context, baseURL }, use) {
		await use(new CookieConsentFixture(context, baseURL));
	},
});
