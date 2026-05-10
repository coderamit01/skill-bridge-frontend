import api from "@/lib/axios";
import { BookingStatus } from "@/types/booking.types";

export const getAllBookings = async () => {
  const res = await api.get("/bookings");
  return res.data;
}

export const updateBookingStatus = async (bookId: string, status: BookingStatus) => {
  const res = await api.post(`/bookings/${bookId}`, status);
  return res.data;
}