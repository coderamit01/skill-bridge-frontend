import { Calendar, Clock, CheckCircle, XCircle, Star, MessageSquare, DollarSign } from "lucide-react";
import { StatsCard } from "@/components/student/StatsCard";
import { BookingStatus, IBooking } from "@/types/booking.types";

export const TutorDashboardStats = ({ bookings, tutor }: { bookings: IBooking[]; tutor: IBooking }) => {

   const stats = {
    total: bookings.length,
    upcoming: bookings.filter((b) => b.status === BookingStatus.CONFIRMED).length,
    completed: bookings.filter((b) => b.status === BookingStatus.COMPLETED).length,
    cancelled: bookings.filter((b) => b.status === BookingStatus.CANCELLED).length,
    totalReviews: bookings.reduce((sum, b) => sum + (b.review ? 1 : 0), 0),
    averageRating: Number(tutor.averageRating ?? 0).toFixed(1),
    totalEarnings: bookings
      .filter((b) => b.status === BookingStatus.COMPLETED)
      .reduce((sum, b) => sum + Number(b.totalPrice ?? 0), 0)
      .toFixed(2),
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<Calendar className="text-blue-500" />}
          title="Total Sessions"
          count={stats.total}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<Clock className="text-yellow-500" />}
          title="Upcoming Sessions"
          count={stats.upcoming}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<CheckCircle className="text-green-500" />}
          title="Completed Sessions"
          count={stats.completed}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<XCircle className="text-red-500" />}
          title="Cancelled Sessions"
          count={stats.cancelled}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<Star className="text-yellow-400" />}
          title="Average Rating"
          count={`${stats.averageRating} ⭐`}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<MessageSquare className="text-purple-500" />}
          title="Total Reviews"
          count={stats.totalReviews}
        />
      </div>
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <StatsCard
          icon={<DollarSign className="text-emerald-500" />}
          title="Total Earnings"
          count={`$${stats.totalEarnings}`}
        />
      </div>
    </div>
  );
};
