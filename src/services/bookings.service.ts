import { clientFetch, serverFetch } from "@/lib/fetchApi";
import { BookingStatus } from "@/types/booking.types";


export const getBookings = async () => {
  try {
    const data = await serverFetch("/bookings",{
      cache: "no-cache"
    })
    return data;
  } catch (error:any) {
    console.log("getBookings failed:", error.message);
  }
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

