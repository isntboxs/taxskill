import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().trim().email({ message: "Invalid email address" }),
});

export type SignInSchemaType = z.infer<typeof signInSchema>;

export const inputOtpSchema = z.object({
	otp: z.string().min(6, { message: "Invalid OTP" }),
});

export type InputOtpSchemaType = z.infer<typeof inputOtpSchema>;
