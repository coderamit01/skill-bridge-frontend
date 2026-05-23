import { StarIcon, HeartIcon, ArrowIcon } from "./Icons";
import { FaceArt } from "./FaceArt";

type Tutor = {
  name: string;
  subject: string;
  rating: number;
  reviews: number;
  price: number;
  tags: string[];
  photo: string;
  badge: string;
  face: "face-1" | "face-2" | "face-3" | "face-4";
};

const TUTORS: Tutor[] = [
  { name: "Sarah Chen",   subject: "Mathematics & Physics", rating: 4.9, reviews: 286, price: 48, tags: ["Calculus", "SAT Math"],   photo: "t-photo-2", badge: "Available now", face: "face-1" },
  { name: "Marcus Wells", subject: "Computer Science",      rating: 4.8, reviews: 412, price: 55, tags: ["Python", "Interviews"],  photo: "t-photo-1", badge: "Available now", face: "face-2" },
  { name: "Aisha Patel",  subject: "English & Writing",     rating: 5.0, reviews: 198, price: 35, tags: ["Essays", "IELTS"],       photo: "t-photo-3", badge: "Top rated",     face: "face-3" },
  { name: "Diego Romero", subject: "Spanish (Native)",      rating: 4.9, reviews: 524, price: 30, tags: ["Conversation", "DELE"],  photo: "t-photo-4", badge: "Available now", face: "face-4" },
];

export function Tutors() {
  return (
    <section id="tutors" className="section bg-[#fbfcfb]">
      <div className="max-w-310 mx-auto px-4 py-15 lg:py-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="eyebrow"><span className="dot" />Featured tutors</span>
            <h2 className="text-[44px] leading-[1.08] mt-4">
              Hand-picked experts,<br />ready when you are.
            </h2>
          </div>
          <a className="btn btn-ghost btn-icon-r self-start md:self-auto" href="#all-tutors">
            Browse all tutors
            <ArrowIcon width={16} height={16} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TUTORS.map((t) => (
            <article className="tutor-card" key={t.name}>
              <div className={`relative w-full aspect-square rounded-2.5xl overflow-hidden mb-4 ${t.photo}`}>
                <FaceArt kind={t.face} />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full text-[11.5px] font-semibold text-ink flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />{t.badge}
                </div>
                <button aria-label="Save" className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/95 grid place-items-center text-muted-2 hover:text-rose hover:scale-110 transition">
                  <HeartIcon width={16} height={16} />
                </button>
              </div>

              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-[17px] text-ink">{t.name}</h3>
                <div className="flex items-center gap-1 text-[13px] font-semibold text-ink shrink-0">
                  <StarIcon width={13} height={13} className="text-amber" />
                  {t.rating}<span className="text-muted font-normal">({t.reviews})</span>
                </div>
              </div>
              <div className="text-sm text-muted mb-3.5">{t.subject}</div>

              <div className="flex gap-1.5 mb-4 flex-wrap">
                {t.tags.map((tag) => (
                  <span key={tag} className="text-[11.5px] font-medium text-ink-2 bg-line-2 px-2.5 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between mt-auto pt-3.5 border-t border-line">
                <div className="font-display text-[20px] font-bold text-ink">
                  ${t.price}<small className="text-[13px] text-muted font-medium"> / hr</small>
                </div>
                <button className="book-btn">Book session</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
