import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gradient animate-fade-in">
          About Me
        </h2>
        
        <Card className="p-8 md:p-12 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group">
          <div className="relative">
            {/* Quote decoration */}
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground relative z-10 group-hover:text-foreground transition-colors duration-500">
              I'm <span className="text-primary font-semibold">Shivam</span>, a curious builder at the intersection of{" "}
              <span className="text-primary font-semibold">AI, data, and design</span>. 
              Currently pursuing my B.Tech in AI and Data Science at{" "}
              <span className="text-accent font-semibold">IIT Jodhpur</span>, 
              I enjoy experimenting with cutting-edge machine learning while also 
              dabbling in creative pursuits like web design and poetry.
            </p>
            
            <p className="mt-6 text-lg md:text-xl leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              My goal is to craft solutions that are not only{" "}
              <span className="text-accent font-semibold">intelligent</span> but also{" "}
              <span className="text-primary font-semibold">human-centered</span>. 
              Whether it's building neural networks for emotion recognition or developing 
              efficient data structures for browser history management, I strive to create 
              technology that makes a meaningful impact.
            </p>

            {/* Decorative bottom quote */}
            <div className="absolute -bottom-4 -right-4 text-6xl text-accent/20 font-serif transform rotate-180">"</div>
          </div>

          {/* Education highlight */}
          <div className="mt-8 pt-8 border-t border-border/30">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="text-xl font-semibold text-primary">B.Tech in AI & Data Science</h3>
                <p className="text-muted-foreground">Indian Institute of Technology, Jodhpur</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">7.24</p>
                <p className="text-sm text-muted-foreground">CGPA</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;