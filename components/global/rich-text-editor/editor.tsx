"use client";

import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { type ControllerRenderProps } from "react-hook-form";

import { MenubarEditor } from "@/components/global/rich-text-editor/menubar-editor";
import { type CourseInsertSchemaType } from "@/modules/courses/schemas";

interface Props {
	field: ControllerRenderProps<CourseInsertSchemaType>;
}

export const TiptapEditor = ({ field }: Props) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			TextAlign.configure({ types: ["heading", "paragraph"] }),
		],

		editorProps: {
			attributes: {
				class:
					"min-h-[300px] p-4 focus:outline-none prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert !w-full !max-w-none",
			},
		},

		immediatelyRender: false,

		onUpdate: ({ editor }) => {
			field.onChange(JSON.stringify(editor.getJSON()));
		},

		content: field.value
			? JSON.parse(field.value as string)
			: `<p>Hello, world!</p>`,
	});

	return (
		<div className="border-input bg-input/30 w-full overflow-hidden rounded-lg border">
			<MenubarEditor editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};
