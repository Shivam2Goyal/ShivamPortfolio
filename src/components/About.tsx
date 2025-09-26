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
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main profile card */}
              <div className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md rounded-3xl p-6 border border-border/50 shadow-2xl">
                {/* Profile Image */}
                <div className="w-80 h-96 bg-muted/50 rounded-2xl mb-6 overflow-hidden border-2 border-primary/20 relative">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <img 
                      src="/me.jpg" 
                      alt="Gaurav's Profile" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement.innerHTML = '<span class="text-6xl">👤</span>';
                      }}
                    />
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
                      className="w-12 h-12 rounded-xl border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <link.icon className="h-5 w-5 text-primary" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, <span className="text-cyan-400">Gaurav</span> Here.
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                And I'm working on my dreams :)
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                A graduate from the <span className="text-foreground font-medium">Indian Institute of Technology Jodhpur (IIT Jodhpur)</span>.
              </p>

              <p>
                <span className="text-foreground font-medium">Areas I love exploring:</span> software dev, algorithms, cybersecurity, Quant, and core hardware electronics.
              </p>

              <p>
                I like working in a <span className="text-cyan-400 font-medium">team</span>, collaborating and networking with them.
              </p>

              <p className="text-foreground font-medium">
                Turning coffee into code and <span className="text-cyan-400">bugs into features</span> :) !!
              </p>

              <p className="text-sm">
                Adding few more things here soon !!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;