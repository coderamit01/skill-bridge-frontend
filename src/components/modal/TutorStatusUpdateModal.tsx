import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookingStatus } from "@/types/booking.types";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import { updateBookingStatus } from "@/actions/bookingAction";
import { toast } from "sonner";

const TutorStatusUpdateModal = ({
  id,
  status,
  open,
  setOpen,
}: {
  id: string;
  status: BookingStatus;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const [selectedStatus, setSelectedStatus] = useState<BookingStatus>(status);
  const [isPending, startTransition] = useTransition();
  const isClosed = status === BookingStatus.CANCELLED || status === BookingStatus.COMPLETED;

  const handleUpdateStatus = () => {
    startTransition(async () => {
      try {
        const result = await updateBookingStatus(id, selectedStatus);
        if (result.success) {
          toast.success("Booking status updated!", { position: "top-right" });
          setOpen(false);
        } else {
          toast.error(result?.error ?? "Update failed", { position: "top-right" });
        }
      } catch (error: any) {
        toast.error(error.message ?? "Update failed", { position: "top-right" });
      }
    })
  }


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-sm" aria-describedby="">
        <DialogHeader>
          <DialogTitle>Update Booking Status</DialogTitle>
        </DialogHeader>
        <div className="py-3 w-full">
          <Select
            value={selectedStatus}
            onValueChange={(v) => setSelectedStatus(v as BookingStatus)}
          >
            <SelectTrigger className="w-full max-w-48">
              <SelectValue placeholder={status} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Status</SelectLabel>
                {Object.keys(BookingStatus)
                  .filter((k) => k !== BookingStatus.CANCELLED)
                  .map((k) => (
                    <SelectItem key={k} value={k}>
                      {k}
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" className="cursor-pointer">Cancel</Button>
          </DialogClose>
          <Button
            onClick={handleUpdateStatus}
            disabled={isPending || isClosed}
            className="bg-brand hover:bg-brand-dark cursor-pointer text-white"
          >
            {isPending ? "Updating..." : "Update"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default TutorStatusUpdateModal