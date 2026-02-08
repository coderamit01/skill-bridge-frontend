import { Env } from "@/env";
import { cookies } from "next/headers";
import { userData } from "./user.service";

export interface Available {
  avilable_start_time: string,
  avilable_end_time: string
}

export async function updateAvilablity(available: Available) {
  try {
    const cookieStore = await cookies();
    const res = await fetch(`${Env.runtimeEnv.API_URL}tutor/availability`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(available),
      cache: "no-store",
    });
    const data = await res.json();
    return { data };
  } catch (error) {
    return "Something went wrong";
  }
}