"use client";

import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#internships", label: "Internships" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-950/80 px-3 shadow-[0_10px_50px_rgb(0_0_0/.35)] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,rgb(30_41_59/.5),rgb(34_211_238/.28),rgb(30_41_59/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:rounded-[inherit] after:backdrop-blur-md">
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden items-center gap-7 text-sm text-slate-400 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-cyan-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="#contact"
                className="btn-sm bg-linear-to-t from-cyan-500 to-blue-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-slate-950 shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.28),0_0_32px_rgb(34_211_238/.2)] hover:bg-[length:100%_150%]"
              >
                Connect
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
