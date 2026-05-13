import { Env } from "@/env";
import api from "@/lib/axios"
import { clientFetch } from "@/lib/fetchApi";
import { ILoginPayload, IRegisterPayload, IUpdatePayload } from "@/types/user.types";
import { NextRequest } from "next/server";


export const userRegister = async (payload: IRegisterPayload) => {
  try {
    const data = await clientFetch("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return data.data;
  } catch {
    return {success: false, message: "Registration failled"};
  }
};

export const userLogin = async (payload: ILoginPayload) => {
  try {
    const data = await clientFetch(`/auth/login`, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return data.data;
  } catch {
    return {success: false, message: "Login failled"};
  }
};


export const getUser = async (req: NextRequest) => {
  try {
    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/auth/me`, {
      headers: {
        cookie: req.headers.get("cookie") ?? "",
      }
    });
    if (!res.ok) return null;
    const data = await res.json();

    return data.data;
  } catch (error) {
    return null;
  }
}



export const logOut = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
}