import type { ComponentType, SVGProps } from "react";
import { SearchIcon, CalendarIcon, SparkIcon } from "./Icons";

type Step = {
  n: string;
  title: string;
  desc: string;
  bg: string;
  color: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const STEPS: Step[] = [
  {
    n: "01",
    title: "Search a Tutor",
    desc: "Filter by subject, level, price, and timezone. Read reviews and watch intro videos before you commit.",
    bg: "#effaf7", color: "#207a6e", Icon: SearchIcon,
  },
  {
    n: "02",
    title: "Book a Session",
    desc: "Pick a time that works for both of you. Pay only after your first lesson — money-back guarantee.",
    bg: "#fff4e0", color: "#d97706", Icon: CalendarIcon,
  },
  {
    n: "03",
    title: "Start Learning",
    desc: "Meet on our HD video classroom with built-in whiteboard, file sharing, and AI session recap.",
    bg: "#e8f3ff", color: "#3b82f6", Icon: SparkIcon,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="max-w-310 mx-auto px-4 py-15 lg:py-18">
        <div className="flex flex-col items-center text-center mb-14">
          <span className="eyebrow"><span className="dot" />How SkillBridge works</span>
          <h2 className="text-[44px] leading-[1.08] mt-4 max-w-[640px]">
            From browsing to breakthrough in three simple steps.
          </h2>
        </div>

        <div className="steps-connector relative grid md:grid-cols-3 gap-8 md:gap-10">
          {STEPS.map((s) => (
            <div key={s.n} className="relative z-10 text-center px-4 group">
              <div
                className="relative w-28 h-28 mx-auto mb-7 rounded-[32px] grid place-items-center bg-white border border-line shadow-md-soft transition-transform duration-300 group-hover:-translate-y-1"
                style={{ background: s.bg, color: s.color }}
              >
                <s.Icon width={40} height={40} />
                <div className="absolute -top-2.5 left-1/2 translate-x-[80px] -translate-y-0 font-display text-[13px] font-bold text-brand-500 bg-white px-2.5 py-1 rounded-full border border-brand-100">
                  Step {s.n}
                </div>
              </div>
              <h3 className="font-display font-bold text-[22px] text-ink mb-2.5">{s.title}</h3>
              <p className="text-[15px] text-muted max-w-[280px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
