import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          Experience
        </h2>

        <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Timeline indicator */}
            <div className="lg:w-2 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full glow-primary" />
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-primary-glow transition-colors duration-300">
                    Inter IIT Tech Meet 13.0
                  </h3>
                  <p className="text-xl text-accent font-semibold mb-2">
                    Team Member - Albatross Energetics Challenge
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>Nov 2024 - Dec 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>Mumbai, India</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>7th Rank</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Achievements */}
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="group-hover:text-foreground transition-colors duration-300">
                    Designed a <span className="text-primary font-medium">vapor-compression air conditioning system</span> using R290a refrigerant, 
                    achieving an <span className="text-accent font-medium">ISEER of 1.68</span> and an <span className="text-accent font-medium">EER of 1.755</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="group-hover:text-foreground transition-colors duration-300">
                    Enhanced and implemented a <span className="text-primary font-medium">PCM-based thermal energy storage system</span>, 
                    boosting energy efficiency by <span className="text-accent font-medium">25%</span> during peak operational loads
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="group-hover:text-foreground transition-colors duration-300">
                    Simulated performance in <span className="text-primary font-medium">MATLAB/Simulink</span>, 
                    optimizing the processes under varying load conditions
                  </p>
                </div>
              </div>

              {/* Skills used */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <p className="text-sm text-muted-foreground mb-3">Technologies & Skills:</p>
                <div className="flex flex-wrap gap-2">
                  {["MATLAB", "Simulink", "Thermal Engineering", "Energy Systems", "R290a Refrigerant", "PCM Storage"].map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="outline" 
                      className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;