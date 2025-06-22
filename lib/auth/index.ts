import { betterAuth } from "better-auth";

import { authActions } from "@/lib/auth/actions";
import { authConfig } from "@/lib/auth/config";

export const auth = betterAuth({ ...authConfig, ...authActions });
