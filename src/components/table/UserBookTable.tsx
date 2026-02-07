import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableCell, TableRow } from "@/components/ui/table";
import { MoreHorizontalIcon } from "lucide-react";

export function UserBookTable({ book }: { book: any }) {
  const { tutor, price, session_date, start_time, end_time, status } = book;
  const date = new Date(session_date);
  return (
    <TableRow>
      <TableCell className="font-medium">{tutor?.user?.name}</TableCell>
      <TableCell>{date.toLocaleDateString()}</TableCell>
      <TableCell>{new Date(start_time).toLocaleTimeString()}</TableCell>
      <TableCell>{new Date(end_time).toLocaleTimeString()}</TableCell>
      <TableCell>৳{price}</TableCell>
      <TableCell className="capitalize">{status}</TableCell>
      {/* <TableCell className="text-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <MoreHorizontalIcon />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell> */}
    </TableRow>
  );
}
