"use client";

import * as React from "react";
import Link from "next/link";

import {
	IconChartBar,
	IconDashboard,
	IconFolder,
	IconHelp,
	IconListDetails,
	IconSearch,
	IconSettings,
	IconUsers,
} from "@tabler/icons-react";

import { BoxsIcon } from "@/components/global/boxs-icon";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "@/lib/auth/client";
import { AdminNavMain } from "@/modules/admin/ui/components/admin-nav-main";
import { AdminNavSecondary } from "@/modules/admin/ui/components/admin-nav-secondary";
import { AdminNavUser } from "@/modules/admin/ui/components/admin-nav-user";

const data = {
	navMain: [
		{
			title: "Dashboard",
			url: "/admin",
			icon: IconDashboard,
		},
		{
			title: "Courses",
			url: "/admin/courses",
			icon: IconListDetails,
		},
		{
			title: "Analytics",
			url: "#",
			icon: IconChartBar,
		},
		{
			title: "Projects",
			url: "#",
			icon: IconFolder,
		},
		{
			title: "Team",
			url: "#",
			icon: IconUsers,
		},
	],
	navSecondary: [
		{
			title: "Settings",
			url: "#",
			icon: IconSettings,
		},
		{
			title: "Get Help",
			url: "#",
			icon: IconHelp,
		},
		{
			title: "Search",
			url: "#",
			icon: IconSearch,
		},
	],
};

export function AdminAppSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	const { data: session, isPending } = useSession();

	return (
		<Sidebar collapsible="offcanvas" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:!p-1.5"
						>
							<Link href="/">
								<BoxsIcon className="!size-5" />
								<span className="text-base font-semibold">TaxSkill.</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<AdminNavMain items={data.navMain} />
				<AdminNavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				{isPending || !session ? (
					<Skeleton className="h-12" />
				) : (
					<AdminNavUser session={session} />
				)}
			</SidebarFooter>
		</Sidebar>
	);
}
