import { Gender, Role } from "@/types/user.types";

export interface ITutorRegister {
  "name": string,
  "email": string,
  "gender": Gender,
  "password": string
}
