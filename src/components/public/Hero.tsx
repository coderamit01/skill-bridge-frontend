import {
  ArrowIcon, StarIcon, HeartIcon, UsersIcon, CheckIcon, SparkIcon,
} from "./Icons";
import { FaceArt } from "./FaceArt";

export function Hero() {
  return (
    <section className="hero-glow relative overflow-hidden pt-14">
      <div className="max-w-310 mx-auto px-4 pb-20">
        <div className="wrap grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
          <div>
            <span className="eyebrow"><span className="dot" />Trusted by 50,000+ learners worldwide</span>
            <h1 className="mt-6 text-[clamp(42px,7vw,72px)] leading-[1.02] font-bold tracking-[-0.035em]">
              Find the right <span className="accent-underline">tutor.</span>
              <br />Learn at your pace.
            </h1>
            <p className="mt-6 text-[19px] text-muted max-w-130">
              Connect with vetted experts across 200+ subjects. Personalized 1-on-1 sessions, transparent pricing, and progress you can actually see.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a className="btn btn-primary btn-icon-r" href="#find">
                Find a Tutor <ArrowIcon width={18} height={18} />
              </a>
              <a className="btn btn-ghost" href="#become">Become a Tutor</a>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex">
                {(["av-1", "av-2", "av-3", "av-4", "av-5"] as const).map((c, i) => (
                  <div
                    key={c}
                    className={`w-9 h-9 rounded-full border-2 border-[#fafbfa] ${c}`}
                    style={{ marginLeft: i === 0 ? 0 : -10 }}
                  />
                ))}
              </div>
              <div className="text-sm text-muted">
                <b className="text-ink font-semibold">4.9 / 5</b> · from 12,400+ verified reviews
              </div>
            </div>
          </div>

          <div className="relative h-[560px] hidden md:block">
            <div className="absolute -right-5 -top-5 w-[100px] h-[100px] rounded-3xl bg-brand-50 rotate-[15deg] -z-10" />
            <div className="absolute right-10 top-[60px] w-[320px] bg-white rounded-3xl p-5 shadow-lg-soft border border-line">
              <div className="relative w-full aspect-[4/3] rounded-xl mb-3.5 overflow-hidden t-photo-2">
                <FaceArt kind="face-1" />
              </div>
              <h4 className="font-display font-bold text-[18px] text-ink mb-1">Sarah Chen</h4>
              <div className="text-[13.5px] text-muted mb-3">Advanced Calculus · Stanford PhD</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[13.5px] font-semibold text-ink">
                  <StarIcon width={14} height={14} className="text-amber" />
                  4.9 <span className="text-muted font-normal">(286)</span>
                </div>
                <div className="text-[13.5px] font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full">$48 / hr</div>
              </div>
              <div className="flex gap-2 mt-3.5">
                <button className="btn btn-dark btn-sm flex-1 justify-center">Book session</button>
                <button className="btn btn-ghost btn-sm !px-3">
                  <HeartIcon width={16} height={16} />
                </button>
              </div>
            </div>
            <StatCard className="left-[-10px] top-[110px]" delay="0s"
              bg="#e8f3ff" color="#3b82f6" icon={<UsersIcon width={20} height={20} />}
              value="12,400+" label="Expert tutors" />
            <StatCard className="left-[30px] bottom-[60px]" delay="-2s"
              bg="#effaf7" color="#207a6e" icon={<CheckIcon width={20} height={20} />}
              value="98%" label="Match success" />
            <StatCard className="right-[-10px] bottom-[110px]" delay="-4s"
              bg="#fff4e0" color="#d97706" icon={<SparkIcon width={20} height={20} />}
              value="200+" label="Subjects covered" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  className, bg, color, icon, value, label, delay,
}: {
  className: string; bg: string; color: string; icon: React.ReactNode;
  value: string; label: string; delay: string;
}) {
  return (
    <div
      className={`absolute bg-white border border-line rounded-2.5xl px-[18px] py-3.5 shadow-md-soft flex items-center gap-3 animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <div className="w-10 h-10 rounded-xl grid place-items-center" style={{ background: bg, color }}>
        {icon}
      </div>
      <div>
        <div className="font-display text-[18px] font-bold text-ink leading-none">{value}</div>
        <div className="text-xs text-muted mt-0.5">{label}</div>
      </div>
    </div>
  );
}
