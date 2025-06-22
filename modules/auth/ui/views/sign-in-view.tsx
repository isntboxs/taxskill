"use client";

import { useTransition } from "react";

import { Loader2Icon } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { signIn } from "@/lib/auth/client";

export const SignInView = () => {
	const [isPending, startTransition] = useTransition();

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

				<div className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="me@example.com"
						/>
					</div>

					<Button type="submit" className="w-full">
						Continue with email
					</Button>
				</div>
			</CardContent>
		</Card>
	);
};
