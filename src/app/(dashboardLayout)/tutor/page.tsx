
import { WelcomeCard } from "@/components/common/WelcomeCard";
import { TutorDashboardStats } from "@/components/tutor/TutorDashboardStats";
export default async function AdminDashboard() {

  return (
     <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-5 ">
          <WelcomeCard />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <TutorDashboardStats />
        </div>
      </div>
    </>
  );
}
