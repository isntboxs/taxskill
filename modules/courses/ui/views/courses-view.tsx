import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CoursesView = () => {
	return (
		<>
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-bold">Your Courses</h1>

				<Link
					href="/admin/courses/create"
					className={cn(buttonVariants({ variant: "default" }))}
				>
					Create Course
				</Link>
			</div>

			<div>
				<h1>Here you will see all of the courses</h1>
			</div>
		</>
	);
};
