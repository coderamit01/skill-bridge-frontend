import { Env } from "@/env";
import api from "@/lib/axios";
import { BookingStatus } from "@/types/booking.types";

export const getBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
}

export const updateBookingStatus = async ({ id, status }: { id: string, status: BookingStatus }) => {
  const res = await api.put(`/bookings/${id}`, { status });
  return res.data;
}

export const getBooks = async () => {
  try {
    const res = await fetch(`${Env.runtimeEnv.NEXT_PUBLIC_API_URL}/bookings`, {
      method: "GET",
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}