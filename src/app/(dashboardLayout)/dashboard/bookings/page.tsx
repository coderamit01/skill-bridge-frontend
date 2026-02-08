import { bookingService } from "@/service/bookings.service";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UserBookTable } from "@/components/table/UserBookTable";

export default async function AdminDashboard() {
  const { data } = await bookingService.getAllBookings();
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
          {/* <TableHead className="text-right">Actions</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((book: any) => (
          <UserBookTable key={book.id} book={book} />
        ))}
      </TableBody>
    </Table>
  );
}
