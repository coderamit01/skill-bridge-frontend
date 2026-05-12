import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookingStatus } from "@/types/booking.types";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Edit } from "lucide-react";
import { toast } from "sonner";
import { updateBookingStatus } from "@/services/bookings.service";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export const BookingStatusModal = ({ id, status }: { id: string, status: BookingStatus }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<BookingStatus>(status);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const data = await updateBookingStatus({ id, status: value });
      console.log(data);
      toast.success("Status updated successfully", { position: "top-right" });
      queryClient.invalidateQueries({ queryKey: ["userBookings"] });
      setOpen(false);
    } catch {
      toast.error("Failed to update status", { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {
        status === BookingStatus.COMPLETED || status === BookingStatus.CANCELLED ? (<Edit className="h-5 w-5 cursor-pointer opacity-20" />) : (
          <DialogTrigger>
            <Tooltip>
              <TooltipTrigger asChild>
                <Edit className="h-5 w-5 cursor-pointer" />
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Update Status</p>
              </TooltipContent>
            </Tooltip>
          </DialogTrigger>
        )
      }

      <DialogContent className="sm:max-w-sm" aria-describedby="">
        <DialogHeader>
          <DialogTitle>Update Booking Status</DialogTitle>
        </DialogHeader>
        <div className="py-3 w-full">
          <Select value={value} onValueChange={(v) => setValue(v as BookingStatus)}>
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder={status} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                {
                  Object.keys(BookingStatus).filter(k => k !== BookingStatus.COMPLETED).map((k) => (
                    <SelectItem key={k} value={k}>{k}</SelectItem>
                  ))
                }
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleUpdate} disabled={loading} className="bg-brand hover:bg-brand-dark">
            {loading ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
