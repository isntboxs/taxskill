"use client";

import { FaGithub } from "react-icons/fa";

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

export const SignInView = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="text-2xl">Welcome back!</CardTitle>
				<CardDescription className="text-base">
					Sign in to your account
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-4">
				<Button variant="outline" className="w-full">
					<FaGithub className="size-4" />
					Sign in with GitHub
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
