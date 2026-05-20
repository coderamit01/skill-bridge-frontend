import { clientFetch, serverFetch } from "@/lib/fetchApi";
import { ITutorRegister } from "@/types/tutor.types";


export const getAllTutors = async () => {
  try {
    const data = await serverFetch(`/tutors`, {
      method: "GET",
      cache: "no-cache",
    })
    return data;
  } catch (error: any) {
    console.log("Tutor fetch failed:", error.message);
  }
}
export const getTutorByID = async (id: string) => {
  try {
    const data = await serverFetch(`/tutors/${id}`, {
      method: "GET",
      cache: "no-cache",
    })
    return data;
  } catch (error: any) {
    console.log("Tutor fetch failed:", error.message);
  }
}

export const createTtutor = async (payload: ITutorRegister) => {
  try {
    const data = await clientFetch("/users/create-tutor", {
      method: "POST",
      body: JSON.stringify(payload),
    })
    return data;
  } catch (error: any) {
    console.log("Creating tutor failed:", error.message);
  }
}
