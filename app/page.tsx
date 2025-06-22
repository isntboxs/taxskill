import { getSessionAction } from "@/actions/get-session-action";

export default async function HomePage() {
	const session = await getSessionAction();

	if (!session) {
		return (
			<>
				<div>You&apos;re not authenticated</div>
			</>
		);
	}

	return (
		<>
			<div>
				<h1 className="text-xl">
					You loggin as: <span className="font-bold">{session.user.email}</span>
				</h1>
				<pre>{JSON.stringify(session, null, 2)}</pre>
			</div>
		</>
	);
}
