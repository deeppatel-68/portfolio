import { experience } from "@/data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked"
            subtitle="Professional roles across consulting, energy infrastructure, and product development."
          />
        </Reveal>
        <ol className="relative space-y-6 border-l border-slate-800 pl-8">
          {experience.map((role, index) => (
            <li key={`${role.company}-${role.role}`} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[2.42rem] top-7 h-3 w-3 rounded-full ring-4 ring-[#0b1120] ${
                  role.current ? "bg-teal-400" : "bg-slate-600"
                }`}
              />
              <Reveal delay={index * 80}>
                <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition-colors hover:border-slate-700">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold text-slate-50">
                      {role.company}
                    </h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-xs ${
                        role.current
                          ? "border-teal-400/40 bg-teal-400/10 text-teal-300"
                          : "border-slate-700 text-slate-400"
                      }`}
                    >
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-teal-300">{role.role}</p>
                  <p className="mt-3 text-slate-300">{role.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-sm leading-relaxed text-slate-400"
                      >
                        <span aria-hidden="true" className="text-teal-400">
                          ▸
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
