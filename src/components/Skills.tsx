const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C/C++", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["PyTorch", "OpenCV", "Scikit-learn", "LangChain", "RAG", "MCP", "NumPy", "Pandas"],
  },
  {
    title: "Software Development",
    skills: ["React", "Next.js", "FastAPI", "Django", "REST APIs", "Microservices"],
  },
  {
    title: "Tools & Cloud",
    skills: ["Git", "GitHub", "Docker", "AWS EC2", "Vector Databases"],
  },
  {
    title: "Design & Visualization",
    skills: ["SolidWorks", "Fusion 360", "Ultimaker CURA", "Tableau", "Matplotlib", "Seaborn"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-32">
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
        Technical Skills
      </h2>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="font-bold text-foreground">{category.title}</h3>
            <p className="mt-1 text-muted-foreground">{category.skills.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
