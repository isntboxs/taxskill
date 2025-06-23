import { Geist, Geist_Mono, Poppins } from "next/font/google";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
});

export { geistSans, geistMono, poppins };
