import { Categories } from "@/components/public/Categories";
import { FinalCTA } from "@/components/public/FinalCTA";
import { Hero } from "@/components/public/Hero";
import { HowItWorks } from "@/components/public/HowItWorks";
import { Testimonials } from "@/components/public/Testimonials";
import { Tutors } from "@/components/public/Tutors";
import { getAllCategory } from "@/services/category.service";
import { getAllTutors } from "@/services/tutor.service";

export default async function Home() {
  const categoryRes = await getAllCategory();
  const TutorRes = await getAllTutors();

  const categories = categoryRes?.data ?? null;
  const tutors = TutorRes?.data ?? null;

  return (
    <>
      <Hero />
      <Categories categories={categories} />
      <Tutors tutors={tutors} />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
