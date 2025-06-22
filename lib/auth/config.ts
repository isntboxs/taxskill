import type { BetterAuthOptions } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { env } from "@/env";
import { db } from "@/server/db";

export const authConfig = {
	baseURL: env.NEXT_PUBLIC_APP_URL,
	trustedOrigins: [env.NEXT_PUBLIC_APP_URL],
	logger: {
		level: "debug",
		disabled: process.env.NODE_ENV === "production",
	},
	database: prismaAdapter(db, {
		provider: "postgresql",
	}),
	account: {
		accountLinking: {
			enabled: true,
			trustedProviders: ["github"],
		},
	},
	socialProviders: {
		github: {
			enabled: true,
			clientId: env.GITHUB_CLIENT_ID,
			clientSecret: env.GITHUB_CLIENT_SECRET,
		},
	},
	secret: env.BETTER_AUTH_SECRET,
} satisfies BetterAuthOptions;
