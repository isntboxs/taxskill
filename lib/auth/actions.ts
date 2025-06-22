import type { BetterAuthOptions } from "better-auth";
import { emailOTP } from "better-auth/plugins";

import { resend } from "@/lib/resend";

export const authActions = {
	plugins: [
		emailOTP({
			async sendVerificationOTP({ otp, email }) {
				const { error } = await resend.emails.send({
					from: "TaxSkill <onboarding@resend.dev>",
					to: [email],
					subject: "TaxSkill - Verify your email",
					html: `<p>Your verification code is: <b>${otp}</b></p>
					<p>Best regards, TaxSkill</p>`,
				});

				if (error) {
					console.error("Failed to send verification OTP:", error);
				}
			},
		}),
	],
} satisfies BetterAuthOptions;
