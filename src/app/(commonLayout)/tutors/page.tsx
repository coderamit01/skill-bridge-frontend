
import PageTitle from "@/components/frontend/PageTitle";
import TutorSidebar from "@/components/public/TutorSidebar";
import TutorList from "@/components/public/TutorList";
import { getAllTutors } from "@/services/tutor.service";
import { ITutorDetails } from "@/types/tutor.types";

const allTutors = [
  {
    id: 1,
    name: "Sarah Kim",
    subject: "Mathematics",
    price: 30,
    rating: 4.9,
    reviews: 128,
    experience: 5,
    bio: "Expert in algebra, geometry, and calculus.",
    avatar: "🧑‍🏫",
    available: true,
  },
  {
    id: 2,
    name: "James Lee",
    subject: "Physics",
    price: 35,
    rating: 4.8,
    reviews: 96,
    experience: 8,
    bio: "PhD in Physics with 8 years experience.",
    avatar: "👨‍🎓",
    available: true,
  },
  {
    id: 3,
    name: "Mia Chen",
    subject: "Coding",
    price: 40,
    rating: 5.0,
    reviews: 74,
    experience: 4,
    bio: "Full-stack developer passionate about teaching.",
    avatar: "👩‍💻",
    available: false,
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    subject: "Arabic",
    price: 25,
    rating: 4.7,
    reviews: 102,
    experience: 6,
    bio: "Native Arabic speaker with teaching certification.",
    avatar: "👨‍🏫",
    available: true,
  },
  {
    id: 5,
    name: "Emma Wilson",
    subject: "English",
    price: 32,
    rating: 4.9,
    reviews: 85,
    experience: 7,
    bio: "TEFL certified with focus on communication.",
    avatar: "👩‍🏫",
    available: true,
  },
  {
    id: 6,
    name: "David Kumar",
    subject: "Chemistry",
    price: 28,
    rating: 4.6,
    reviews: 67,
    experience: 5,
    bio: "Make chemistry fun and easy to understand.",
    avatar: "👨‍🔬",
    available: true,
  },
];

export default async function TutorsPage() {
  const data = await getAllTutors();
  const tutors: ITutorDetails[] = data?.data || [];



  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <PageTitle title="Find your tutor" subText="Find the perfect tutor for your learning goals" />
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-3">
            <TutorSidebar />
          </div>
          <div className="col-span-12 lg:col-span-9">
            <TutorList tutors={tutors} />
          </div>
        </div>
      </div>
    </div >
  );
}
