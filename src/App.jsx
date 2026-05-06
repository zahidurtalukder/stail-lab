import React from "react";
import { motion } from "framer-motion";


const IconBubble = ({ children, small = false }) => (
  <span
    className={`${small ? "h-8 w-8 text-base" : "h-11 w-11 text-xl"} inline-flex shrink-0 items-center justify-center rounded-2xl bg-emerald-300/10 text-emerald-200 ring-1 ring-emerald-300/20`}
  >
    {children}
  </span>
);

const projects = [
  {
    title: "Stress-Adjusted Water and Carbon Footprints of EV Charging",
    tag: "Ongoing · TLU VPAA Faculty–Student Research Grant 2026",
    icon: "🌿",
    description:
      "Quantifying the water footprint, stress-adjusted water usage, and carbon emissions of EV charging in Texas across time, location, grid mix, and water stress conditions.",
  },
  {
    title: "Sustainable AI and Resource-Aware Computing",
    tag: "Ongoing",
    icon: "🧠",
    description:
      "Designing frameworks for spatiotemporal workload scheduling that balance energy, water, carbon, and regional sustainability constraints for AI and data center systems.",
  },
  {
    title: "Reducing Water Footprint for Data Centers",
    tag: "ACM e-Energy 2026",
    icon: "💧",
    description:
      "Developing algorithms and datasets to reduce data center water usage through workload shifting, water scarcity awareness, rainwater harvesting, and cooling-aware decisions.",
  },
  {
    title: "Fair Federated Learning with Heterogeneous Devices",
    tag: "ACM TOMPECS",
    icon: "🔗",
    description:
      "Improving fairness in federated learning when participating clients have different hardware capabilities, model architectures, and local constraints.",
  },
];

const previousWork = [
  "FedSRC: Efficient Federated Learning with Self-Regulating Clients — ACM SIGMETRICS 2022",
  "Computationally Efficient Auto-Weighted Aggregation for Heterogeneous Federated Learning — IEEE EDGE 2022",
  "Empowering Clients: Self-Adaptive Federated Learning for Data Quality Challenges — IEEE EDGE 2025",
  "Low-Cost Server-Level Power Monitoring in Data Centers Using Conducted EMI — ACM SenSys 2023",
  "Water Sustainability Dataset for Data Center Research — ACM e-Energy 2024",
];

const highlights = [
  "Efficient, secure, fair, and sustainable machine learning systems",
  "Federated and distributed learning under real-world heterogeneity",
  "Energy–water–carbon optimization for AI and computing systems",
  "Undergraduate research mentoring and AI curriculum innovation",
];

const publications = [
  "Reducing Water Footprint for Data Centers, ACM e-Energy 2026",
  "Fair Federated Learning with Heterogeneous Devices, ACM TOMPECS 2024",
  "Empowering Clients: Self-Adaptive Federated Learning for Data Quality Challenges, IEEE EDGE 2025",
  "FedSRC: Efficient Federated Learning with Self-Regulating Clients, ACM SIGMETRICS 2022",
  "Computationally Efficient Auto-Weighted Aggregation for Heterogeneous Federated Learning, IEEE EDGE 2022",
];

export default function LabWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-400/20">
              ✦
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">Sustainable Trustworthy AI Lab</p>
              <p className="text-xs text-slate-400">Texas Lutheran University</p>
            </div>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#research" className="hover:text-white">Research</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#work" className="hover:text-white">Previous Work</a>
            <a href="#people" className="hover:text-white">People</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="relative overflow-hidden px-6 py-24 md:py-32">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-200">
                <span>🏆</span> MLCommons Rising Star in Machine Learning and Systems
              </div>
              <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
                Building efficient, fair, and sustainable AI systems for real-world impact.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                The Sustainable Trustworthy AI Lab, led by Dr. Zahidur Talukder at Texas Lutheran University, develops machine learning systems that are privacy-preserving, resource-aware, equitable, and environmentally responsible.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center rounded-2xl bg-emerald-400 px-6 py-4 font-medium text-slate-950 transition hover:bg-emerald-300">
                  Explore Projects <span className="ml-2">→</span>
                </a>
                <a href="#contact" className="inline-flex items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-medium text-white transition hover:bg-white/10">
                  Join or Collaborate
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-emerald-950/40 backdrop-blur">
                <div className="p-8">
                  <div className="grid gap-4">
                    {highlights.map((item, idx) => (
                      <div key={idx} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                        <IconBubble small>✓</IconBubble>
                        <p className="text-sm leading-6 text-slate-200">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                </div>    </motion.div>
          </div>
        </section>

        <section id="research" className="border-y border-white/10 bg-slate-900/50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Research Overview</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Trustworthy AI meets sustainable computing.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Our research spans federated learning, privacy-preserving machine learning, AI sustainability, data center resource optimization, and energy–water–carbon-aware system design. We aim to make AI systems scalable, reliable, fair, and responsible in resource-constrained environments.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                ["🧠", "Efficient AI", "Adaptive algorithms that reduce computation, communication, and resource cost."],
                ["🔗", "Federated Learning", "Methods for robust, fair, and privacy-preserving learning across heterogeneous clients."],
                ["🌿", "Sustainable Systems", "Optimization frameworks that account for water stress, carbon intensity, and energy mix."],
              ].map(([icon, title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.04]">
                  <div className="p-6">
                    <IconBubble>{icon}</IconBubble>
                    <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Ongoing Projects</p>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Current research directions</h2>
              </div>
              <p className="max-w-xl text-slate-300">Projects combine machine learning, systems, sustainability, and student-centered research training.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <div key={project.title} className="group rounded-3xl border border-white/10 bg-white/[0.05] transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <IconBubble>{project.icon}</IconBubble>
                      <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">{project.tag}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="bg-slate-900/50 px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Previous Work</p>
              <h2 className="text-3xl font-bold text-white md:text-5xl">Selected foundations</h2>
              <p className="mt-5 leading-8 text-slate-300">
                Prior projects form the technical foundation for the lab’s current agenda in efficient federated learning, fairness, data quality, and sustainable AI systems.
              </p>
            </div>
            <div className="space-y-4">
              {previousWork.map((work, idx) => (
                <div key={work} className="rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                  <p className="text-sm text-emerald-300">0{idx + 1}</p>
                  <p className="mt-2 text-lg font-medium leading-7 text-white">{work}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">Publications</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Selected publications</h2>
            <div className="mt-8 grid gap-4">
              {publications.map((pub) => (
                <div key={pub} className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                  <IconBubble small>📘</IconBubble>
                  <p className="leading-7 text-slate-200">{pub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="people" className="bg-slate-900/50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">People & Mentoring</p>
            <h2 className="text-3xl font-bold text-white md:text-5xl">Student-centered research training</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/[0.05]">
                <div className="p-7">
                  <IconBubble>👥</IconBubble>
                  <h3 className="mt-5 text-2xl font-semibold text-white">Current Mentoring</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    The lab mentors undergraduate students through senior seminar projects, independent research, and funded summer research in AI, sustainability, cybersecurity, and computing systems.
                  </p>
                </div>
                </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.05]">
                <div className="p-7">
                  <IconBubble>🎓</IconBubble>
                  <h3 className="mt-5 text-2xl font-semibold text-white">Join the Lab</h3>
                  <p className="mt-4 leading-7 text-slate-300">
                    Motivated students interested in machine learning, federated learning, cybersecurity, sustainable AI, data analysis, or visualization are encouraged to reach out with a short note about their interests.
                  </p>
                </div>
                </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-emerald-400/15 to-cyan-400/10 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Contact</p>
                <h2 className="text-3xl font-bold text-white md:text-5xl">Collaborate with us</h2>
                <p className="mt-5 max-w-2xl leading-8 text-slate-200">
                  We welcome collaborations with students, faculty, and industry partners interested in trustworthy AI, federated learning, cybersecurity, sustainable computing, and energy–water–carbon-aware systems.
                </p>
              </div>
              <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/60 p-6">
                <p className="flex items-center gap-3 text-slate-200"><span className="text-emerald-300">✉</span> ztalukder@tlu.edu</p>
                <p className="flex items-center gap-3 text-slate-200"><span className="text-emerald-300">⌖</span> Texas Lutheran University, Seguin, TX</p>
                <a className="flex items-center gap-3 text-slate-200 hover:text-white" href="https://github.com/zahidurtalukder"><span className="text-emerald-300">⌘</span> GitHub <span className="text-sm">↗</span></a>
                <a className="flex items-center gap-3 text-slate-200 hover:text-white" href="https://zahidurtalukder.github.io/"><span className="text-emerald-300">↗</span> Personal Website</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Sustainable Trustworthy AI Lab · Texas Lutheran University
      </footer>
    </div>
  );
}
