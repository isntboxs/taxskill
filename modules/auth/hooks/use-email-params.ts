import { parseAsString, useQueryState } from "nuqs";

export const useEmailParams = () => {
	return useQueryState(
		"email",
		parseAsString.withDefault("").withOptions({
			clearOnDefault: true,
		})
	);
};
