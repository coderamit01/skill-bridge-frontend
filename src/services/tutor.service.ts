import api from "@/lib/axios";
import { ITutorRegister } from "@/types/tutor.types";

export const createTtutor = async (payload: ITutorRegister) => {
  const res = await api.post("/users/create-tutor", payload);
  return res.data;
}