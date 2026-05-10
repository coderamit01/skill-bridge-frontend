import { BookingStatusModal } from "@/components/modal/BookingStatusModal";
import { Badge } from "@/components/ui/badge";
import { TableCell, TableRow } from "@/components/ui/table";
import { BookingStatus, IBooking } from "@/types/booking.types";

export function UserBookTable({ book }: { book: IBooking }) {
  const { availability, id, status, totalPrice, tutor, scheduleAt } = book;
  const scheduleDate = new Date(scheduleAt);

  
  return (
    <TableRow>
      <TableCell className="font-medium">{tutor.name}</TableCell>
      <TableCell>{scheduleDate.toLocaleDateString()}</TableCell>
      <TableCell>{new Date(availability.startTime).toLocaleTimeString()}</TableCell>
      <TableCell>{new Date(availability.endTime).toLocaleTimeString()}</TableCell>
      <TableCell>৳{totalPrice}</TableCell>
      <TableCell className="lowercase">
        {status === BookingStatus.CONFIRMED &&
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {status}
          </Badge>
        }
        {status === BookingStatus.COMPLETED &&
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            {status}
          </Badge>
        }
        {status === BookingStatus.CANCELLED &&
          <Badge className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300">
            {status}
          </Badge>
        }
      </TableCell>
      <TableCell>
        <BookingStatusModal status={status} />
      </TableCell>
    </TableRow>
  );
}
