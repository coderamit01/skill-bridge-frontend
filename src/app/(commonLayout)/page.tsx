
import { getCurrentUser } from "@/services/auth.service";
import Link from "next/link";

const subjects = [
  { name: "Mathematics", emoji: "📐" },
  { name: "Science", emoji: "🔬" },
  { name: "English", emoji: "📚" },
  { name: "Coding", emoji: "💻" },
  { name: "Physics", emoji: "⚛️" },
  { name: "Design", emoji: "🎨" },
  { name: "Finance", emoji: "💹" },
  { name: "Languages", emoji: "🌍" },
];

const featuredTutors = [
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
  },
];

const steps = [
  {
    number: "01",
    emoji: "🔍",
    title: "Find a Tutor",
    description: "Browse by subject, rating, and price",
  },
  {
    number: "02",
    emoji: "📅",
    title: "Book a Session",
    description: "Pick an available time slot and confirm instantly",
  },
  {
    number: "03",
    emoji: "🚀",
    title: "Start Learning",
    description: "Attend your session and leave a review",
  },
];




export default async function Home() {

  return (
    <div className="min-h-screen bg-linear-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-violet-50 to-white py-16 md:py-28">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-100 to-transparent rounded-full -top-48 -right-48 opacity-40"></div>
          <div className="absolute w-96 h-96 bg-gradient-to-l from-violet-100 to-transparent rounded-full -bottom-48 -left-48 opacity-40"></div>
        </div>


        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 rounded-full px-4 py-2 text-sm font-bold mb-8 border border-violet-200 shadow-sm">
              🎓 1-on-1 Online Tutoring
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Learn Anything.
              <br />
              <span className="bg-gradient-to-r from-violet-600 to-violet-700 bg-clip-text text-transparent">
                From the Best.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Connect with expert tutors in Math, Science, Coding and more. Book a session in minutes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href="/tutors"
                className="rounded-full bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-10 py-4 text-base font-bold transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Find a Tutor →
              </Link>
              <Link
                href="#"
                className="rounded-full border-2 border-violet-600 hover:bg-violet-50 text-violet-600 px-10 py-4 text-base font-bold transition-all duration-200"
              >
                Become a Tutor
              </Link>
            </div>

            {/* Stats */}
            <div className="inline-flex flex-col gap-2 text-sm font-semibold text-gray-600">
              <p>✓ 500+ Tutors · ✓ 50+ Subjects · ✓ 10,000+ Sessions Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Subject Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Browse by Subject
            </h2>
            <p className="text-gray-600 text-lg">Find tutors in your area of interest</p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {subjects.map((subject) => (
              <Link
                key={subject.name}
                href={`/tutors?subject=${subject.name}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 text-gray-700 hover:from-violet-50 hover:to-violet-50 hover:text-violet-700 hover:border-violet-300 transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
              >
                <span className="text-2xl">{subject.emoji}</span>
                <span>{subject.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tutors Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Featured Tutors
              </h2>
              <p className="text-gray-600 text-lg mt-2">Learn from highly-rated experts</p>
            </div>
            <Link
              href="/tutors"
              className="text-sm text-violet-600 hover:text-violet-700 font-bold hover:gap-2 transition-all"
            >
              View All Tutors →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutors.map((tutor) => (
              <Link
                key={tutor.id}
                href={`/tutors/${tutor.id}`}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-8 bg-gradient-to-br from-violet-50 to-white group-hover:from-violet-100">
                  {/* Avatar */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-300 to-violet-200 ring-2 ring-violet-100 flex items-center justify-center text-3xl shadow-md">
                      {tutor.avatar}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors">
                    {tutor.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-semibold mb-4">
                    {tutor.experience} years experience
                  </p>

                  {/* Subject Tag */}
                  <div className="inline-block bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 rounded-full px-4 py-2 text-xs font-bold mb-4">
                    {tutor.subject}
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 mb-6 leading-relaxed line-clamp-3">
                    {tutor.bio}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    <span className="text-2xl font-bold text-gray-900">
                      ${tutor.price}
                      <span className="text-xs font-normal text-gray-500">/hr</span>
                    </span>
                    <div className="text-right">
                      <p className="text-amber-400 font-bold">★ {tutor.rating}</p>
                      <p className="text-xs text-gray-500">{tutor.reviews} reviews</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-white py-16 md:py-20" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How SkillBridge Works
            </h2>
            <p className="text-gray-600 text-lg">Get started in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 group"
              >
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-violet-600 to-transparent"></div>
                )}

                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.emoji}
                </div>
                <p className="text-sm font-bold text-violet-600 mb-3">
                  Step {step.number}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="bg-gradient-to-r from-violet-600 via-violet-600 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-white rounded-full -top-48 -right-48"></div>
          <div className="absolute w-96 h-96 bg-white rounded-full -bottom-48 -left-48"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Learning?
          </h2>
          <p className="text-violet-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of students already achieving their goals with SkillBridge.
          </p>
          <Link
            href="/tutors"
            className="inline-block rounded-full bg-white text-violet-600 px-12 py-4 text-base font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Started for Free →
          </Link>
        </div>
      </section>
    </div>
  );
}
