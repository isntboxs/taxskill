import data from "@/modules/admin/data.json";
import { AdminChartAreaInteractive } from "@/modules/admin/ui/components/admin-chart-area-interactive";
import { AdminDataTable } from "@/modules/admin/ui/components/admin-data-table";
import { AdminSectionCards } from "@/modules/admin/ui/components/admin-section-cards";

export const AdminView = () => {
	return (
		<>
			<AdminSectionCards />
			<div className="px-4 lg:px-6">
				<AdminChartAreaInteractive />
			</div>
			<AdminDataTable data={data} />
		</>
	);
};
