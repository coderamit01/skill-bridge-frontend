import TopStats from "@/components/admin/TopStats";
import { WelcomeCard } from "@/components/common/WelcomeCard";
import { getAllUser } from "@/services/auth.service";
import { getBookings } from "@/services/bookings.service";

const AdminDashboard = async () => {
  const data = await getAllUser();
  const users = data || [];
  const allBbookings = await getBookings();
  const bookings = allBbookings?.data || [];

  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <WelcomeCard />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <TopStats users={users} />
      </div>
    </>
  );
};

export default AdminDashboard;
