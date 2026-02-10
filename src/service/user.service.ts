"use server";

import { Env } from "@/env";
import { cookies } from "next/headers";
export interface userData {
  name: string;
  email: string;
  image: string;
}

export async function getUser() {
  try {
    const cookieStore = await cookies();
    const res = await fetch(`${Env.runtimeEnv.BACKEND_URL}/api/me`, {
      method: "GET",
      headers: {
        Cookie: cookieStore.toString(),
      },
      cache: "no-store",
    });
    const data = await res.json();
    return { data };
  } catch (error) {
    return "Something went wrong";
  }
}
export async function updateUser(id: string, userData: userData) {
  try {
    const cookieStore = await cookies();
    const res = await fetch(`${Env.runtimeEnv.API_URL}/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieStore.toString(),
      },
      body: JSON.stringify(userData),
      cache: "no-store",
    });
    const data = await res.json();
    return { data };
  } catch (error) {
    return "Something went wrong";
  }
}
