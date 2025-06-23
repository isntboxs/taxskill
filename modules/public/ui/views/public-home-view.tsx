import Link from "next/link";

import { FaUsers } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { ImBooks } from "react-icons/im";
import { IoGameController } from "react-icons/io5";
import type { IconType } from "react-icons/lib";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface featureProps {
	title: string;
	description: string;
	icon: IconType;
}

const features: featureProps[] = [
	{
		title: "Comprehensive Courses",
		description:
			"Access to a wide range of carefully curated courses designed by industry expert.",
		icon: ImBooks,
	},
	{
		title: "Interactive Learning",
		description:
			"Engage with interactive content, quizzes, and assignments to enhance your learning experience.",
		icon: IoGameController,
	},
	{
		title: "Progress Tracking",
		description:
			"Monitor your proggress and achievements with detailed analytics and personalized dashboard.",
		icon: GiProgression,
	},
	{
		title: "Community Supports",
		description:
			"Join a vibrant community of learners and instructors to collaborate and share knowledge.",
		icon: FaUsers,
	},
] as const;

export const PublicHomeView = () => {
	return (
		<>
			<section className="relative py-20">
				<div className="flex flex-col items-center space-y-8 text-center">
					<Badge variant="outline">The Future of Online Education</Badge>
					<h1 className="text-4xl font-bold tracking-tight md:text-6xl">
						Elevate Your Learning Experience
					</h1>
					<p className="text-muted-foreground max-w-[700px] md:text-xl">
						Discover a new way to learn with our modern, interactive learning
						management system. Access high-quality courses anytime, anywhere.
					</p>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<Link
							href="/courses"
							className={cn(buttonVariants({ size: "lg" }))}
						>
							Explore Courses
						</Link>

						<Link
							href="/sign-in"
							className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
						>
							Sign in
						</Link>
					</div>
				</div>
			</section>

			<section className="mb-32 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				{features.map((feature, index) => (
					<Card
						key={index}
						className="transition-all duration-300 ease-in-out hover:shadow-lg"
					>
						<CardHeader>
							<feature.icon className="text-primary mb-4 text-4xl" />
							<CardTitle>{feature.title}</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</section>
		</>
	);
};
