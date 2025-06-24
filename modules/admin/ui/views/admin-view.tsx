import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import data from "@/modules/admin/data.json";
import { AdminAppSidebar } from "@/modules/admin/ui/components/admin-app-sidebar";
import { AdminChartAreaInteractive } from "@/modules/admin/ui/components/admin-chart-area-interactive";
import { AdminDataTable } from "@/modules/admin/ui/components/admin-data-table";
import { AdminSectionCards } from "@/modules/admin/ui/components/admin-section-cards";
import { AdminSiteHeader } from "@/modules/admin/ui/components/admin-site-header";

export const AdminView = () => {
	return (
		<SidebarProvider
			style={
				{
					"--sidebar-width": "calc(var(--spacing) * 72)",
					"--header-height": "calc(var(--spacing) * 12)",
				} as React.CSSProperties
			}
		>
			<AdminAppSidebar variant="inset" />
			<SidebarInset>
				<AdminSiteHeader />
				<div className="flex flex-1 flex-col">
					<div className="@container/main flex flex-1 flex-col gap-2">
						<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
							<AdminSectionCards />
							<div className="px-4 lg:px-6">
								<AdminChartAreaInteractive />
							</div>
							<AdminDataTable data={data} />
						</div>
					</div>
				</div>
			</SidebarInset>
		</SidebarProvider>
	);
};
