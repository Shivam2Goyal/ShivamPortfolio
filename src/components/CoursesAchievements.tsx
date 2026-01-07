import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, BookOpen, Users, Award } from "lucide-react";

const CoursesAchievements = () => {
  const courses = [
    "Data Structures & Algorithms",
    "Principles of Computer Systems",
    "Pattern Recognition & ML",
    "Probability & Statistics",
    "Artificial Intelligence",
  ];

  // Add your ongoing courses below
  const ongoingCourses = [
    "Computer Vision",
    "Natural Language Understanding",
    "Deep Learning",
    "Data Visualisation",
  ];

  const achievements = [
    {
      title: "7th Rank @ Inter IIT Tech Meet 13.0",
      icon: Trophy,
      description: "Team performance in Inter IIT Tech.",
    },
    {
      title: "3rd Place @ Pitch Rush PM Hackathon",
      icon: Award,
      description: "Product management.",
    },
    {
      title: "AIR 124 @ NTST 2019",
      icon: Award,
      description: "Aptitude and reasoning olympiad.",
    },
  ];

  const positions = [
    {
      title: "UG Representative",
      icon: Users,
      description: "Board of Co-Curricular Activities, IIT Jodhpur",
    },
    {
      title: "Mentor, Robotics Society",
      icon: Users,
      description: "Guided juniors on robotics projects",
    },
    {
      title: "Associate, Product Club",
      icon: Users,
      description: "Product management and strategy",
    },
    {
      title: "Assistant Head @ Varchas'24",
      icon: Users,
      description: "Digital Design Team Lead.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in font-playfair">
          Academics & Positions of Responsibility
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Courses */}
          <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm">
            {/* Key Courses Section */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-playfair">
                Key Courses
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {courses.map((course, index) => (
                <Badge
                  key={course}
                  variant="outline"
                  className="bg-primary/20 text-primary border-primary/30 px-3 py-2 text-sm hover:bg-primary/40 transition-colors duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {course}
                </Badge>
              ))}
            </div>

            {/* Ongoing Courses Section - matches Key Courses style */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-accent/10">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-accent font-playfair">
                Ongoing Courses
              </h3>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {ongoingCourses.length === 0 ? (
                <span className="text-muted-foreground text-sm italic">
                  Add your ongoing courses in the template!
                </span>
              ) : (
                ongoingCourses.map((course, index) => (
                  <Badge
                    key={course}
                    variant="outline"
                    className="bg-accent/20 text-accent border-accent/30 px-3 py-2 text-sm hover:bg-accent/40 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {course}
                  </Badge>
                ))
              )}
            </div>
          </Card>

          {/* Achievements & Positions */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Trophy className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent font-playfair">
                  Achievements
                </h3>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <achievement.icon className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {achievement.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Positions */}
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary font-playfair">
                  Positions of Responsibility (POR)
                </h3>
              </div>

              <div className="space-y-3">
                {positions.map((position, index) => (
                  <div
                    key={position.title}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <position.icon className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">
                        {position.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {position.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesAchievements;
