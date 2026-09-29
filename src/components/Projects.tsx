const projects = [
  {
    title: "Agentic RAG over MCP",
    period: "Feb 2026 – Mar 2026",
    description:
      "Hybrid retrieval system (dense + BM25, RRF-fused in Qdrant, cross-encoder reranking) exposed as 10 MCP tools with an agentic corpus-to-web cascade, replacing a hardcoded confidence cutoff with a threshold fitted on 70 labelled queries (Youden's J, ROC AUC) plus per-sentence citation verification.",
    technologies: ["Python", "MCP", "Qdrant", "Cross-Encoder Reranking", "FastAPI", "React", "Docker", "SearxNG"],
    metrics: "Benchmarked 5 configurations over 40 queries — recall@1 0.98, nDCG@10 0.99",
    github: "https://github.com/Shivam2Goyal/MCP-powered-Agentic-RAG.git",
  },
  {
    title: "Unsupervised Image Segmentation Pipeline",
    period: "Sep 2025 – Nov 2025",
    description:
      "Unsupervised image segmentation using LAB color space and 24-point LBP texture features, comparing standard and Bayesian GMMs (5×5 Gaussian blur, LAB conversion) for automatic component selection and reduced over-segmentation.",
    technologies: ["Python", "OpenCV", "Scikit-learn", "NumPy", "Matplotlib"],
    metrics: "91.7% Jaccard similarity with 7-component full-covariance clustering",
    github: "https://github.com/Shivam2Goyal/GMM-Segmentation.git",
  },
  {
    title: "Multimodal Emotion Analyser",
    period: "Feb 2025 – Mar 2025",
    description:
      "Real-time facial emotion recognition (CNN on FER-2013, deployed with OpenCV and Haar Cascade) paired with a Bi-LSTM text emotion classifier using 300d GloVe embeddings across 7 emotion classes.",
    technologies: ["Python", "CNN", "BiLSTM", "OpenCV", "Streamlit", "NLP", "GloVe"],
    metrics: "68% val. accuracy (facial), 63% val. accuracy (text)",
    github: "https://github.com/Shivam2Goyal/SentimentSphere.git",
  },
  {
    title: "HyperTrie",
    period: "Nov 2024 – Dec 2024",
    description:
      "Privacy-first Chrome extension (MV3) for instant top-k prefix search over browsing history, using a path-compressed radix trie in C++/WebAssembly with an append-only IndexedDB log and rebuildable trie index.",
    technologies: ["C++", "WebAssembly", "Emscripten", "JavaScript", "React", "IndexedDB", "Chrome Extensions (MV3)"],
    metrics: "4.02× fewer URL characters stored than a flat list, validated by 139 tests",
    github: "https://github.com/Shivam2Goyal/HyperTrie.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
              <p className="whitespace-nowrap text-sm text-muted-foreground">{project.period}</p>
            </div>

            <p className="mt-2 text-foreground">{project.description}</p>

            {project.metrics && (
              <p className="mt-2 text-sm text-muted-foreground">{project.metrics}</p>
            )}

            <p className="mt-2 text-sm text-muted-foreground">
              {project.technologies.join(", ")}
            </p>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground"
              >
                View code →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
