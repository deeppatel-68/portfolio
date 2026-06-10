import { projects, type ProjectCategory } from "@/data/portfolioData";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

// Tailwind needs literal class names, so the per-category accents live here.
const categoryAccents: Record<ProjectCategory, { dot: string; text: string }> =
  {
    Geospatial: { dot: "bg-teal-400", text: "text-teal-300" },
    "Machine Learning": { dot: "bg-violet-400", text: "text-violet-300" },
    Frontend: { dot: "bg-sky-400", text: "text-sky-300" },
    "AI & Automation": { dot: "bg-amber-400", text: "text-amber-300" },
    "Systems & OOP": { dot: "bg-rose-400", text: "text-rose-300" },
  };

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M18 13.5V18a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18V9a1.5 1.5 0 011.5-1.5H12"
      />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Work that shows how I build"
            subtitle="Professional, capstone, and personal projects — each one here because it proves something specific."
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const accent = categoryAccents[project.category];
            return (
              <Reveal
                key={project.name}
                delay={(index % 2) * 80}
                className={project.featured ? "md:col-span-2" : ""}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-slate-950/50 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide ${accent.text}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                      />
                      {project.category}
                    </span>
                    {project.context && (
                      <span className="text-xs text-slate-500">
                        {project.context}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
                    {project.name}
                  </h3>

                  <p
                    className={`mt-3 leading-relaxed text-slate-300 ${
                      project.featured ? "max-w-3xl" : ""
                    }`}
                  >
                    {project.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-slate-700/80 bg-slate-800/60 px-2.5 py-0.5 text-xs text-slate-300"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    <span className="font-medium text-slate-300">
                      Demonstrates:
                    </span>{" "}
                    {project.demonstrates}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3.5 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-teal-400/60 hover:text-teal-300"
                      >
                        {link.label}
                        <ExternalLinkIcon />
                      </a>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
