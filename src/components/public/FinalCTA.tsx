import { ArrowIcon } from "./Icons";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="final-cta-panel relative mx-4 md:mx-8 rounded-4xl px-7 md:px-16 py-14 md:py-20 overflow-hidden text-white">
        {/* decorative shapes */}
        <svg className="absolute opacity-[0.14] text-white top-10 right-20 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />
        </svg>
        <svg className="absolute opacity-20 text-white bottom-20 right-52 w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.5l2.9 6.4 7 .7-5.3 4.7 1.6 6.9L12 17.8 5.8 21.2l1.6-6.9L2.1 9.6l7-.7L12 2.5z" />
        </svg>

        <div className="relative z-10 max-w-[760px]">
          <span className="eyebrow !bg-white/15 !border-white/25 !text-white">
            <span className="dot !bg-white" />
            Free 25-minute trial lesson
          </span>
          <h2 className="text-white mt-5 text-[clamp(36px,5vw,56px)] leading-[1.05] font-bold tracking-[-0.03em]">
            Your next breakthrough is one session away.
          </h2>
          <p className="text-[18px] text-white/85 max-w-[540px] mt-4 mb-9">
            Join 50,000+ learners who found a tutor they actually love. No subscriptions, no contracts — just real progress, paid by the hour.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a className="btn btn-icon-r bg-white !text-brand-700 px-7 py-4 text-[16px] font-bold hover:-translate-y-px hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,.2)]" href="#start">
              Get Started Today
              <ArrowIcon width={18} height={18} />
            </a>
            <a className="text-white font-semibold text-[15px] px-6 py-4 border border-white/30 rounded-full transition-colors hover:bg-white/10" href="#how">
              How it works
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-12 pt-8 border-t border-white/20">
            {[
              ["50K+", "Active learners"],
              ["12.4K", "Verified tutors"],
              ["4.9★", "Average rating"],
              ["200+", "Subjects"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-[36px] font-bold leading-none">{n}</div>
                <div className="text-[13.5px] text-white/80 mt-1.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
