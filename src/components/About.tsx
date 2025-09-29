import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

const About = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Shivam2Goyal",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/shivam-goyal-/",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/shivshiv_goyal/",
      label: "Instagram",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end lg:pr-8">
            <div className="relative">
              {/* Main profile card */}
              <div className="bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-3xl p-8 border border-primary/30 shadow-2xl shadow-cyan-400/20 relative overflow-hidden">
                {/* Fluorescent glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 rounded-3xl" />
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-400/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-emerald-400/15 rounded-full blur-3xl" />

                {/* Profile Image */}
                <div className="relative z-10 w-80 h-96 bg-muted/50 rounded-2xl mb-6 overflow-hidden border-2 border-cyan-400/40 shadow-lg shadow-cyan-400/30">
                  <img
                    src="public/icons/me.jpeg"
                    alt="Shivam's Profile"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML =
                        '<div class="w-full h-full flex items-center justify-center text-muted-foreground"><span class="text-6xl">👤</span></div>';
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

                  {/* Social Links inside image (bottom center) */}
                  <div className="absolute bottom-4 inset-x-0 flex justify-center gap-4">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="sm"
                        className="w-12 h-12 rounded-xl border-white/40 hover:border-cyan-400 hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/30 transition-all duration-300 bg-background/40 backdrop-blur-sm"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          <link.icon className="h-5 w-5 text-white group-hover:text-cyan-300" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-1 space-y-6 lg:pl-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-4">
                Hi, <span className="text-cyan-400">Shivam</span> Here.
              </h3>
              <p className="text-xl text-muted-foreground mb-8">
                And I'm coding my dreams into reality :)
              </p>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                An Undergraduate from the{" "}
                <span className="text-foreground font-medium">
                  Indian Institute of Technology Jodhpur (IIT Jodhpur)
                </span>
                .
              </p>

              <p>
                <span className="text-foreground font-medium">
                  Areas I love exploring:
                </span>{" "}
                Machine Learning, Artificial Intelligence, Data Science,
                Software dev and Algorithms.
              </p>

              <p>
                I like working in a{" "}
                <span className="text-cyan-400 font-medium">team</span>,
                collaborating and networking with them.
              </p>

              <p className="text-foreground font-medium">
                Churning data into <span className="text-cyan-400">magic</span>,
                one clever line at a time :) !!
              </p>

              <p className="text-sm">Adding few more things here soon !!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
