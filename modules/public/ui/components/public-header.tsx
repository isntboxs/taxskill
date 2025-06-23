import Link from "next/link";

import { BoxsIcon } from "@/components/global/boxs-icon";
import { PublicDesktopNavHeader } from "@/modules/public/ui/components/public-desktop-nav-header";

export const PublicHeader = () => {
	return (
		<header className="bg-background/85 supports-[backdrop-filter]:bg-background/50 sticky top-0 z-50 w-full border-b backdrop-blur-sm">
			<div className="container mx-auto flex min-h-16 items-center justify-between px-4 md:px-6 lg:px-8">
				<Link href="/" className="flex items-center space-x-2">
					<BoxsIcon className="size-6" />
					<span className="text-xl font-bold">TaxSkill</span>
				</Link>

				{/* Desktop Nav */}
				<PublicDesktopNavHeader />
			</div>
		</header>
	);
};
