import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/Shivam2Goyal", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shivam-goyal-/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/shivshiv_goyal/", label: "Instagram" },
  { iconSrc: "/icons/leetcode.svg", href: "https://leetcode.com/u/utopian_/", label: "LeetCode" },
];

export const ProfilePhoto = () => (
  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border border-border md:h-40 md:w-40">
    <img src="/icons/me.jpg" alt="Shivam Goyal" className="h-full w-full object-cover" />
  </div>
);

const languages = ["English", "Hindi"];

export const LanguageChips = () => (
  <div className="flex justify-center gap-2">
    {languages.map((language) => (
      <span
        key={language}
        className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
      >
        {language}
      </span>
    ))}
  </div>
);

export const ProfileIntro = ({ variant = "full" }: { variant?: "landing" | "full" }) => (
  <div className="animate-fade-in-blur space-y-6 text-center md:text-left">
    <div>
      <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-6xl">
        Shivam Goyal
      </h1>
      <p className="mt-3 text-lg text-muted-foreground md:text-xl">
        AI & ML Enthusiast · Researcher · Developer
      </p>
    </div>

    {variant === "landing" ? (
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:mx-0">
        I'm Shivam, pursuing my B.Tech. in AI&DS @ IITJ.
        <br />
        I build with machine learning, computer vision, and code.
      </p>
    ) : (
      <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground md:mx-0">
        I'm an undergraduate at the Indian Institute of Technology Jodhpur, studying
        Artificial Intelligence & Data Science. My interests lie in machine learning,
        computer vision, and software development, and I enjoy working on projects
        that combine research with practical engineering.
      </p>
    )}

    <div className="flex flex-wrap justify-center gap-3 md:justify-start">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full border border-border bg-secondary px-3 py-1.5 text-xs text-foreground transition-colors duration-300 hover:border-primary"
        >
          {"icon" in link ? (
            <link.icon className="h-3.5 w-3.5" />
          ) : (
            <img src={link.iconSrc} alt="" className="h-3.5 w-3.5 brightness-0 invert" />
          )}
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

// Combined hero — used as-is on the landing page (text on the left, photo on
// the right on desktop; photo stacks above text on mobile). The About page
// instead composes ProfilePhoto and ProfileIntro separately (photo pinned in
// its own sticky column, intro as the first block of scrolling content).
const About = () => {
  return (
    <section id="about" className="scroll-mt-32 px-6 pb-20 pt-32 md:pt-40">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 md:grid-cols-[1fr,auto] md:gap-16">
        <div className="flex flex-col items-center gap-3 md:order-2">
          <ProfilePhoto />
          <LanguageChips />
        </div>
        <div className="md:order-1">
          <ProfileIntro variant="landing" />
        </div>
      </div>
    </section>
  );
};

export default About;
