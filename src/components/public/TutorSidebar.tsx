"use client";
import { Category } from "@/types/category.types";
import { Field } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

const TutorSidebar = ({ categories }: { categories: Category[] }) => {
  return (
    <aside className="hidden lg:block w-64">
      <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 p-6 space-y-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Subject</h3>
          <div className="space-y-3">
            {categories.length > 0 &&
              categories.map((category) => (
                <Field orientation="horizontal">
                  <Checkbox id={category.id} />
                  <Label htmlFor={category.id}>{category.name}</Label>
                </Field>
              ))}
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Price Range</h3>
          <div className="space-y-3">
            <input type="range" min="0" max="100" className="w-full" />
            <p className="text-sm text-gray-600">$0 - $100</p>
          </div>
        </div>

        {/*
        <div className="border-t pt-6">
          <h3 className="font-semibold text-gray-900 mb-4">Minimum Rating</h3>
          <div className="space-y-2">
            {[
              { label: "Any", value: 0 },
              { label: "4.0+", value: 4.0 },
              { label: "4.5+", value: 4.5 },
              { label: "5.0 only", value: 5.0 },
            ].map((option) => (
              <label
                key={option.value}
                className="flex items-center gap-2 cursor-pointer"
              >
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
        )} */}
      </div>
    </aside>
  );
};

export default TutorSidebar;
