import { IReview } from "@/types/review.type";
import { ITutor } from "@/types/tutor.types";
import { Gender, IStudent } from "@/types/user.types";

export enum BookingStatus {
  CONFIRMED = 'CONFIRMED',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

export interface IAvailability {
  startTime: Date | string;
  endTime: Date | string;
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
  review: IReview;
}
