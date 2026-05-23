import { Categories } from "@/components/public/Categories";
import { FinalCTA } from "@/components/public/FinalCTA";
import { Hero } from "@/components/public/Hero";
import { HowItWorks } from "@/components/public/HowItWorks";
import { Testimonials } from "@/components/public/Testimonials";
import { Tutors } from "@/components/public/Tutors";


export default async function Home() {

  return (
    <>
      <Hero />
      <Categories />
      <Tutors />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
