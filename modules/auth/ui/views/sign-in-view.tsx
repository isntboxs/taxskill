"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
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
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { emailOtp, signIn } from "@/lib/auth/client";
import { signInSchema, type SignInSchemaType } from "@/modules/auth/schemas";

export const SignInView = () => {
	const [isPending, startTransition] = useTransition();
	const [isPendingEmail, startTransitionEmail] = useTransition();

	const router = useRouter();

	const form = useForm<SignInSchemaType>({
		resolver: zodResolver(signInSchema),
		defaultValues: {
			email: "",
		},
		mode: "all",
	});

	const onSubmitEmail = async (data: SignInSchemaType) => {
		startTransitionEmail(async () => {
			await emailOtp.sendVerificationOtp({
				email: data.email,
				type: "sign-in",
				fetchOptions: {
					onSuccess: () => {
						toast.success("Verification email sent successfully", {
							id: "verification-email-sent",
							description: "You will be redirected to the verification page",
						});

						router.push(`/verify-request?email=${data.email}`);
					},
					onError: (ctx) => {
						toast.error("Error sending verification email", {
							id: "verification-email-error",
							description: ctx.error.message,
						});
					},
				},
			});
		});
	};

	const socialSignInButtons = () => {
		startTransition(async () => {
			await signIn.social({
				provider: "github",
				callbackURL: "/",
				fetchOptions: {
					onSuccess: () => {
						toast.success("Signed in with GitHub successfully", {
							id: "github-sign-in-success",
							description: "You will be redirected",
						});
					},
					onError: (ctx) => {
						toast.error("Error signing in with GitHub", {
							id: "github-sign-in-error",
							description: ctx.error.message,
						});
					},
				},
			});
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Welcome back!</CardTitle>
				<CardDescription className="text-base">
					Sign in to your account
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Button
					variant="outline"
					className="w-full"
					onClick={socialSignInButtons}
					disabled={isPending}
				>
					{isPending ? (
						<>
							<Loader2Icon className="size-4 animate-spin" />
							Sign in with GitHub
						</>
					) : (
						<>
							<FaGithub className="size-4" />
							Sign in with GitHub
						</>
					)}
				</Button>

				<div className="flex items-center gap-2">
					<Separator className="flex-1" />
					<span className="text-muted-foreground text-sm">
						or continue with
					</span>
					<Separator className="flex-1" />
				</div>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmitEmail)}
						className="grid gap-4"
					>
						<div className="grid gap-2">
							<FormField
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												type="email"
												autoComplete="email"
												placeholder="me@example.com"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						<Button type="submit" className="w-full" disabled={isPendingEmail}>
							{isPendingEmail ? (
								<>
									<Loader2Icon className="size-4 animate-spin" />
									Sending verification email
								</>
							) : (
								<>
									<SendIcon className="size-4" />
									Continue with email
								</>
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
};
