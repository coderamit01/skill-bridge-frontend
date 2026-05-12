"use client"

import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { StatsCard } from "@/components/student/StatsCard";
import { getUserBookings } from "@/services/bookings.service";
import { BookingStatus, IBooking } from "@/types/booking.types";
import { useQuery } from "@tanstack/react-query";

const StudentDashboardStats = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userBookings"],
    queryFn: getUserBookings,
  })

  if(isLoading) return "Loading....";

  const booking: IBooking[] = data?.data ?? [];

  const stats = {
    total: booking.length,
    upComming: booking.filter(b => b.status === BookingStatus.CONFIRMED).length,
    complete: booking.filter(b => b.status === BookingStatus.COMPLETED).length,
    cancelled: booking.filter(b => b.status === BookingStatus.CANCELLED).length
  }

  return (
     <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6">
              <StatsCard icon={<Calendar className="text-blue-500" />} title="Total Bookings" count={stats.total} />
            </div>
            <div className="col-span-12 md:col-span-6">
              <StatsCard icon={<Clock className="text-purple-500" />} title="Upcoming Sessions" count={stats.upComming} />
            </div>
            <div className="col-span-12 md:col-span-6">
              <StatsCard icon={<CheckCircle className="text-green-500" />} title="Completed Sessions" count={stats.complete} />
            </div>
            <div className="col-span-12 md:col-span-6">
              <StatsCard icon={<XCircle className="text-red-500" />} title="Cancelled Sessions" count={stats.cancelled} />
            </div>
          </div>
  )
}

export default StudentDashboardStats