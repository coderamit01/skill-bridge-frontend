"use client"

import { getAllBookings } from "@/services/bookings.service";
import { useQuery } from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserBookTable } from "@/components/table/UserBookTable";
import { IBooking } from "@/types/booking.types";

export default function AdminDashboard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["bookings"],
    queryFn: getAllBookings,
  })

  if (isLoading) return <p className="p-6 text-gray-500">Loading bookings...</p>
  if (isError) return <p className="p-6 text-red-500">Something went wrong. Please try again.</p>

  const booking: IBooking[] = data?.data ?? [];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Tutor Name</TableHead>
          <TableHead>Session Date</TableHead>
          <TableHead>Start</TableHead>
          <TableHead>End</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {booking.map((book) => (
          <UserBookTable key={book.id} book={book} />
        ))}
      </TableBody>
    </Table>
  );
}
