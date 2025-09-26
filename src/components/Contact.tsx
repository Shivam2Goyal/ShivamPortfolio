import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Mail, Code } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: "public/icons/linkedin.svg",
      href: "https://linkedin.com/in/shivam-goyal-85b63928a/",
      label: "LinkedIn",
      color: "text-blue-500",
    },
    {
      icon: Github,
      href: "https://github.com/Shivam2Goyal",
      label: "GitHub",
      color: "text-gray-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/shivshiv_goyal/",
      label: "Instagram",
      color: "text-pink-500",
    },
    {
      icon: "public/icons/codeforces.svg",
      href: "https://codeforces.com/profile/_sg_",
      label: "Codeforces",
      color: "text-blue-400",
    },
    {
      icon: "public/icons/leetcode.svg",
      href: "https://leetcode.com/u/_sg_-/",
      label: "LeetCode",
      color: "text-yellow-500",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient animate-fade-in font-playfair">
          Let's Connect
        </h2>

        <Card className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="absolute top-4 right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          <div className="absolute bottom-4 left-4 w-24 h-24 bg-accent/10 rounded-full blur-xl" />

          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Always thrilled to connect with developers, researchers, and
                creative folks. Got a project idea, want to collab, or just chat
                tech and innovation? Let's talk!
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground font-playfair">
                Find me on
              </h3>

              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((link, index) => {
                  // Assign glow color based on label (case-insensitive)
                  let glow = "";
                  switch (link.label.toLowerCase()) {
                    case "leetcode":
                      glow = "hover:shadow-[0_0_20px_4px_rgba(255,221,51,0.4)]"; // yellowish
                      break;
                    case "instagram":
                      glow = "hover:shadow-[0_0_20px_4px_rgba(255,51,153,0.4)]"; // pinkish
                      break;
                    case "github":
                      glow = "hover:shadow-[0_0_20px_4px_rgba(0,0,0,1)]"; // blackish
                      break;
                    case "linkedin":
                      glow = "hover:shadow-[0_0_20px_4px_rgba(51,153,255,0.4)]"; // blueish
                      break;
                    case "codeforces":
                      glow = "hover:shadow-[0_0_20px_4px_rgba(51,153,255,0.4)]"; // blueish
                      break;
                    default:
                      glow = "";
                  }
                  return (
                    <Button
                      key={link.label}
                      variant="outline"
                      size="sm"
                      className={`group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 font-playfair ${glow}`}
                      asChild
                    >
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {typeof link.icon === "string" ? (
                          <img
                            src={link.icon}
                            alt={link.label}
                            className="h-4 w-4"
                          />
                        ) : (
                          <link.icon
                            className={`h-4 w-4 ${link.color} group-hover:scale-110 transition-transform duration-300`}
                          />
                        )}
                        <span className="sm:inline">{link.label}</span>
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Email */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground font-playfair">
                Or
              </h3>

              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-playfair"
                asChild
              >
                <a
                  href="mailto:b23cm1036@iitj.ac.in"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  drop me an email
                </a>
              </Button>
            </div>

            <div className="pt-6 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                Open to collaborations, internships, research opportunities, and
                creative partnerships.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
