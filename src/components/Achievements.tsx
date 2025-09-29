import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Users, Target, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "7th Rank @ Inter IIT Tech Meet 13.0",
      description: "Key contributor to the Albatross Problem Statement on 'Innovative Cooling and Dehumidification Solutions'",
      icon: Trophy,
      color: "primary",
      type: "Competition"
    },
    {
      title: "3rd Place @ Pitch Rush PM Hackathon",
      description: "Product Management Hackathon by The Product Club, IIT Jodhpur",
      icon: Award,
      color: "accent",
      type: "Hackathon"
    },
    {
      title: "Finalist @ RowBoatics",
      description: "RC Boat Racing competition, Techfest IIT Bombay",
      icon: Target,
      color: "primary",
      type: "Competition"
    },
    {
      title: "AIR-124 in NTST",
      description: "National Talent Search Test by Epoch Olympiad Foundation",
      icon: Star,
      color: "accent",
      type: "Academic"
    }
  ];

  const positions = [
    {
      title: "UG Representative",
      organization: "Board of Co-Curricular Activities, IIT Jodhpur",
      icon: Users,
      color: "primary"
    },
    {
      title: "Project Mentor",
      organization: "Robotics Society, IIT Jodhpur",
      icon: Users,
      color: "accent"
    },
    {
      title: "Associate",
      organization: "The Product Club, IIT Jodhpur",
      icon: Users,
      color: "primary"
    },
    {
      title: "Assistant Head",
      organization: "Varchas'24, Sports Fest, IIT Jodhpur",
      icon: Users,
      color: "accent"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          Achievements & Leadership
        </h2>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${achievement.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-${achievement.color}/10 group-hover:bg-${achievement.color}/20 transition-colors duration-300 flex-shrink-0`}>
                      <achievement.icon className={`h-6 w-6 text-${achievement.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <Badge 
                          variant="secondary" 
                          className={`bg-${achievement.color}/10 text-${achievement.color} border-${achievement.color}/20 text-xs flex-shrink-0`}
                        >
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Positions of Responsibility */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Positions of Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <Card 
                key={position.title}
                className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group relative overflow-hidden"
                style={{ animationDelay: `${(achievements.length * 0.1) + (index * 0.1)}s` }}
              >
                {/* Background glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${position.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-${position.color}/10 group-hover:bg-${position.color}/20 transition-colors duration-300 flex-shrink-0`}>
                      <position.icon className={`h-6 w-6 text-${position.color}`} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                        {position.title}
                      </h4>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm leading-relaxed">
                        {position.organization}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-${position.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;