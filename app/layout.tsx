import type { Metadata } from "next";

import { NuqsAdapter } from "nuqs/adapters/next/app";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { geistMono, geistSans } from "@/lib/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
	title: "taxskill",
	description: "taxskill is a simple app learning management system",
	icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			suppressHydrationWarning
		>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<NuqsAdapter>{children}</NuqsAdapter>
					<Toaster richColors position="top-center" />
				</ThemeProvider>
			</body>
		</html>
	);
}
