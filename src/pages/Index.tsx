import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { poems } from "@/data/poems";
import { posters } from "@/data/posters";

// Latest 2 real projects (kept in sync manually with src/components/Projects.tsx
// until a shared content source exists — see project notes).
const selectedWork = [
  {
    title: "Agentic RAG over MCP",
    period: "Feb 2026 – Mar 2026",
    description:
      "Hybrid retrieval system (dense + BM25, RRF-fused in Qdrant, cross-encoder reranking) exposed as 10 MCP tools with an agentic corpus-to-web cascade.",
      github: "https://github.com/Shivam2Goyal/MCP-powered-Agentic-RAG.git",
  },
  {
    title: "Unsupervised Image Segmentation Pipeline",
    period: "Sep 2025 – Nov 2025",
    description:
      "Unsupervised image segmentation using LAB color space and 24-point LBP texture features, comparing standard and Bayesian GMMs.",
    github: "https://github.com/Shivam2Goyal/GMM-Segmentation.git",
  },
];

const recent = [
  {
    title: "AI Engineering Intern, Nimrobo",
    detail: "Autonomous Outcome Engine — AI agents that run marketing experiments",
    date: "Sep 2026",
  },
  {
    title: "AI Engineering Intern, United Tech-Labs",
    detail: "Lumina AI — E-Commerce Analytics Platform",
    date: "Jun 2026 – Aug 2026",
  },
];

// First 2 entries from the shared data sources — real content, not duplicated strings.
const featuredPoems = poems.slice(0, 2);
const featuredPosters = posters.slice(0, 2);

const SectionHeader = ({ title, linkTo, linkLabel }: { title: string; linkTo: string; linkLabel: string }) => (
  <div className="mb-6 flex items-baseline justify-between">
    <h2 className="text-2xl font-extrabold tracking-tight text-foreground md:text-3xl">{title}</h2>
    <Link
      to={linkTo}
      className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
    >
      {linkLabel} →
    </Link>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen font-sans relative">
      <div className="relative z-10">
        <Navbar />
        <main>
          <About />

          {/* Recently */}
          <section className="mx-auto max-w-5xl px-6 py-12">
            <SectionHeader title="Recently" linkTo="/about#experience" linkLabel="more about me" />
            <div className="divide-y divide-border">
              {recent.map((item) => (
                <div key={item.title} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                  <p className="whitespace-nowrap text-sm text-muted-foreground">{item.date}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent projects */}
          <section className="mx-auto max-w-5xl px-6 py-12">
            <SectionHeader title="Latest Work" linkTo="/about#projects" linkLabel="all projects" />
            <div className="grid gap-10 md:grid-cols-2">
              {selectedWork.map((project) => (
                <div key={project.title} className="space-y-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">{project.period}</p>
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground"
                    >
                      View code →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Scribbles */}
          <section className="mx-auto max-w-5xl px-6 py-12">
            <SectionHeader title="Scribbles" linkTo="/gallery" linkLabel="all scribbles" />
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">Writings</p>
                <ul className="space-y-2">
                  {featuredPoems.map((poem) => (
                    <li key={poem.id}>
                      <Link
                        to={`/gallery/writing/${poem.slug}`}
                        className="text-foreground underline-offset-4 hover:underline"
                      >
                        {poem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-wide text-muted-foreground">Posters</p>
                <ul className="space-y-2">
                  {featuredPosters.map((poster) => (
                    <li key={poster.id}>
                      <Link to="/gallery" className="text-foreground underline-offset-4 hover:underline">
                        {poster.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
