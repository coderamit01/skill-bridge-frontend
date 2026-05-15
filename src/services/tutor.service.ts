import { serverFetch } from "@/lib/fetchApi";


export const getTutorByID = async (id: string) => {
  try {
    const data = await serverFetch(`tutors/${id}`, {
      method: "GET",
      cache: "no-cache",
    })
    return data;
  } catch (error: any) {
    console.log("getBookings failed:", error.message);
  }
}
