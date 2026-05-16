import {
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Star,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { StatsCard } from "@/components/student/StatsCard";
import { BookingStatus, IBooking } from "@/types/booking.types";
import { ITutorDetails } from "@/types/tutor.types";

export const TutorDashboardStats = ({
  bookings,
  tutor,
}: {
  bookings: IBooking[];
  tutor: ITutorDetails;
}) => {
  const stats = {
    total: bookings.length,
    upcoming: bookings.filter((b) => b.status === BookingStatus.CONFIRMED)
      .length,
    completed: bookings.filter((b) => b.status === BookingStatus.COMPLETED)
      .length,
    cancelled: bookings.filter((b) => b.status === BookingStatus.CANCELLED)
      .length,
    totalReviews: bookings.reduce((sum, b) => sum + (b.review ? 1 : 0), 0),
    averageRating: Number(tutor.averageRating ?? 0).toFixed(1),
    totalEarnings: bookings
      .filter((b) => b.status === BookingStatus.COMPLETED)
      .reduce((sum, b) => sum + Number(b.totalPrice ?? 0), 0)
      .toFixed(2),
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <StatsCard
        icon={<Calendar className="text-blue-500" />}
        title="Total Sessions"
        count={stats.total}
      />
      <StatsCard
        icon={<Clock className="text-yellow-500" />}
        title="Upcoming Sessions"
        count={stats.upcoming}
      />
      <StatsCard
        icon={<CheckCircle className="text-green-500" />}
        title="Completed Sessions"
        count={stats.completed}
      />
      <StatsCard
        icon={<XCircle className="text-red-500" />}
        title="Cancelled Sessions"
        count={stats.cancelled}
      />
      <StatsCard
        icon={<Star className="text-yellow-400" />}
        title="Average Rating"
        count={`${stats.averageRating} ⭐`}
      />
      <StatsCard
        icon={<MessageSquare className="text-purple-500" />}
        title="Total Reviews"
        count={stats.totalReviews}
      />
      <StatsCard
        icon={<DollarSign className="text-emerald-500" />}
        title="Total Earnings"
        count={`$${stats.totalEarnings}`}
      />
    </div>
  );
};
