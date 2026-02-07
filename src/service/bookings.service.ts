import { Env } from "@/env";
import { cookies } from "next/headers";

const API_URL = Env.runtimeEnv.API_URL;

export const bookingService = {
  getAllBookings: async function () {
    try {
      const cookieStore = await cookies();

      const res = await fetch(`${API_URL}/bookings`, {
        method: "GET",
        headers: {
          Cookie: cookieStore.toString(),
        },
        cache: "no-store",
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return "Something Went Wrong";
    }
  },
};
