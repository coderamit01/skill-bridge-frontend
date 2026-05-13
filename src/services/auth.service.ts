import { Env } from "@/env";
import api from "@/lib/axios"
import { ILoginPayload, IRegisterPayload, IUpdatePayload } from "@/types/user.types";
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

export const updateUser = async (id: string, payload: IUpdatePayload) => {
  const res = await api.put(`/users/${id}`, payload);
  return res.data;
}
export const updateBookingStatus = async ({ id, status }: { id: string, status: BookingStatus }) => {
  try {
    const data = await clientFetch(`/bookings/${id}`,{
      method: "PUT",
      body: JSON.stringify({status})
    })
    return data;
  } catch (error:any) {
    console.log("Failed:", error.message);
  }
}

export const logOut = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
}