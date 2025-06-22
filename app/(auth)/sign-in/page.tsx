import { redirect } from "next/navigation";

import { getSessionAction } from "@/actions/get-session-action";
import { SignInView } from "@/modules/auth/ui/views/sign-in-view";

export default async function SignInPage() {
	const session = await getSessionAction();

	if (session) {
		return redirect("/");
	}

	return <SignInView />;
}
