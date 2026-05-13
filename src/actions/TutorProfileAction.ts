"use server"
import { serverFetch } from "@/lib/fetchApi";
import { revalidatePath } from "next/cache";

export interface ITutorProfilePayload {
  contactNumber?: string;
  gender?: string;
  hourlyRate?: number | string;
  yearsExperience?: number | string;
  isAvailable?: boolean;
}

export const updateTutor = async (payload: ITutorProfilePayload) => {
  try {
    // Convert string numbers to actual numbers
    const tutorPayload = {
      ...payload,
      hourlyRate: payload.hourlyRate ? parseFloat(payload.hourlyRate as string) : undefined,
      yearsExperience: payload.yearsExperience ? parseFloat(payload.yearsExperience as string) : undefined,
    };

    // Remove undefined fields
    Object.keys(tutorPayload).forEach(key =>
      tutorPayload[key as keyof typeof tutorPayload] === undefined && delete tutorPayload[key as keyof typeof tutorPayload]
    );

    const data = await serverFetch(`/tutors/profile`, {
      method: "PUT",
      body: JSON.stringify(tutorPayload),
    })
    revalidatePath("/tutor/profile");
    return { success: true, data };
  } catch (error: any) {
    console.error("Failed:", error.message);
    return { success: false, error: error.message };
  }
}