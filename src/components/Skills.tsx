import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Globe, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["C/C++", "Python", "JavaScript", "SQL"],
      color: "primary"
    },
    {
      title: "ML & Data Science",
      icon: Brain,
      skills: ["NumPy", "Pandas", "TensorFlow", "PyTorch", "Scikit-learn", "Matplotlib", "Seaborn"],
      color: "accent"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "ReactJS", "Firebase", "Flask"],
      color: "primary"
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "GitHub", "Linux", "Jupyter", "LaTeX", "Tableau", "SolidWorks"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors duration-300`}>
                  <category.icon className={`h-6 w-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
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
                      transition-all duration-300 cursor-default
                      group-hover:scale-105
                    `}
                    style={{ 
                      animationDelay: `${(index * 0.2) + (skillIndex * 0.05)}s`,
                      transform: `translateY(${Math.sin(skillIndex * 0.5) * 2}px)`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>

              {/* Skill progress indicator */}
              <div className="mt-4 pt-4 border-t border-border/30">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Proficiency</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          i < (category.title.includes('Programming') ? 4 : 
                               category.title.includes('ML') ? 5 : 
                               category.title.includes('Web') ? 4 : 3)
                            ? `bg-${category.color}` 
                            : 'bg-muted'
                        }`}
                        style={{ animationDelay: `${(index * 0.2) + (i * 0.1)}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional coursework */}
        <Card className="mt-12 p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Key Courses Taken</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Data Structures & Algorithms",
              "Principles of Computer Systems", 
              "Pattern Recognition & ML",
              "Probability & Statistics",
              "Signals and Systems"
            ].map((course, index) => (
              <Badge 
                key={course}
                variant="secondary"
                className="bg-secondary/50 text-secondary-foreground border-secondary/30 px-4 py-2 text-sm hover:bg-secondary/70 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {course}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;