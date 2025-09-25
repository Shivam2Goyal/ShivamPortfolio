import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Globe, Wrench, Database, User } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "Technical Skills",
      icon: Brain,
      skills: ["Machine Learning", "Data Analysis", "Computer Vision", "Deep Learning", "Algorithm Design", "Problem Solving"],
      color: "accent"
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      skills: ["Git", "GitHub", "Linux", "Jupyter", "LaTeX", "SolidWorks", "Tableau"],
      color: "primary"
    },
    {
      title: "Libraries & Platforms",
      icon: Database,
      skills: ["NumPy", "Pandas", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Firebase", "Flask", "ReactJS"],
      color: "accent"
    },
    {
      title: "Soft Skills",
      icon: User,
      skills: ["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Project Management", "Mentoring"],
      color: "primary"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in font-playfair">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                  <category.icon className={`h-5 w-5 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 font-playfair">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className={`
                      border-${category.color}/30 text-${category.color} 
                      hover:bg-${category.color}/10 hover:border-${category.color} 
                      transition-all duration-300 cursor-default text-xs
                      group-hover:scale-105
                    `}
                    style={{ 
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;