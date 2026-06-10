import { contact, siteConfig } from "@/data/portfolioData";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-slate-800/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 px-7 py-14 text-center sm:px-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(45,212,191,0.08),transparent_60%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-400">
                Contact
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
                {contact.heading}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                {contact.message}
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-400/20 transition hover:bg-teal-300 hover:shadow-teal-300/30"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
                >
                  LinkedIn
                </a>
                {siteConfig.resumeUrl && (
                  <a
                    href={siteConfig.resumeUrl}
                    className="rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
                  >
                    Resume
                  </a>
                )}
              </div>

              <p className="mt-7 text-sm text-slate-500">
                Based in {siteConfig.location} · Replies fastest by email
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
