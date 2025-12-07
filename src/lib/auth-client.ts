import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // biome-ignore lint/style/noNonNullAssertion: BETTER_AUTH_URL is not null
  baseURL: process.env.BETTER_AUTH_URL!,
});

export const { signIn, signOut, signUp, useSession } = authClient;
