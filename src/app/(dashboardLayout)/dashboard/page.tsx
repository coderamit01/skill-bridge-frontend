import { Card } from "@/components/ui/card";
import { bookingService } from "@/service/bookings.service";

export default async function AdminDashboard() {
  const { data } = await bookingService.getAllBookings();
  const totalPrice = parseFloat(data.reduce((sum: number, item: any) => sum += item.price, 0)).toFixed(2);
  const completeSession = await data.filter((item: any) => item.status === 'COMPLETED');
  return (
    <div className="w-2/3 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">{data.length}</h2>
          <h6 className="text-slate-700">Total Session</h6>
        </Card>
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">৳{totalPrice}</h2>
          <h6 className="text-slate-700">Total Price</h6>
        </Card>
        <Card className="p-5 flex flex-col space-y-1">
          <h2 className="text-3xl font-bold text-black mb-0">{completeSession.length}</h2>
          <h6 className="text-slate-700">Complete Session</h6>
        </Card>
      </div>
    </div>

  );
}
