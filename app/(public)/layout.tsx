import { PublicHeader } from "@/modules/public/ui/components/public-header";

export default function PublicLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div>
			<PublicHeader />
			<main className="container mx-auto px-4 md:px-6 lg:px-8">{children}</main>
		</div>
	);
}
