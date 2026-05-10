import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { BookingStatus } from "@/types/booking.types";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Edit } from "lucide-react";

export const BookingStatusModal = ({ status }: { status: string }) => {
  return (
    <Dialog>
      <form>
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
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Update Booking Status</DialogTitle>
          </DialogHeader>
          <div className="py-3">
            <Select>
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder={status} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Status</SelectLabel>
                  <SelectItem value={BookingStatus.CANCELLED}>CANCELLED</SelectItem>
                  <SelectItem value={BookingStatus.CONFIRMED}>CONFIRMED</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
