import type { CookieCategory } from 'pp-svelte-components';
import { z } from 'zod';

export const cookieCategories: CookieCategory[] = [
	{
		name: 'neccesary',
		title: 'Neccesary Cookies',
		body: 'Necessary cookies enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions.',
		required: true,
		cookies: [
			{
				name: 'lp_cookies',
				provider: 'LearningPlus',
				purpose: 'Cookie Consent',
				expiration: '1 year',
			},
			{
				name: 'lpbasket',
				provider: 'LearningPlus',
				purpose: 'Shopping Basket',
				expiration: '7 days',
			},
			{
				name: 'next-auth.session-token',
				provider: 'LearningPlus',
				purpose: 'Authentication',
				expiration: '1 month',
			},
			{
				name: 'next-auth.callback-url',
				provider: 'LearningPlus',
				purpose: 'Authentication',
				expiration: 'Session',
			},
			{
				name: 'next-auth.csrf-token',
				provider: 'LearningPlus',
				purpose: 'Authentication',
				expiration: 'Session',
			},
			{
				name: '__stripe_sid',
				provider: 'Stripe',
				purpose: 'Fraud prevention',
				expiration: '30 minutes',
			},
			{
				name: '__stripe_mid',
				provider: 'Stripe',
				purpose: 'Fraud prevention',
				expiration: '1 year',
			},
		],
	},
	{
		name: 'analytics',
		title: 'Analytics Cookies',
		body: "We'd like to collect website analytics information. We collect on device data about how you interact with our site. The data is collected in a way that does not directly identify anyone. For more information please see our Cookies page.",
		cookies: [
			{
				name: '_pk_id',
				provider: 'Matamo',
				purpose: 'Tracking',
				expiration: '13 months',
			},
			{
				name: '_pk_ref',
				provider: 'Matamo',
				purpose: 'Referrer Attribution',
				expiration: '6 months',
			},
			{
				name: '_pk_ses',
				provider: 'Matamo',
				purpose: 'Tracking',
				expiration: '30 minutes',
			},
			{
				name: '_pk_cvar',
				provider: 'Matamo',
				purpose: 'Tracking',
				expiration: '30 minutes',
			},
			{
				name: '_pk_hsr',
				provider: 'Matamo',
				purpose: 'Tracking',
				expiration: '30 minutes',
			},
			{
				name: '_ga',
				provider: 'Google Analytics',
				purpose: 'Tracking',
				expiration: '2 years',
			},
			{
				name: '_ga_<container-id>',
				provider: 'Google Analytics',
				purpose: 'Tracking',
				expiration: '2 years',
			},
			{
				name: '_fbp',
				provider: 'Meta',
				purpose: 'Marketing/Tracking',
				expiration: '3 Months',
			},
			{
				name: '<id>_f24_autoId',
				provider: 'Force24',
				purpose: 'Tracking',
				expiration: '10 Years',
			},
			{
				name: 'ln_or',
				provider: 'LinkedIn',
				purpose: 'Tracking',
				expiration: '1 day',
			},
		],
	},
];
export type CookieConsent = z.infer<typeof CookieConsent>;
export const CookieConsent = z.record(z.string(), z.array(z.string()).or(z.literal(false)));
