import { StarIcon } from "./Icons";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
  av: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I went from failing AP Calculus to scoring a 5 in four months. Sarah broke down every concept until it clicked. SkillBridge changed my college trajectory.",
    name: "Maya Thompson",
    role: "High school senior · Chicago",
    rating: 5,
    av: "av-3",
  },
  {
    quote:
      "Booked Marcus to prep for my Google interview and landed the offer. The mock interviews, the feedback, the structured plan — worth every dollar.",
    name: "James Okafor",
    role: "Software Engineer · Toronto",
    rating: 5,
    av: "av-2",
  },
  {
    quote:
      "My daughter actually asks to do her Spanish lessons now. Diego is patient, fun, and her accent has improved more in 8 weeks than two years of school.",
    name: "Priya Sharma",
    role: "Parent · London",
    rating: 5,
    av: "av-5",
  },
];

export function Testimonials() {
  return (
    <section className="section test-bg">
      <div className="max-w-310 mx-auto px-4 py-15 lg:py-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="eyebrow"><span className="dot" />Student stories</span>
            <h2 className="text-[44px] leading-[1.08] mt-4">
              Real progress.<br />Real students.
            </h2>
          </div>
          <p className="text-[17px] max-w-[460px] text-muted">
            Over 50,000 learners trust SkillBridge for tutoring that actually moves the needle. Here's what some of them have to say.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border border-line shadow-sm-soft flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg-soft"
            >
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <StarIcon key={k} width={16} height={16} />
                ))}
              </div>
              <p className="font-display text-[18px] leading-snug text-ink font-medium tracking-tight flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-line">
                <div className={`w-11 h-11 rounded-full shrink-0 ${t.av}`} />
                <div>
                  <div className="font-display text-[15px] font-bold text-ink leading-tight">{t.name}</div>
                  <div className="text-[13px] text-muted mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
