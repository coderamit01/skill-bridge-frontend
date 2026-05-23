import type { ComponentType, SVGProps } from "react";
import {
  MathIcon, LanguageIcon, CodeIcon, MusicIcon,
  BeakerIcon, BriefcaseIcon, CapIcon, PaletteIcon,
} from "./Icons";

type Cat = {
  name: string;
  count: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  bg: string;
  color: string;
};

const CATEGORIES: Cat[] = [
  { name: "Mathematics",      count: "1,840 tutors", Icon: MathIcon,      bg: "#e8f3ff", color: "#3b82f6" },
  { name: "Languages",        count: "2,210 tutors", Icon: LanguageIcon,  bg: "#effaf7", color: "#207a6e" },
  { name: "Computer Science", count: "1,560 tutors", Icon: CodeIcon,      bg: "#f3e8ff", color: "#9333ea" },
  { name: "Music",            count: "720 tutors",   Icon: MusicIcon,     bg: "#fff4e0", color: "#d97706" },
  { name: "Sciences",         count: "1,320 tutors", Icon: BeakerIcon,    bg: "#fee2e2", color: "#dc2626" },
  { name: "Business",         count: "980 tutors",   Icon: BriefcaseIcon, bg: "#e0f2fe", color: "#0284c7" },
  { name: "Test Prep",        count: "1,100 tutors", Icon: CapIcon,       bg: "#dcfce7", color: "#16a34a" },
  { name: "Arts & Design",    count: "640 tutors",   Icon: PaletteIcon,   bg: "#fef3c7", color: "#ca8a04" },
];

export function Categories() {
  return (
    <section id="categories" className="section">
      <div className="max-w-310 mx-auto px-4 py-15 lg:py-18">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="eyebrow"><span className="dot" />Browse by subject</span>
            <h2 className="text-[44px] leading-[1.08] mt-4 max-w-[580px]">
              Whatever you're<br />curious about.
            </h2>
          </div>
          <p className="text-[17px] max-w-[460px] text-muted">
            From quick homework help to long-term mastery — explore tutors across the eight most popular learning categories on SkillBridge.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {CATEGORIES.map((c) => (
            <a className="cat-card" href="#" key={c.name}>
              <div
                className="ico w-14 h-14 rounded-2xl grid place-items-center mb-5"
                style={{ background: c.bg, color: c.color }}
              >
                <c.Icon width={26} height={26} />
              </div>
              <h3 className="font-display font-bold text-[17px] text-ink mb-1">{c.name}</h3>
              <div className="text-[13.5px] text-muted">{c.count}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
