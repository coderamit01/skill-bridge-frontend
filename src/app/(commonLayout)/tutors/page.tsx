import PageTitle from "@/components/frontend/PageTitle";
import TutorSidebar from "@/components/public/TutorSidebar";
import TutorList from "@/components/public/TutorList";
import { getAllTutors } from "@/services/tutor.service";
import { ITutorDetails } from "@/types/tutor.types";
import SearchTutor from "@/components/public/SearchTutor";
import { getAllCategory } from "@/services/category.service";
import { Category } from "@/types/category.types";

export default async function TutorsPage() {
  const data = await getAllTutors();
  const tutors: ITutorDetails[] = data?.data || [];

  const categoryData = await getAllCategory();
  const categories: Category[] = categoryData?.data || [];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <PageTitle
        title="Find your tutor"
        subText="Find the perfect tutor for your learning goals"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <TutorSidebar categories={categories} />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <SearchTutor />
            <TutorList tutors={tutors} />
          </div>
        </div>
      </div>
    </div>
  );
}
