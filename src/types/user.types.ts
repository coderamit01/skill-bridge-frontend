export enum Role {
  STUDENT = "STUDENT",
  TUTOR = "TUTOR",
  ADMIN = "ADMIN",
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}

export interface IRegisterPayload {
  name: string
  email: string
  password: string
  role: Role
}
export interface ILoginPayload {
  email: string
  password: string
}

export interface IUser {
  id: string
  name: string
  email: string
  role: Role
  image: string | null
}