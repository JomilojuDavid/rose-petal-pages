import { useEffect, useRef } from "react";
import { EPISTLE } from "../../data/mock";

export function ForYouTab() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="epistle-bg min-h-screen pb-32">
      <div className="mx-auto max-w-[640px] px-7 pt-14 sm:px-10">
        <p className="fade-up mb-3 text-[11px] uppercase tracking-[0.32em] text-pink-500/90">
          A letter — for you only
        </p>
        <h1
          className="fade-up mb-3 font-serif text-5xl leading-[1.05] tracking-tight text-neutral-900 sm:text-6xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {EPISTLE.title}
        </h1>
        <p className="fade-up mb-12 text-sm italic text-pink-700/70">
          {EPISTLE.dateline}
        </p>

        <div
          className="flex flex-col gap-7"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          {EPISTLE.paragraphs.map((p, i) => (
            <p
              key={i}
              className="fade-up text-[19px] leading-[1.85] text-neutral-800"
            >
              {p}
            </p>
          ))}
          <p className="fade-up mt-6 text-right text-lg italic text-pink-700/80">
            {EPISTLE.signoff}
          </p>
        </div>

        <div className="fade-up mt-16 flex items-center justify-center gap-3 opacity-70">
          <span className="h-px w-12 bg-pink-300" />
          <span className="text-pink-500">♥</span>
          <span className="h-px w-12 bg-pink-300" />
        </div>
      </div>
    </div>
  );
}
