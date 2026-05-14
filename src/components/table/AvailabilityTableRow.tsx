import { TableCell, TableRow } from "@/components/ui/table";
import { IAvailability } from "@/types/availability.types";
import { localTime } from "@/utils/localTime";
import { SquarePen, Trash2 } from "lucide-react";
import { Badge } from "../ui/badge";

const AvailabilityTableRow = ({ available }: { available: IAvailability }) => {
  const { id, startTime, endTime, isBooked } = available;

  const availableDate = new Date(startTime).toLocaleDateString("en-GB", {
    weekday: "long",
  });
  const start = localTime(startTime);
  const end = localTime(endTime);

  const diffMs = Number(new Date(endTime)) - Number(new Date(startTime));
  const diffMins = diffMs / 1000 / 60;
  const diffHours = diffMins / 60;

  return (
    <TableRow>
      <TableCell>{availableDate}</TableCell>
      <TableCell>{start}</TableCell>
      <TableCell>{end}</TableCell>
      <TableCell>{diffHours} hours</TableCell>
      <TableCell>
        {isBooked ? (
          <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            Booked
          </Badge>
        ) : (
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            Available
          </Badge>
        )}
      </TableCell>
      <TableCell className="text-right flex items-center gap-2 justify-end">
        <SquarePen className="w-6 h-6 cursor-pointer bg-green-100 text-brand p-1 rounded" />
        <Trash2 className="w-6 h-6 cursor-pointer bg-red-100 text-red-600 p-1 rounded" />
      </TableCell>
    </TableRow>
  );
};

export default AvailabilityTableRow;
