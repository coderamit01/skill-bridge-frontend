"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Clock, BookOpen, Users } from "lucide-react";

const allTutors = [
  {
    id: 1,
    name: "Sarah Kim",
    headline: "Mathematics Expert · 5 Years Experience",
    subjects: ["Mathematics", "Algebra", "Geometry"],
    price: 30,
    rating: 4.9,
    reviewCount: 128,
    experience: 5,
    bio: "I'm a passionate mathematics educator with 5 years of experience teaching students from diverse backgrounds. I specialize in breaking down complex algebraic concepts into simple, digestible pieces. My approach focuses on building a strong foundation while making mathematics enjoyable and relevant to real-world applications.",
    available: true,
    avatar: "🧑‍🏫",
    slots: [
      { date: "May 10", time: "10:00 AM", duration: "1 hour", available: true },
      { date: "May 10", time: "2:00 PM", duration: "1 hour", available: true },
      { date: "May 11", time: "9:00 AM", duration: "1 hour", available: false },
      { date: "May 12", time: "11:00 AM", duration: "1 hour", available: true },
    ],
    reviewsList: [
      {
        author: "Ahmed R.",
        rating: 5,
        text: "Sarah is an amazing tutor! She has a unique ability to make complex topics simple. Highly recommend!",
        date: "2 weeks ago",
      },
      {
        author: "Priya S.",
        rating: 5,
        text: "Very patient and knowledgeable. I improved my grade from C to A in one month.",
        date: "1 month ago",
      },
      {
        author: "Tom W.",
        rating: 4,
        text: "Great session. Clear explanations and good pace. Would book again.",
        date: "2 months ago",
      },
    ],
  },
  {
    id: 2,
    name: "James Lee",
    headline: "PhD in Physics · 8 Years Teaching Experience",
    subjects: ["Physics", "Mathematics", "Calculus"],
    price: 35,
    rating: 4.8,
    reviewCount: 96,
    experience: 8,
    bio: "I'm a former university professor with a PhD in Theoretical Physics. I specialize in breaking down complex concepts into simple, visual explanations. Whether you're preparing for exams or building a deep understanding, I'll guide you every step of the way.",
    available: true,
    avatar: "👨‍🎓",
    slots: [
      { date: "May 10", time: "3:00 PM", duration: "1 hour", available: true },
      { date: "May 11", time: "10:00 AM", duration: "1 hour", available: true },
      { date: "May 12", time: "2:00 PM", duration: "1 hour", available: false },
      { date: "May 13", time: "11:00 AM", duration: "1 hour", available: true },
    ],
    reviewsList: [
      {
        author: "Ahmed R.",
        rating: 5,
        text: "Dr. Lee explained quantum mechanics in a way I actually understood. Highly recommend!",
        date: "3 weeks ago",
      },
      {
        author: "Priya S.",
        rating: 5,
        text: "Exceptional tutor with deep knowledge and patience.",
        date: "1 month ago",
      },
    ],
  },
  {
    id: 3,
    name: "Mia Chen",
    headline: "Full-Stack Developer · 4 Years Experience",
    subjects: ["Coding", "JavaScript", "React"],
    price: 40,
    rating: 5.0,
    reviewCount: 74,
    experience: 4,
    bio: "I'm a passionate full-stack developer who loves teaching others to code. I have real-world experience building applications and can teach you practical skills that actually matter in the industry.",
    available: false,
    avatar: "👩‍💻",
    slots: [],
    reviewsList: [],
  },
];

const renderStars = (rating: number) => {
  return "★".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "✦" : "");
};

export default function TutorDetailsPage() {
  const params = useParams();
  const tutorId = parseInt(params.id as string);
  const tutor = allTutors.find((t) => t.id === tutorId);
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);

  if (!tutor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">Tutor not found</p>
          <Link href="/tutors" className="text-violet-600 hover:text-violet-700 font-medium">
            ← Back to Tutors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Header with gradient */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <Link
            href="/tutors"
            className="text-violet-100 hover:text-white transition-colors inline-flex items-center gap-2 mb-6"
          >
            ← Back to Tutors
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tutor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="p-8 bg-gradient-to-br from-violet-50 to-white">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-200 to-violet-100 ring-4 ring-violet-100 flex items-center justify-center text-6xl shrink-0 shadow-md">
                    {tutor.avatar}
                  </div>
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">
                      {tutor.name}
                    </h1>
                    <p className="text-gray-600 font-medium mb-4">{tutor.headline}</p>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl text-amber-400">★</span>
                        <div>
                          <p className="font-bold text-gray-900">{tutor.rating}</p>
                          <p className="text-xs text-gray-500">{tutor.reviewCount} reviews</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={20} className="text-violet-600" />
                        <div>
                          <p className="font-bold text-gray-900">{tutor.experience}</p>
                          <p className="text-xs text-gray-500">years exp.</p>
                        </div>
                      </div>
                      {tutor.available && (
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div>
                            <p className="font-bold text-green-600">Available</p>
                            <p className="text-xs text-gray-500">Now</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Subject Tags */}
                    <div className="flex flex-wrap gap-2">
                      {tutor.subjects.map((subject) => (
                        <div
                          key={subject}
                          className="inline-block bg-gradient-to-r from-violet-100 to-violet-50 text-violet-700 rounded-full px-4 py-2 text-sm font-semibold shadow-sm"
                        >
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div className="border-t border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen size={24} className="text-violet-600" />
                  About Me
                </h2>
                <p className="text-gray-700 leading-relaxed text-base">
                  {tutor.bio}
                </p>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-amber-400 text-2xl">★</span>
                Student Reviews
              </h2>

              {tutor.reviewsList && tutor.reviewsList.length > 0 ? (
                <div className="space-y-4">
                  {tutor.reviewsList.map((review, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-300 to-violet-200 flex items-center justify-center text-xl shrink-0">
                          👤
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-4">
                            <h4 className="font-bold text-gray-900">
                              {review.author}
                            </h4>
                            <span className="text-xs text-gray-500 flex-shrink-0">
                              {review.date}
                            </span>
                          </div>
                          <p className="text-sm text-amber-400 mt-1 font-semibold">
                            {"★".repeat(review.rating)}
                            <span className="text-gray-300 ml-1">{"★".repeat(5 - review.rating)}</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-dashed border-gray-200">
                  <p className="text-gray-500 text-base font-medium">
                    No reviews yet. Be the first to book a session!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Booking Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white p-8">
                <p className="text-violet-100 text-sm font-medium mb-2">Price per hour</p>
                <p className="text-5xl font-bold mb-1">${tutor.price}</p>
                <p className="text-violet-200 text-sm flex items-center gap-1">
                  <span className="text-lg">★</span> {tutor.rating} · {tutor.reviewCount} reviews
                </p>
              </div>

              <div className="p-6 space-y-6">
                {/* Time Slots */}
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-violet-600" />
                    Available Time Slots
                  </h3>

                  {tutor.slots && tutor.slots.length > 0 ? (
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {tutor.slots.map((slot, idx) => (
                        <button
                          key={idx}
                          onClick={() =>
                            setSelectedSlot(slot.available ? idx : null)
                          }
                          disabled={!slot.available}
                          className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 text-left flex items-center gap-2 ${selectedSlot === idx
                              ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white shadow-lg shadow-violet-200"
                              : slot.available
                                ? "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 border border-gray-200"
                                : "bg-gray-50 text-gray-400 line-through cursor-not-allowed opacity-60"
                            }`}
                        >
                          <Clock size={16} />
                          <span>{slot.date} · {slot.time}</span>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                      <p className="text-gray-500 text-sm">No available slots</p>
                    </div>
                  )}
                </div>

                {/* Book Button */}
                <button
                  disabled={selectedSlot === null || !tutor.available}
                  className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 ${selectedSlot !== null && tutor.available
                      ? "bg-gradient-to-r from-violet-600 to-violet-700 text-white hover:shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  <BookOpen size={20} />
                  Book Session
                </button>

                <p className="text-xs text-center text-gray-500 font-medium">
                  💳 No charge until session is confirmed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
