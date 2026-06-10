import { credentials, siteConfig } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Layered backdrop: faint grid fading out radially, plus a teal glow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(45,212,191,0.1),transparent_55%)]"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6">
        <p className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300">
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full bg-teal-400"
          />
          {siteConfig.location} · Open to graduate &amp; junior roles
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-slate-50 sm:text-7xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-2xl font-semibold text-teal-300 sm:text-3xl">
          {siteConfig.title}
        </p>
        <p className="mt-6 max-w-2xl text-xl font-medium leading-relaxed text-slate-200 sm:text-2xl">
          {siteConfig.tagline}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-400">
          {siteConfig.intro}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-teal-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-teal-400/20 transition hover:bg-teal-300 hover:shadow-teal-300/30"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
          >
            Contact Me
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
          >
            GitHub
          </a>
          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              className="rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3 font-semibold text-slate-200 transition hover:border-teal-400/60 hover:text-teal-300"
            >
              Resume
            </a>
          )}
        </div>

        <dl className="mt-14 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/60 sm:grid-cols-3">
          {credentials.map((credential) => (
            <div
              key={credential.label}
              className="bg-slate-900/80 px-5 py-4"
            >
              <dt className="text-sm font-semibold text-slate-100">
                {credential.label}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-slate-400">
                {credential.detail}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
