"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";
import { signIn } from "@/lib/auth/client";
import { useEmailParams } from "@/modules/auth/hooks/use-email-params";
import {
	inputOtpSchema,
	type InputOtpSchemaType,
} from "@/modules/auth/schemas";

export const VerifyRequestView = () => {
	const [isPending, startTransition] = useTransition();
	const [email] = useEmailParams();

	const router = useRouter();

	const form = useForm<InputOtpSchemaType>({
		resolver: zodResolver(inputOtpSchema),
		defaultValues: {
			otp: "",
		},
		mode: "all",
	});

	const onSubmit = async (data: InputOtpSchemaType) => {
		startTransition(async () => {
			await signIn.emailOtp({
				email,
				otp: data.otp,
				fetchOptions: {
					onSuccess: () => {
						toast.success("Email verified successfully", {
							id: "email-verified",
						});

						router.push("/");
					},
					onError: (ctx) => {
						toast.error("Error verifying email", {
							id: "email-verification-error",
							description: ctx.error.message,
						});
					},
				},
			});
		});
	};

	return (
		<Card className="mx-auto w-full">
			<CardHeader className="text-center">
				<CardTitle className="text-xl">Verify your email</CardTitle>
				<CardDescription>
					We have sent a verification email to your email address.
				</CardDescription>
			</CardHeader>

			<CardContent>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
						<div className="grid gap-2">
							<FormField
								name="otp"
								render={({ field }) => (
									<FormItem className="flex w-full flex-col items-center justify-center space-y-2">
										<FormLabel>One-Time Password</FormLabel>
										<FormControl>
											<InputOTP maxLength={6} {...field} className="gap-2">
												<InputOTPGroup>
													<InputOTPSlot index={0} />
													<InputOTPSlot index={1} />
												</InputOTPGroup>
												<InputOTPSeparator />
												<InputOTPGroup>
													<InputOTPSlot index={2} />
													<InputOTPSlot index={3} />
												</InputOTPGroup>
												<InputOTPSeparator />
												<InputOTPGroup>
													<InputOTPSlot index={4} />
													<InputOTPSlot index={5} />
												</InputOTPGroup>
											</InputOTP>
										</FormControl>
										<FormDescription className="text-muted-foreground text-sm">
											Enter the 6-digit code sent to your email
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button
							type="submit"
							className="w-full"
							disabled={isPending || !form.formState.isValid}
						>
							{isPending ? (
								<>
									<Loader2Icon className="size-4 animate-spin" />
									Verifying account
								</>
							) : (
								<>Verify Account</>
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
