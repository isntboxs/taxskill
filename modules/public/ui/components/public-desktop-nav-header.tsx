"use client";

import Link from "next/link";

import { ThemeModeToggle } from "@/components/global/theme-mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "@/lib/auth/client";
import { cn } from "@/lib/utils";
import PublicUserButtonHeader from "@/modules/public/ui/components/public-user-button-header";

interface navItemsProps {
	name: string;
	href: string;
}

const navItems: navItemsProps[] = [
	{ name: "Home", href: "/" },
	{ name: "Courses", href: "/courses" },
	{ name: "Dashboard", href: "/dashboard" },
];

export const PublicDesktopNavHeader = () => {
	const { data: session, isPending } = useSession();

	return (
		<nav className="hidden space-x-4 md:flex md:items-center md:justify-between">
			<div className="flex items-center space-x-2">
				{navItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}
					>
						{item.name}
					</Link>
				))}
			</div>

			<div className="flex items-center space-x-4">
				<ThemeModeToggle />

				{isPending ? (
					<Skeleton className="size-8 rounded-full" />
				) : session ? (
					<PublicUserButtonHeader data={JSON.parse(JSON.stringify(session))} />
				) : (
					<Link
						href="/sign-in"
						className={cn(buttonVariants({ variant: "default", size: "sm" }))}
					>
						Get Started
					</Link>
				)}
			</div>
		</nav>
	);
};
