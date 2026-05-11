import api from "@/lib/axios";
import { BookingStatus } from "@/types/booking.types";

export const getUserBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
}

export const updateBookingStatus = async ({ id, status }: { id: string, status: BookingStatus }) => {
  const res = await api.put(`/bookings/${id}`, { status });
  return res.data;
}