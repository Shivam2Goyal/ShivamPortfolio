import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

const About = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Shivam2Goyal",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam-goyal-85b63928a/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/shivshiv_goyal/",
      label: "Instagram"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in font-playfair">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Profile Image */}
          <div className="lg:col-span-1">
            <Card className="p-6 bg-gradient-card border-border/50 backdrop-blur-sm">
              {/* Image placeholder */}
              <div className="w-full aspect-[3/4] bg-muted/50 rounded-lg mb-6 overflow-hidden border-2 border-primary/20">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <span className="text-6xl"><img src="public\me.jpg" /></span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <link.icon className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm h-full">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4 font-playfair">
                    Hi, Shivam Here.
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    I'm Shivam, a curious builder at the intersection of AI, data, and design. 
                    I enjoy experimenting with cutting-edge machine learning while also 
                    dabbling in creative pursuits like web design and poetry. My goal is to 
                    craft solutions that are not only intelligent but also human-centered.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground font-playfair">Education</h4>
                    <p className="text-muted-foreground">
                      <span className="font-medium text-primary">B.Tech in AI & Data Science</span><br />
                      Indian Institute of Technology, Jodhpur<br />
                      <span className="text-sm">CGPA: 8.5/10</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-foreground font-playfair">Current Focus</h4>
                    <p className="text-muted-foreground">
                      Working on AI-powered applications, exploring machine learning research, 
                      and building innovative solutions that bridge technology and creativity.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground italic">
                    "Passionate about creating technology that enhances human experience 
                    while fostering creativity and innovation."
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;