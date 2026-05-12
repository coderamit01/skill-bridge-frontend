import { Gender, Role } from "@/types/user.types";

export interface ITutorRegister {
  name: string,
  email: string,
  gender: Gender,
  password: string
}

export interface ITutor {
  name: string;
  email: string;
  gender: Gender;
  image: string | null;
}

export interface ITutorDetails {
  id: string;
  name: string;
  email: string;
  image: string | null;
  contactNumber: string | null;
  gender: Gender;
  userId: string;
  hourlyRate: number | string; 
  yearsExperience: number | string;
  averageRating: number | string;
  isAvailable: boolean;
  createdAt: Date | string;
  updatedAt: Date | string;
}