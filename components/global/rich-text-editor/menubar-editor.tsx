import { type Editor } from "@tiptap/react";
import {
	AlignCenterIcon,
	AlignLeftIcon,
	AlignRightIcon,
	BoldIcon,
	Heading1Icon,
	Heading2Icon,
	Heading3Icon,
	ItalicIcon,
	ListIcon,
	ListOrderedIcon,
	RedoIcon,
	StrikethroughIcon,
	UndoIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
	editor: Editor | null;
}

export const MenubarEditor = ({ editor }: Props) => {
	if (!editor) return null;

	const onBoldToggle = () => {
		editor.chain().toggleBold().run();
	};

	const onItalicToggle = () => {
		editor.chain().toggleItalic().run();
	};

	const onStrikeToggle = () => {
		editor.chain().toggleStrike().run();
	};

	const onHeading1Toggle = () => {
		editor.chain().toggleHeading({ level: 1 }).run();
	};

	const onHeading2Toggle = () => {
		editor.chain().toggleHeading({ level: 2 }).run();
	};

	const onHeading3Toggle = () => {
		editor.chain().toggleHeading({ level: 3 }).run();
	};

	const onBulletListToggle = () => {
		editor.chain().toggleBulletList().run();
	};

	const onOrderedListToggle = () => {
		editor.chain().toggleOrderedList().run();
	};

	const onSetTextAlignLeftToggle = () => {
		editor.chain().setTextAlign("left").run();
	};

	const onSetTextAlignCenterToggle = () => {
		editor.chain().setTextAlign("center").run();
	};

	const onSetTextAlignRightToggle = () => {
		editor.chain().setTextAlign("right").run();
	};

	const onUndoButton = () => {
		editor.chain().focus().undo().run();
	};

	const onRedoButton = () => {
		editor.chain().focus().redo().run();
	};

	return (
		<div className="border-input bg-card flex flex-wrap items-center gap-1 rounded-t-lg border-b p-2">
			<TooltipProvider>
				<div className="flex flex-wrap gap-1">
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle bold"
								size="sm"
								onPressedChange={onBoldToggle}
								pressed={editor.isActive("bold")}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("bold"),
								})}
							>
								<BoldIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Bold</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle italic"
								size="sm"
								onPressedChange={onItalicToggle}
								pressed={editor.isActive("italic")}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("italic"),
								})}
							>
								<ItalicIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Italic</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle strike"
								size="sm"
								onPressedChange={onStrikeToggle}
								pressed={editor.isActive("strike")}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("strike"),
								})}
							>
								<StrikethroughIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Strike</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle heading 1"
								size="sm"
								onPressedChange={onHeading1Toggle}
								pressed={editor.isActive("heading", { level: 1 })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("heading", {
										level: 1,
									}),
								})}
							>
								<Heading1Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Heading 1</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle heading 2"
								size="sm"
								onPressedChange={onHeading2Toggle}
								pressed={editor.isActive("heading", { level: 2 })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("heading", {
										level: 2,
									}),
								})}
							>
								<Heading2Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Heading 2</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle heading 3"
								size="sm"
								onPressedChange={onHeading3Toggle}
								pressed={editor.isActive("heading", { level: 3 })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive("heading", {
										level: 3,
									}),
								})}
							>
								<Heading3Icon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Heading 3</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle bulletList"
								size="sm"
								onPressedChange={onBulletListToggle}
								pressed={editor.isActive("bulletList")}
								className={cn({
									"bg-muted text-muted-foreground":
										editor.isActive("bulletList"),
								})}
							>
								<ListIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Bullet List</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle orderedList"
								size="sm"
								onPressedChange={onOrderedListToggle}
								pressed={editor.isActive("orderedList")}
								className={cn({
									"bg-muted text-muted-foreground":
										editor.isActive("orderedList"),
								})}
							>
								<ListOrderedIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Ordered List</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div className="bg-border mx-2 h-6 w-px" />

				<div className="flex flex-wrap gap-1">
					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle align left"
								size="sm"
								onPressedChange={onSetTextAlignLeftToggle}
								pressed={editor.isActive({ textAlign: "left" })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive({
										textAlign: "left",
									}),
								})}
							>
								<AlignLeftIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Align Left</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle align center"
								size="sm"
								onPressedChange={onSetTextAlignCenterToggle}
								pressed={editor.isActive({ textAlign: "center" })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive({
										textAlign: "center",
									}),
								})}
							>
								<AlignCenterIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Align Center</p>
						</TooltipContent>
					</Tooltip>

					<Tooltip>
						<TooltipTrigger asChild>
							<Toggle
								aria-label="Toggle align right"
								size="sm"
								onPressedChange={onSetTextAlignRightToggle}
								pressed={editor.isActive({ textAlign: "right" })}
								className={cn({
									"bg-muted text-muted-foreground": editor.isActive({
										textAlign: "right",
									}),
								})}
							>
								<AlignRightIcon />
							</Toggle>
						</TooltipTrigger>
						<TooltipContent>
							<p>Align Right</p>
						</TooltipContent>
					</Tooltip>
				</div>

				<div className="bg-border mx-2 h-6 w-px" />

				<div className="flex flex-wrap gap-1">
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								type="button"
								aria-label="Undo changes"
								variant="ghost"
								size="sm"
								onClick={onUndoButton}
								disabled={!editor.can().undo()}
							>
								<UndoIcon />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Undo Changes</p>
						</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								type="button"
								aria-label="Redo changes"
								variant="ghost"
								size="sm"
								onClick={onRedoButton}
								disabled={!editor.can().redo()}
							>
								<RedoIcon />
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<p>Redo Changes</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</TooltipProvider>
		</div>
	);
};
