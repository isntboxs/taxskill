"use client";

import Link from "next/link";

import { IconDotsVertical, IconLogout } from "@tabler/icons-react";
import {
	HomeIcon,
	LayoutDashboardIcon,
	Tv2Icon,
	type LucideIcon,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { useSignOut } from "@/hooks/use-sign-out";
import type { Session } from "@/lib/auth/types";

interface dropdownItemsProps {
	name: string;
	href: string;
	icon: LucideIcon;
}

const dropdownItems: dropdownItemsProps[] = [
	{
		name: "Home",
		href: "/",
		icon: HomeIcon,
	},
	{
		name: "Dashboard",
		href: "/admin/dashboard",
		icon: LayoutDashboardIcon,
	},
	{
		name: "Courses",
		href: "/admin/courses",
		icon: Tv2Icon,
	},
];

const UserAvatar = ({ user }: { user: Session["user"] }) => {
	const letterFallback = user.name.toUpperCase().charAt(0) ?? "U";

	return (
		<Avatar className="h-8 w-8 rounded-lg">
			{user.image ? (
				<>
					<AvatarImage src={user.image} alt={user.name} />
					<AvatarFallback>{letterFallback}</AvatarFallback>
				</>
			) : (
				<AvatarFallback>{letterFallback}</AvatarFallback>
			)}
		</Avatar>
	);
};

export function AdminNavUser({ session }: { session: Session }) {
	const { handleSignOut } = useSignOut();
	const { isMobile } = useSidebar();

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton
							size="lg"
							className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
						>
							<UserAvatar user={session.user} />
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium">
									{session.user.name}
								</span>
								<span className="text-muted-foreground truncate text-xs">
									{session.user.email}
								</span>
							</div>
							<IconDotsVertical className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<UserAvatar user={session.user} />
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium">
										{session.user.name}
									</span>
									<span className="text-muted-foreground truncate text-xs">
										{session.user.email}
									</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							{dropdownItems.map((item) => (
								<DropdownMenuItem key={item.href} asChild>
									<Link href={item.href}>
										<item.icon />
										{item.name}
									</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem onClick={handleSignOut}>
							<IconLogout />
							Sign out
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
