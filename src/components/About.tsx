import { about } from "@/data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Technical depth, business context"
          />
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-slate-300">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </Reveal>
          <Reveal delay={120}>
            <ul className="space-y-3.5 rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              {about.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-slate-300">
                  <span aria-hidden="true" className="mt-1 text-teal-400">
                    ▸
                  </span>
                  {highlight}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
