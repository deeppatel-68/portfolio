import { skillCategories } from "@/data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            subtitle="Grouped by where I use them — strongest areas first."
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={index * 70}>
              <div className="h-full rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-colors hover:border-slate-700">
                <h3 className="mb-4 font-semibold text-slate-100">
                  {category.title}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-slate-700/80 bg-slate-800/60 px-3 py-1 text-sm text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
