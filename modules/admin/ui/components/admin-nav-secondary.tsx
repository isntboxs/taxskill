"use client";

import * as React from "react";
import Link from "next/link";

import { type Icon } from "@tabler/icons-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AdminNavSecondary({
	items,
	...props
}: {
	items: {
		title: string;
		url: string;
		icon: Icon;
	}[];
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
	return (
		<SidebarGroup {...props}>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item, index) => (
						<SidebarMenuItem key={`${item.url}-${index}`}>
							<SidebarMenuButton asChild>
								<Link href={item.url}>
									<item.icon />
									<span>{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
