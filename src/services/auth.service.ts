import api from "@/lib/axios"
import { ILoginPayload, IRegisterPayload } from "@/types/user.types";
import { NextRequest } from "next/server";


export const userRegister = async (payload: IRegisterPayload) => {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

export const userLogin = async (payload: ILoginPayload) => {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

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