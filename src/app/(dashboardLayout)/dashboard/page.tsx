
import StudentDashboardStats from "@/components/student/StudentDashboardStats";
import { WelcomeCard } from "@/components/common/WelcomeCard";

export default function StudentDashboard() {

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-5 ">
          <WelcomeCard />
        </div>
        <div className="col-span-12 xl:col-span-7">
          <StudentDashboardStats />
        </div>
      </div>

    </>
  );
}
