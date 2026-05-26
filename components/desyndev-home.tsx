"use client";

import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowUpRight,
  FiBookOpen,
  FiCloud,
  FiCpu,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiServer,
  FiTerminal,
  FiUsers,
} from "react-icons/fi";
import {
  SiDjango,
  SiDocker,
  SiGithub,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const fadeUp = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

const capabilities = [
  {
    icon: FiActivity,
    title: "Sports Analytics",
    description: "Match data pipelines, performance dashboards, and decision-support interfaces for cricket and sports programs.",
  },
  {
    icon: FiCpu,
    title: "AI-Assisted Systems",
    description: "Practical automation for recall, research, content workflows, and internal productivity without vague platform claims.",
  },
  {
    icon: FiLayers,
    title: "Full Stack Platforms",
    description: "Modern web applications with clean architecture, reliable APIs, structured data, and maintainable deployment paths.",
  },
  {
    icon: FiBookOpen,
    title: "Training & Learning",
    description: "Internship programs and technical initiatives that help students ship real software with engineering discipline.",
  },
];

const projects = [
  {
    title: "Cricket Analytics Platform",
    status: "Active build",
    description: "A cricket intelligence system for collecting match events, analyzing player patterns, and visualizing performance signals.",
    stack: ["React", "Python", "PostgreSQL", "Analytics"],
    metric: "Live scoring + insights",
  },
  {
    title: "Museum Management System",
    status: "Prototype",
    description: "Operational software for cataloging collections, managing visitor workflows, and organizing institutional data.",
    stack: ["Django", "REST APIs", "Tailwind", "PostgreSQL"],
    metric: "Collections + operations",
  },
  {
    title: "Recall App",
    status: "In development",
    description: "A focused productivity product for memory, notes, and structured retrieval across personal knowledge workflows.",
    stack: ["React", "AI APIs", "Docker", "UX Systems"],
    metric: "Capture + retrieve",
  },
  {
    title: "AI Productivity Systems",
    status: "Research",
    description: "Small, serious tools for automating repetitive technical work, summarizing data, and supporting developer output.",
    stack: ["Python", "AI APIs", "GitHub", "Automation"],
    metric: "Workflow acceleration",
  },
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "Django", icon: SiDjango },
  { name: "Python", icon: SiPython },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS", icon: FiCloud },
  { name: "REST APIs", icon: FiServer },
  { name: "Docker", icon: SiDocker },
  { name: "GitHub", icon: SiGithub },
  { name: "AI APIs", icon: FiCpu },
];

function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div {...fadeUp} className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
        <span className="h-px w-8 bg-cyan-300/40" />
        {eyebrow}
        <span className="h-px w-8 bg-cyan-300/40" />
      </div>
      <h2 className="font-nacelle text-3xl font-semibold text-white md:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-400">{children}</p>
    </motion.div>
  );
}

function DashboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
      className="relative mx-auto mt-14 max-w-5xl"
    >
      <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgb(34_211_238/.18),transparent_34%),radial-gradient(circle_at_20%_80%,rgb(59_130_246/.12),transparent_30%)] blur-2xl" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-950/30">
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="hidden rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200 sm:block">
            systems.desyndev.in / operations
          </div>
        </div>
        <div className="grid gap-4 p-4 md:grid-cols-[1.15fr_.85fr] md:p-6">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Cricket analysis</p>
                <h3 className="mt-1 font-nacelle text-xl font-semibold text-white">Performance timeline</h3>
              </div>
              <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Live</span>
            </div>
            <div className="flex h-56 items-end gap-2 rounded-lg bg-[linear-gradient(rgba(148,163,184,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.06)_1px,transparent_1px)] bg-[size:28px_28px] p-4">
              {[42, 56, 48, 72, 61, 84, 77, 92, 68, 88, 96, 81].map((height, index) => (
                <motion.span
                  key={index}
                  initial={{ height: 12 }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.04 }}
                  className="flex-1 rounded-t-sm bg-linear-to-t from-blue-500/40 to-cyan-300 shadow-[0_0_18px_rgb(34_211_238/.28)]"
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center gap-3">
                <FiDatabase className="text-cyan-300" />
                <span className="text-sm font-medium text-white">Data ingestion</span>
              </div>
              <div className="mt-5 space-y-3">
                {["Match events", "Player profiles", "Visualization API"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-lg border border-white/5 bg-slate-900/70 px-3 py-2 text-sm">
                    <span className="text-slate-300">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-white">Build queue</span>
                <FiTerminal className="text-cyan-300" />
              </div>
              <div className="space-y-2 font-mono text-xs text-slate-400">
                <p><span className="text-cyan-300">$</span> collect fixtures --season 2026</p>
                <p><span className="text-emerald-300">ok</span> analytics schema migrated</p>
                <p><span className="text-blue-300">run</span> deploy preview generated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function DesynDevHome() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.045)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-100">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              Independent software studio in Tamil Nadu
            </div>
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-white),rgb(165_243_252),var(--color-white),rgb(96_165_250),var(--color-white))] bg-[length:200%_auto] bg-clip-text pb-6 font-nacelle text-4xl font-semibold text-transparent md:text-6xl">
              Building intelligent software systems for analytics, productivity, and real-world operations.
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-400 md:text-xl">
              DesynDev is an independent software studio focused on analytics platforms, scalable applications, AI-assisted systems, and modern software engineering.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a className="btn bg-linear-to-t from-cyan-500 to-blue-500 text-slate-950 shadow-[0_0_36px_rgb(34_211_238/.22)] hover:from-cyan-400 hover:to-blue-400" href="#projects">
                View Projects <FiArrowUpRight className="ml-2" />
              </a>
              <a className="btn border border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/30 hover:bg-cyan-300/10" href="#contact">
                Contact Us
              </a>
            </div>
          </motion.div>
          <DashboardVisual />
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <motion.div {...fadeUp}>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">About DesynDev</p>
            <h2 className="font-nacelle text-3xl font-semibold text-white md:text-4xl">
              A studio shaped by industry experience and a bias toward useful systems.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} className="space-y-5 text-lg text-slate-400">
            <p>
              DesynDev was founded by Jegadheesh after leaving Hexaware, with a clear focus on building practical software rather than presentation-heavy services.
            </p>
            <p>
              The work sits at the intersection of engineering, analytics, and AI: sports data products, operational platforms, productivity tools, and collaborations with colleges and clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="What we build" title="Systems with a clear operational purpose.">
            From data collection to production interfaces, DesynDev builds tools that are meant to be used, maintained, and improved.
          </SectionHeading>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-nacelle text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-400">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Featured projects" title="Active builds, real domains, production-minded execution.">
            The studio portfolio spans analytics, management systems, productivity products, and focused AI-assisted workflows.
          </SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.06 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-950 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="h-44 border-b border-white/10 bg-[linear-gradient(135deg,rgb(8_13_24),rgb(15_23_42)),linear-gradient(rgba(34,211,238,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,.08)_1px,transparent_1px)] bg-[size:auto,24px_24px,24px_24px] p-5">
                  <div className="flex h-full flex-col justify-between rounded-xl border border-white/10 bg-black/25 p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">{project.status}</span>
                      <FiArrowUpRight className="text-slate-500 transition group-hover:text-cyan-200" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-slate-500">{project.metric}</p>
                      <div className="mt-3 h-2 w-2/3 rounded-full bg-cyan-300/60 shadow-[0_0_24px_rgb(34_211_238/.4)]" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-nacelle text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Technology" title="A practical stack for modern product engineering.">
            DesynDev favors familiar, durable tools that support fast iteration without sacrificing maintainability.
          </SectionHeading>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div key={tech.name} {...fadeUp} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-4 py-4 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100">
                  <Icon className="text-cyan-300" size={20} />
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="internships" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 text-sm text-cyan-200">
                  <FiUsers /> Collaboration and internships
                </div>
                <h2 className="font-nacelle text-3xl font-semibold text-white md:text-4xl">
                  A professional environment for students, builders, and technical partners.
                </h2>
                <p className="mt-4 text-lg text-slate-400">
                  DesynDev supports college collaborations and internships centered on practical engineering: code quality, product thinking, data workflows, deployment, and real project ownership.
                </p>
              </div>
              <div className="grid gap-3">
                {["Project-based learning", "Mentored engineering workflows", "Client and college collaborations"].map((item) => (
                  <div key={item} className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeading eyebrow="Vision" title="Grounded systems now, larger platforms next.">
            DesynDev is building toward a portfolio of reliable software systems for analytics, education, productivity, and operations, with each project strengthening the engineering foundation for the next.
          </SectionHeading>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="rounded-2xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top_right,rgb(34_211_238/.12),transparent_34%),rgb(2_6_23/.9)] p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr_.9fr] md:items-center">
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">Contact</p>
                <h2 className="font-nacelle text-3xl font-semibold text-white md:text-4xl">Build something serious with DesynDev.</h2>
                <p className="mt-4 text-lg text-slate-400">
                  For product builds, analytics systems, internships, and technical collaborations, reach out directly.
                </p>
              </div>
              <div className="space-y-3 text-sm">
                <a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100" href="mailto:connect@desyndev.in">
                  <FiMail className="text-cyan-300" /> connect@desyndev.in
                </a>
                <a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100" href="https://github.com/" target="_blank" rel="noreferrer">
                  <FiGithub className="text-cyan-300" /> GitHub
                </a>
                <a className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300 transition hover:border-cyan-300/30 hover:text-cyan-100" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                  <FiLinkedin className="text-cyan-300" /> LinkedIn
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-slate-300">
                  <FiMapPin className="text-cyan-300" /> Tamil Nadu, India
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
