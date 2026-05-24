import { Category } from "@/types/category.types";
import { BookOpen } from "lucide-react";

export function Categories({ categories }: { categories: Category[] }) {
  return (
    <section id="categories" className="section">
      <div className="max-w-310 mx-auto px-4 py-15 lg:py-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              Browse by subject
            </span>
            <h2 className="text-[44px] leading-[1.08] mt-4 max-w-145">
              Whatever you're
              <br />
              curious about.
            </h2>
          </div>
          <p className="text-[17px] max-w-115 text-muted">
            From quick homework help to long-term mastery — explore tutors
            across the eight most popular learning categories on SkillBridge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {categories.map((category) => (
            <div className="cat-card" key={category.id}>
              <div className="ico w-14 h-14 rounded-2xl grid place-items-center mb-5">
                <BookOpen />
              </div>
              <h3 className="font-display font-bold text-[17px] text-ink mb-1">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
