"use client";

import Link from "next/link";
import { Search, Sliders } from "lucide-react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

export default function TutorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 50]);
  const [minRating, setMinRating] = useState(0);
  const [availableOnly, setAvailableOnly] = useState(false);
  const [sortBy, setSortBy] = useState("top-rated");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const subjects = Array.from(new Set(allTutors.map((t) => t.subject)));

  // Filter and sort tutors
  const filteredTutors = useMemo(() => {
    let result = allTutors.filter((tutor) => {
      const matchesSearch =
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.subject.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSubject = !selectedSubject || tutor.subject === selectedSubject;
      const matchesPrice = tutor.price >= priceRange[0] && tutor.price <= priceRange[1];
      const matchesRating = tutor.rating >= minRating;
      const matchesAvailability = !availableOnly || tutor.available;

      return (
        matchesSearch &&
        matchesSubject &&
        matchesPrice &&
        matchesRating &&
        matchesAvailability
      );
    });

    // Sort
    if (sortBy === "top-rated") {
      result.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "most-reviewed") {
      result.sort((a, b) => b.reviews - a.reviews);
    }

    return result;
  }, [searchTerm, selectedSubject, priceRange, minRating, availableOnly, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-violet-600 to-violet-700 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Browse Tutors</h1>
          <p className="text-violet-100 text-lg">Find the perfect tutor for your learning goals</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Subject</h3>
                <div className="space-y-3">
                  {subjects.map((subject) => (
                    <label key={subject} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedSubject === subject}
                        onChange={() =>
                          setSelectedSubject(
                            selectedSubject === subject ? null : subject
                          )
                        }
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{subject}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Price per Hour</h3>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], parseInt(e.target.value)])
                    }
                    className="w-full"
                  />
                  <p className="text-sm text-gray-600">
                    ${priceRange[0]} - ${priceRange[1]}
                  </p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Minimum Rating</h3>
                <div className="space-y-2">
                  {[
                    { label: "Any", value: 0 },
                    { label: "4.0+", value: 4.0 },
                    { label: "4.5+", value: 4.5 },
                    { label: "5.0 only", value: 5.0 },
                  ].map((option) => (
                    <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === option.value}
                        onChange={() => setMinRating(option.value)}
                        className="border-gray-300"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-t pt-6">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={availableOnly}
                    onChange={(e) => setAvailableOnly(e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-700">Show Available Only</span>
                </label>
              </div>

              {(selectedSubject ||
                priceRange[0] !== 0 ||
                priceRange[1] !== 50 ||
                minRating !== 0 ||
                availableOnly) && (
                  <button
                    onClick={() => {
                      setSelectedSubject(null);
                      setPriceRange([0, 50]);
                      setMinRating(0);
                      setAvailableOnly(false);
                    }}
                    className="w-full text-center text-xs text-gray-500 hover:text-gray-700 py-2"
                  >
                    Clear All Filters
                  </button>
                )}
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters Button */}
            <div className="lg:hidden mb-6">
              <button
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium"
              >
                <Sliders size={16} />
                Filters
              </button>
            </div>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
              <div className="lg:hidden mb-6 bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">Subject</h3>
                  <div className="space-y-3">
                    {subjects.map((subject) => (
                      <label
                        key={subject}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSubject === subject}
                          onChange={() =>
                            setSelectedSubject(
                              selectedSubject === subject ? null : subject
                            )
                          }
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm text-gray-700">{subject}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Search & Sort */}
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  type="text"
                  placeholder="Search by name or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-xl border-gray-200 focus:ring-violet-400"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <p className="text-xs text-gray-500">
                  {filteredTutors.length} tutors found
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-white"
                >
                  <option value="top-rated">Top Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="most-reviewed">Most Reviewed</option>
                </select>
              </div>
            </div>

            {/* Tutors Grid */}
            {filteredTutors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTutors.map((tutor) => (
                  <Link
                    key={tutor.id}
                    href={`/tutors/${tutor.id}`}
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="flex gap-4">
                      {/* Avatar */}
                      <div className="w-14 h-14 rounded-full bg-violet-100 ring-2 ring-violet-100 shrink-0 flex items-center justify-center text-2xl">
                        {tutor.avatar}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-gray-900">
                          {tutor.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {tutor.experience} years experience
                        </p>

                        {/* Subject Tag */}
                        <div className="inline-block bg-violet-50 text-violet-700 rounded-full px-3 py-1 text-xs font-medium my-2">
                          {tutor.subject}
                        </div>

                        {/* Availability Badge */}
                        {tutor.available && (
                          <div className="inline-block ml-2 bg-green-50 text-green-600 rounded-full px-2.5 py-1 text-xs font-medium">
                            Available
                          </div>
                        )}

                        {/* Bio */}
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {tutor.bio}
                        </p>

                        {/* Footer */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                          <span className="text-lg font-bold text-gray-900">
                            ${tutor.price}
                            <span className="text-xs font-normal text-gray-500">/hr</span>
                          </span>
                          <span className="text-xs text-gray-500 shrink-0">
                            ★ {tutor.rating} · {tutor.reviews}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg mb-2">No tutors found</p>
                <p className="text-gray-500 text-sm">
                  Try adjusting your filters or search terms
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
