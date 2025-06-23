import Link from "next/link";
import { useRouter } from "next/navigation";

import {
	BookOpenIcon,
	HomeIcon,
	LayoutDashboardIcon,
	LogOutIcon,
	type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "@/lib/auth/client";
import type { Session } from "@/lib/auth/types";

const UserAvatar = ({ user }: { user: Session["user"] }) => {
	return (
		<Avatar>
			{user.image ? (
				<>
					<AvatarImage src={user.image} alt={user.name} />
					<AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
				</>
			) : (
				<AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
			)}
		</Avatar>
	);
};

interface dropdownItemsProps {
	name: string;
	href: string;
	icons: LucideIcon;
}

const dropdownItems: dropdownItemsProps[] = [
	{
		name: "Home",
		href: "/",
		icons: HomeIcon,
	},
	{
		name: "Courses",
		href: "/courses",
		icons: BookOpenIcon,
	},
	{
		name: "Dashboard",
		href: "/dashboard",
		icons: LayoutDashboardIcon,
	},
];

export default function PublicUserButtonHeader({ data }: { data: Session }) {
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success("Signed out", {
						id: "sign-out-success",
						description: "You have been signed out successfully",
					});
					router.refresh();
				},
				onError: (ctx) => {
					toast.error("Failed to sign out", {
						id: "sign-out-error",
						description: ctx.error.message,
					});
				},
			},
		});
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="icon"
					variant="outline"
					aria-label="Open account menu"
					className="size-8 rounded-full"
				>
					<UserAvatar user={data.user} />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="max-w-64" align="end">
				<DropdownMenuLabel className="flex items-start gap-3">
					<UserAvatar user={data.user} />
					<div className="flex min-w-0 flex-col">
						<span className="text-foreground truncate text-sm font-medium">
							{data.user.name}
						</span>
						<span className="text-muted-foreground truncate text-xs font-normal">
							{data.user.email}
						</span>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					{dropdownItems.map((item, index) => (
						<DropdownMenuItem key={index} asChild>
							<Link href={item.href}>
								<item.icons
									size={16}
									className="opacity-60"
									aria-hidden="true"
								/>
								<span>{item.name}</span>
							</Link>
						</DropdownMenuItem>
					))}
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem onClick={handleSignOut}>
					<LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
					<span>Logout</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
