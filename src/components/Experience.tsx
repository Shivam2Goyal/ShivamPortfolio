const experiences = [
  {
    id: 2,
    title: "AI Developer Intern, Nimrobo AI",
    role: "Autonomous Outcome Engine : AI agents that run marketing experiments",
    period: "Sep 2026",
    bullets: [
      "Built a 3-layer autonomous scheduler running LLM agent loops on a phase-based cadence (~11 runs/28 days) behind three default-off gates — kill switch, entitlement, opt-in — using a transactional Firestore lease to prevent double-charging on overlapping cron ticks",
      "Implemented a second ComputeAdapter (15-method contract) to run agent turns in Docker instead of Vercel Sandboxes — offset-drained logs with UTF-8 decoding, an in-container timeout watchdog, and a loopback forwarder preserving the runner's localhost-only callback check",
    ],
    skills: "TypeScript, Next.js, Node.js, Docker, GCP, LiteLLM, Kubernetes",
  },
  {
    id: 1,
    title: "AI Engineering Intern, United Tech-Labs",
    role: "Lumina AI — E-Commerce Analytics Platform",
    period: "Jun 2026 – Aug 2026",
    bullets: [
      "Engineered a 3-tier microservice backend (Go Data API + Python MCP Bridge + Gemini AI Brain) exposing 10 auto-registered analytical tools via Model Context Protocol, eliminating manual tool registration across services",
      "Built a dual-layer visualization engine — deterministic Recharts specs from raw database JSON (zero AI hallucination risk) with an AST-validated, OS-sandboxed Matplotlib fallback — and implemented a 3-layer guardrail system (regex pre-filter, system prompt, tool whitelist) reducing off-topic LLM calls to zero token cost",
    ],
    skills: "Go, Python, FastMCP, Gemini, PostgreSQL, MongoDB, Next.js, Docker, Nginx, AWS EC2",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-32">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Work Experience
      </h2>

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground">{exp.role}</p>
              </div>
              <p className="whitespace-nowrap text-sm text-muted-foreground">{exp.period}</p>
            </div>

            <ul className="mt-4 space-y-2">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-foreground">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {exp.skills && <p className="mt-4 text-sm text-muted-foreground">{exp.skills}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
