import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "b23cm1036@iitj.ac.in",
      href: "mailto:b23cm1036@iitj.ac.in",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/shivamgoyal",
      href: "https://github.com/shivamgoyal",
      color: "accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/shivamgoyal",
      href: "https://linkedin.com/in/shivamgoyal",
      color: "primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "IIT Jodhpur, Rajasthan",
      href: "#",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          Let's Connect
        </h2>

        <Card className="p-8 md:p-12 bg-gradient-card border-border/50 backdrop-blur-sm relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Ready to collaborate on something amazing?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you want to discuss AI research, explore innovative project ideas, 
                or just have a conversation about the future of technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact methods grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.label}
                  className="p-6 bg-background/50 border-border/30 hover:border-primary/30 transition-all duration-300 group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => method.href !== "#" && window.open(method.href, "_blank")}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-${method.color}/10 group-hover:bg-${method.color}/20 transition-colors duration-300`}>
                      <method.icon className={`h-5 w-5 text-${method.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {method.label}
                      </h4>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 truncate">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to action */}
            <div className="text-center">
              <Button 
                size="lg"
                className="bg-gradient-hero hover:shadow-glow transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="mailto:b23cm1036@iitj.ac.in">
                  <Mail className="h-5 w-5 mr-2" />
                  Get In Touch
                </a>
              </Button>
            </div>

            {/* Footer note */}
            <div className="mt-8 pt-8 border-t border-border/30 text-center">
              <p className="text-sm text-muted-foreground">
                Currently open to{" "}
                <span className="text-primary font-medium">research collaborations</span>,{" "}
                <span className="text-accent font-medium">internship opportunities</span>, and{" "}
                <span className="text-primary font-medium">innovative project partnerships</span>
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;