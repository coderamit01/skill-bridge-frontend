"use client"

import { Calendar, Clock, CheckCircle, XCircle } from "lucide-react";
import { StatsCard } from "@/components/student/StatsCard";
import { getBookings } from "@/services/bookings.service";
import { useQuery } from "@tanstack/react-query";
import { BookingStatus, IBooking } from "@/types/booking.types";
import { Env } from "@/env";
export const TutorDashboardStats = () => {

  console.log(Env.runtimeEnv.NEXT_PUBLIC_API_URL)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["userBookings"],
    queryFn: getBookings,
  })

  if (isLoading) return "Loading....";

  const booking: IBooking[] = data?.data ?? [];

  const stats = {
    total: booking.length,
    upComming: booking.filter(b => b.status === BookingStatus.CONFIRMED).length,
    complete: booking.filter(b => b.status === BookingStatus.COMPLETED).length,
    cancelled: booking.filter(b => b.status === BookingStatus.CANCELLED).length,
    totalReviews: booking.reduce((sum,b) => sum + (b.review ? 1 : 0), 0)
  }

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-6">
        <StatsCard icon={<Calendar className="text-blue-500" />} title="Total Session" count={stats.total} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <StatsCard icon={<CheckCircle className="text-green-500" />} title="Completed Sessions" count={stats.complete} />
      </div>
      <div className="col-span-12 md:col-span-6">
        <StatsCard icon={<XCircle className="text-red-500" />} title="Cancelled Sessions" count={stats.cancelled} />
      </div>

      <div className="col-span-12 md:col-span-6">
        <StatsCard icon={<Clock className="text-purple-500" />} title="Total Reviews" count={stats.totalReviews} />
      </div>
    </div>
  )
}
