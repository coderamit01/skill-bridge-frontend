import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { StatsCard } from "@/components/student/StatsCard";
import { BookingStatus, IBooking } from "@/types/booking.types";

export const TutorDashboardStats = ({ bookings }: { bookings: IBooking[] }) => {
  const stats = {
    total: bookings.length,
    upComming: bookings.filter((b) => b.status === BookingStatus.CONFIRMED)
      .length,
    complete: bookings.filter((b) => b.status === BookingStatus.COMPLETED)
      .length,
    cancelled: bookings.filter((b) => b.status === BookingStatus.CANCELLED)
      .length,
    totalReviews: bookings.reduce((sum, b) => sum + (b.review ? 1 : 0), 0),
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6">
        <StatsCard
          icon={<Calendar className="text-blue-500" />}
          title="Total Session"
          count={stats.total}
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <StatsCard
          icon={<CheckCircle className="text-green-500" />}
          title="Completed Sessions"
          count={stats.complete}
        />
      </div>
      <div className="col-span-12 md:col-span-6">
        <StatsCard
          icon={<XCircle className="text-red-500" />}
          title="Cancelled Sessions"
          count={stats.cancelled}
        />
      </div>

      <div className="col-span-12 md:col-span-6">
        <StatsCard
          icon={<Clock className="text-purple-500" />}
          title="Total Reviews"
          count={stats.totalReviews}
        />
      </div>
    </div>
  );
};
