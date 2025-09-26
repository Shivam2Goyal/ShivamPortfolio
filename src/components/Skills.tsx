import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Brain,
  Globe,
  Wrench,
  Database,
  User,
  Filter,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C/C++", "Python", "JavaScript", "SQL"],
    color: "primary",
  },
  {
    title: "Technical Skills",
    icon: Brain,
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Computer Vision",
      "Deep Learning",
      "Algorithm Design",
      "Problem Solving",
    ],
    color: "accent",
  },
  {
    title: "Tools & Frameworks",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Linux",
      "Jupyter",
      "LaTeX",
      "SolidWorks",
      "Tableau",
    ],
    color: "primary",
  },
  {
    title: "Libraries & Platforms",
    icon: Database,
    skills: [
      "NumPy",
      "Pandas",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "LangChain",
      "LangGraph",
      "OpenCV",
      "Firebase",
      "Flask",
      "ReactJS",
    ],
    color: "accent",
  },
  {
    title: "Soft Skills",
    icon: User,
    skills: [
      "Leadership",
      "Team Collaboration",
      "Problem Solving",
      "Communication",
      "Project Management",
      "Mentoring",
    ],
    color: "primary",
  },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    skillCategories[0].title
  );

  const currentCategory = skillCategories.find(
    (cat) => cat.title === selectedCategory
  );

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient animate-fade-in font-playfair">
          Skills
        </h2>

        {/* Category Navbar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <Button
              key={category.title}
              variant={
                selectedCategory === category.title ? "default" : "outline"
              }
              size="sm"
              onClick={() => setSelectedCategory(category.title)}
              className={`transition-all duration-300 font-playfair ${
                selectedCategory === category.title
                  ? "bg-primary text-primary-foreground"
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category.title}
            </Button>
          ))}
        </div>

        {/* Only show the selected category card */}
        {currentCategory && (
          <div className="flex justify-center">
            <Card
              key={currentCategory.title}
              className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group w-full max-w-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2 rounded-lg bg-${currentCategory.color}/10 group-hover:bg-${currentCategory.color}/20 transition-colors duration-300`}
                >
                  <currentCategory.icon
                    className={`h-5 w-5 text-${currentCategory.color}`}
                  />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-playfair">
                  {currentCategory.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentCategory.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`
                      border-${currentCategory.color}/30 text-${currentCategory.color}
                      hover:bg-${currentCategory.color}/10 hover:border-${currentCategory.color}
                      transition-all duration-300 cursor-default text-xs
                      group-hover:scale-105
                    `}
                    style={{
                      animationDelay: `${skillIndex * 0.05}s`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
