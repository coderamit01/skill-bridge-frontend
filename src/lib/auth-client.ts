import { Env } from "@/env";
import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
        },
        phone: {
          type: "string",
        },
      },
    }),
  ],
  baseURL: "http://localhost:5000",
  fetchOptions: {
    credentials: "include",
  },
});
