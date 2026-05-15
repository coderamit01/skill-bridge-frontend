import { WelcomeCard } from "@/components/common/WelcomeCard";
import { TutorDashboardStats } from "@/components/tutor/TutorDashboardStats";
import { getMe } from "@/lib/getMe";
import { getBookings } from "@/services/bookings.service";
import { IBooking } from "@/types/booking.types";

const AdminDashboard = async () => {
  const data = await getBookings();
  const bookings: IBooking[] = data?.data ?? [];
  const {data:user} = await getMe();
  const tutor: IBooking = user?.tutor;
  console.log(tutor);
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-5 ">
          <WelcomeCard />
        </div>
        <div className="col-span-12 xl:col-span-7">
          Blank 
        </div>
        <div className="col-span-12">
          <TutorDashboardStats bookings={bookings} tutor={tutor} />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
