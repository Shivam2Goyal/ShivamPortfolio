const studies = [
  {
    institution: "Indian Institute of Technology Jodhpur",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2023 – 2027 expected",
    location: "Jodhpur, Rajasthan",
  },
  {
    institution: "Pragati Vidhya Peeth",
    degree: "Senior Secondary Certificate",
    period: "2013 - 2023",
    location: "Gwalior, MP",
  },
  {
    institution: "Mandsaur International School",
    degree: "Middle School",
    period: "2011-2013",
    location: "Mandsaur, MP",
  }
];

const achievements = [
  {
    title: "7th Rank @ Inter IIT Tech Meet 13.0",
    description: "Team performance in Inter IIT Tech.",
  },
  {
    title: "Knight, LeetCode",
    description: "Solved 500+ DSA problems across various leading platforms.",
  },
  {
    title: "A-(9/10) in Deep Learning, NLP & Data Visualization; B(8/10) in Computer Vision",
    description: "Coursework grades at IIT Jodhpur.",
  }
];

const positions = [
  {
    title: "Undergraduate Representative, BCCA",
    description:
      "Coordinated 20+ student events, supervised the funds of tech societies, and consolidated campus-wide feedback.",
  },
  {
    title: "Coordinator, Robotics Society",
    description:
      "Led end-to-end operations of the society, managing projects, logistics, and training workshops to foster technological innovation among 70+ active members.",
  },
  {
    title: "Head, Technical Fest",
    description: "Managed 10+ technical events with 1500+ participants.",
  },
];

const CoursesAchievements = () => {
  return (
    <>
      <section id="studies" className="scroll-mt-32">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Studies
        </h2>
        <div className="space-y-8">
          {studies.map((entry) => (
            <div key={entry.institution}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl font-bold text-foreground">{entry.institution}</h3>
                <p className="whitespace-nowrap text-sm text-muted-foreground">{entry.period}</p>
              </div>
              <p className="text-muted-foreground">{entry.degree}</p>
              <p className="mt-1 text-sm text-muted-foreground">{entry.location}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="scroll-mt-32">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Achievements
        </h2>
        <div className="space-y-5">
          {achievements.map((item) => (
            <div key={item.title}>
              <p className="font-bold text-foreground">{item.title}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="volunteering" className="scroll-mt-32">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Volunteering
        </h2>
        <div className="space-y-5">
          {positions.map((item) => (
            <div key={item.title}>
              <p className="font-bold text-foreground">{item.title}</p>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesAchievements;
