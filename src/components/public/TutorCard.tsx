import { ITutorDetails } from "@/types/tutor.types"
import Link from "next/link"

const TutorCard = ({ tutor }: { tutor: ITutorDetails }) => {
  const { id, name, image, user, hourlyRate, yearsExperience, averageRating, isAvailable, subjects } = tutor;

  return (
    <Link
      key={tutor.id}
      href={`/tutors/${id}`}
      className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
    >
      <div className="flex gap-4">
        {image ? (
          <div className="w-14 h-14 rounded-full bg-violet-100 ring-2 ring-violet-100 shrink-0 flex items-center justify-center text-2xl">
            {image}
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-[#25a5a21c] text-brand flex items-center justify-center text-2xl font-semibold">
            {name.charAt(0).toUpperCase()}
          </div>
        )}


        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-gray-900">
            {name}
          </h3>
          <p className="text-xs text-gray-500 capitalize">
            {yearsExperience} years experience
          </p>

          {subjects.length > 0 && (
            subjects.map((sub) => (
              <div className="inline-block bg-violet-50 text-violet-700 rounded-full px-3 py-1 text-xs font-medium my-2">
                {sub?.category?.name}
              </div>
            ))
          )}
          {isAvailable && (
            <div className="inline-block ml-2 bg-green-50 text-green-600 rounded-full px-2.5 py-1 text-xs font-medium">
              Available
            </div>
          )}
          <p className="text-sm text-gray-600 line-clamp-2">
            {user?.bio}
          </p>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <span className="text-lg font-bold text-gray-900">
              ${hourlyRate}
              <span className="text-xs font-normal text-gray-500">/hr</span>
            </span>
            <span className="text-xs text-gray-500 shrink-0">
              ★ {averageRating} ·
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TutorCard