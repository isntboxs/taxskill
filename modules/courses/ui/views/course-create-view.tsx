"use client";

import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeftIcon, PlusIcon, SparkleIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import slugify from "slugify";

import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
	courseCategories,
	courseLevels,
	courseStatus,
} from "@/modules/courses/constants";
import {
	courseInsertSchema,
	type CourseInsertSchemaType,
} from "@/modules/courses/schemas";

export const CourseCreateView = () => {
	const form = useForm<CourseInsertSchemaType>({
		resolver: zodResolver(courseInsertSchema),
		defaultValues: {
			title: "",
			description: "",
			fileKey: "",
			price: 0,
			duration: 0,
			level: "Beginner",
			category: "Development",
			smallDescription: "",
			slug: "",
			status: "Draft",
		},
		mode: "all",
	});

	const generateSlug = () => {
		const titleValue = form.getValues("title");
		const slug = slugify(titleValue, { lower: true });

		form.setValue("slug", slug, { shouldValidate: true });
	};

	const onSubmitForm = (values: CourseInsertSchemaType) => {
		console.log(values);
	};

	return (
		<>
			<div className="flex items-center gap-4">
				<Link
					href={"/admin/courses/"}
					className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
				>
					<ArrowLeftIcon className="size-4" />
				</Link>

				<h1 className="text-2xl font-bold">Create Course</h1>
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Basic Information</CardTitle>
					<CardDescription>
						Provide basic information about the course
					</CardDescription>
				</CardHeader>

				<CardContent>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmitForm)}
							className="space-y-6"
						>
							<FormField
								control={form.control}
								name="title"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Title</FormLabel>
										<FormControl>
											<Input placeholder="Title" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="flex items-end gap-4">
								<FormField
									control={form.control}
									name="slug"
									render={({ field }) => (
										<FormItem className="w-full">
											<FormLabel>Slug</FormLabel>
											<FormControl>
												<Input placeholder="Slug" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type="button" className="w-fit" onClick={generateSlug}>
									Generate Slug <SparkleIcon className="ml-1" size={16} />
								</Button>
							</div>

							<FormField
								control={form.control}
								name="smallDescription"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Small Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Small Description"
												className="min-h-[120px]"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="description"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Description</FormLabel>
										<FormControl>
											<Textarea
												placeholder="Description"
												className="min-h-[120px]"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="fileKey"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Thumbnail Image</FormLabel>
										<FormControl>
											<Input placeholder="thumbnail url" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
								<FormField
									control={form.control}
									name="category"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Category</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select Category" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{courseCategories.map((category, index) => (
														<SelectItem
															key={`${category}-${index}`}
															value={category}
														>
															{category}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="level"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Level</FormLabel>
											<Select
												onValueChange={field.onChange}
												value={field.value}
											>
												<FormControl>
													<SelectTrigger className="w-full">
														<SelectValue placeholder="Select Level" />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													{courseLevels.map((level, index) => (
														<SelectItem key={`${level}-${index}`} value={level}>
															{level}
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="duration"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Duration (hours)</FormLabel>
											<FormControl>
												<Input
													type="number"
													placeholder="Duration"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="price"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Price ($)</FormLabel>
											<FormControl>
												<Input type="number" placeholder="Price" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</div>

							<FormField
								control={form.control}
								name="status"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Status</FormLabel>
										<Select onValueChange={field.onChange} value={field.value}>
											<FormControl>
												<SelectTrigger className="w-full">
													<SelectValue placeholder="Select Status" />
												</SelectTrigger>
											</FormControl>
											<SelectContent>
												{courseStatus.map((status, index) => (
													<SelectItem key={`${status}-${index}`} value={status}>
														{status}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button>
								Create Course <PlusIcon className="ml-1" size={16} />
							</Button>
						</form>
					</Form>
				</CardContent>
			</Card>
		</>
	);
};
