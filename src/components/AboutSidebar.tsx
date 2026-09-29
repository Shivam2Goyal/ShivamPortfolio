const sections = [
  { id: "about", label: "Introduction" },
  { id: "experience", label: "Work Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Technical Skills" },
  { id: "studies", label: "Studies" },
  { id: "achievements", label: "Achievements" },
  { id: "volunteering", label: "Volunteering" },
];

const AboutSidebar = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="hidden lg:block">
      <div className="sticky top-32 space-y-1">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => scrollTo(e, section.id)}
            className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors duration-300 hover:border-border hover:text-foreground"
          >
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default AboutSidebar;
