import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { signOut } from "@/lib/auth/client";

export const useSignOut = () => {
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

	return {
		handleSignOut,
	};
};
