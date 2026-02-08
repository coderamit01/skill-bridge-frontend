import { Env } from "@/env";
import { cookies } from "next/headers";

export const userInfo = {
  getUser: async function () {
    try {
      const cookieStore = await cookies();
      const res = await fetch(`${Env.runtimeEnv.BACKEND_URL}/api/me`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });
      const data = res.json();
      return data;
    } catch (error) {
      return "Something went wrong";
    }
  },
};
