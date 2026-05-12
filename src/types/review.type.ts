
export interface IReview {
  bookingId: string;
  studentId: string;
  tutorId: string;
  rating: number;
  comment: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
