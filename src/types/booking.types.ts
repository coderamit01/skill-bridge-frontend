import { Gender } from "@/types/user.types";

export enum BookingStatus {
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface ITutor {
  name: string;
  email: string;
  gender: Gender;
  image: string | null;
}

export interface IStudent {
  name: string;
  email: string;
  image: string | null;
}

export interface IAvailability {
  startTime: Date | string;
  endTime: Date | string;
}

export interface IReview {
  bookingId: string;
  studentId: string;
  tutorId: string;
  rating: number;
  comment: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}


export interface IBooking {
  id: string;
  studentId: string;
  tutorId: string;
  availabilityId: string;
  scheduleAt: Date | string;
  status: BookingStatus;
  totalPrice: number;
  createdAt: Date | string;
  updatedAt: Date | string;
  tutor: ITutor;
  student: IStudent;
  availability: IAvailability;
  review?: IReview;
}
