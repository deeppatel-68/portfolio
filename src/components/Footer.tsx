import { navLinks, siteConfig } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:px-6">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-teal-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-teal-300"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 transition-colors hover:text-teal-300"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-slate-500 transition-colors hover:text-teal-300"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-slate-600">
          © {new Date().getFullYear()} {siteConfig.name} · Built with Next.js
          and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
