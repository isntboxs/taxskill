import arcjet, {
	detectBot,
	fixedWindow,
	protectSignup,
	sensitiveInfo,
	shield,
	slidingWindow,
} from "@arcjet/next";

import { env } from "@/env";

export {
	detectBot,
	fixedWindow,
	protectSignup,
	sensitiveInfo,
	shield,
	slidingWindow,
};

export default arcjet({
	key: env.ARCJET_API_KEY,
	characteristics: ["fingerprint"],
	rules: [
		shield({
			mode: "LIVE",
		}),
	],
});
