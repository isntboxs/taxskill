import Link from "next/link";

import { ArrowLeftIcon } from "lucide-react";

import { BoxsIcon } from "@/components/global/boxs-icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex min-h-dvh flex-col items-center justify-center">
			<Link
				href="/"
				className={cn(
					buttonVariants({ variant: "outline" }),
					"absolute top-4 left-4"
				)}
			>
				<ArrowLeftIcon className="size-4" />
				Back
			</Link>

			<main className="flex w-full max-w-sm flex-col gap-6 md:max-w-md">
				<Link
					href="/"
					className="flex items-center gap-2 self-center font-bold"
				>
					<BoxsIcon className="size-8" />
					<span className="text-xl">TaxSkill</span>
				</Link>

				{children}

				<div className="flex flex-col items-center justify-center text-xs md:flex-row md:gap-2">
					<p className="text-muted-foreground">
						By signing in, you agree to our
					</p>
					<div className="flex items-center gap-2">
						<Button variant="link" size="sm" className="p-0 text-xs" asChild>
							<Link href="#">Terms of Service</Link>
						</Button>
						<p className="text-muted-foreground">and</p>
						<Button variant="link" size="sm" className="p-0 text-xs" asChild>
							<Link href="#">Privacy Policy</Link>
						</Button>
					</div>
				</div>
			</main>
		</div>
	);
}
