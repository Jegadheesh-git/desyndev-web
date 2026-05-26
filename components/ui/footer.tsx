import Logo from "./logo";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#internships", label: "Internships" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-md text-sm text-slate-500">
            Independent software studio building analytics platforms, full-stack systems, and technical learning initiatives from Tamil Nadu, India.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
