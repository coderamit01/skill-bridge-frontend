import { clientFetch, serverFetch } from "@/lib/fetchApi";
import { IAvailabilityPayload } from "@/types/availability.types";

export const getAvailability = async () => {
  try {
    const data = await serverFetch("/tutors/availability",{
      method: "GET",
      cache: "no-cache",
    })
    return data;
  } catch (error:any) {
    console.log("Failled to fetch availability:", error.message);
  }
}

export const createAvailability = async(paylod: IAvailabilityPayload) => {
  try {
    const data = await clientFetch("/tutors/availability",{
      method: "POST",
      body: JSON.stringify(paylod),
    })
    return data;
  } catch (error:any) {
    console.log("Failled to create availability:", error.message);
  }
}