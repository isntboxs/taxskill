import { z } from "zod";

import {
	courseCategories,
	courseLevels,
	courseStatus,
} from "@/modules/courses/constants";

export const courseInsertSchema = z.object({
	title: z
		.string()
		.min(3, { message: "Title must be at least 3 characters long" })
		.max(100, { message: "Title must be at most 100 characters long" }),
	description: z
		.string()
		.min(3, { message: "Description must be at least 3 characters long" }),
	fileKey: z.string().min(1, { message: "File is required" }),
	price: z.number({ coerce: true }).min(1, { message: "Price is required" }),
	duration: z
		.number({ coerce: true })
		.min(1, { message: "Duration must be at least 1 hour" })
		.max(500, { message: "Duration must be at most 500 hours" }),
	level: z.enum(courseLevels, {
		message: "Level is required",
	}),
	category: z.enum(courseCategories, { message: "Category is required" }),
	smallDescription: z
		.string()
		.min(1, { message: "Small Description is required" })
		.max(200, {
			message: "Small Description must be at most 200 characters long",
		}),
	slug: z
		.string()
		.min(3, { message: "Slug must be at least 3 characters long" }),
	status: z.enum(courseStatus, {
		message: "Status is required",
	}),
});

export type CourseInsertSchemaType = z.infer<typeof courseInsertSchema>;
