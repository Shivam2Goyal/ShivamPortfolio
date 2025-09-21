import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Palette, PenTool, Quote, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
const Creative = () => {
  const poems = [{
    title: "Digital Dreams",
    content: `In lines of code, I find my voice,\nWhere algorithms dance by choice.\nEach bug a lesson, each fix a rhyme,\nBuilding futures, one line at a time.\n\nThe screen glows soft in midnight's embrace,\nAs data flows through silicon space.\nI dream in Python, think in C,\nA digital poet, wild and free.`,
    theme: "Technology & Code"
  }, {
    title: "The Learning Curve",
    content: `Steep mountains of knowledge ahead I see,\nEach error a teacher, setting me free.\nFrom novice to master, the journey's long,\nBut every small victory makes me strong.\n\nIn neural networks, I find my way,\nThrough gradient descent, day by day.\nThe math may be complex, the path unclear,\nBut passion burns bright, year after year.`,
    theme: "Growth & Learning"
  }, {
    title: "Human in the Machine",
    content: `They say AI will replace us all,\nBut I believe in something more.\nTechnology should lift us tall,\nNot close but open every door.\n\nFor in each model that I train,\nI see a tool to ease our pain.\nNot to replace the human heart,\nBut give compassion a head start.`,
    theme: "AI & Humanity"
  }];
  const designProjects = [{
    title: "Portfolio Experiments",
    description: "Exploring modern design patterns with React and advanced CSS animations",
    technologies: ["React", "CSS Animations", "Framer Motion", "Three.js"],
    image: "🎨"
  }, {
    title: "UI Component Library",
    description: "Custom design system with reusable components and consistent theming",
    technologies: ["TypeScript", "Storybook", "Tailwind CSS", "Radix UI"],
    image: "🧩"
  }, {
    title: "Data Visualization Art",
    description: "Creative interpretations of machine learning datasets through interactive visualizations",
    technologies: ["D3.js", "Python", "Observable", "WebGL"],
    image: "📊"
  }];
  return <div className="min-h-screen">
      {/* Header */}
      <header className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" style={{
        animationDelay: "1s"
      }} />
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Portfolio
            </Button>
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Beyond Tech
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Exploring creativity at the intersection of art, technology, and human expression
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Web Design Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-primary/10">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Web Design Experiments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => {})}
          </div>
        </section>

        {/* Poetry Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-accent/10">
              <PenTool className="h-6 w-6 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-foreground">Poetry & Reflections</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {poems.map((poem, index) => <Card key={poem.title} className="p-8 bg-gradient-card border-border/50 backdrop-blur-sm card-hover group relative overflow-hidden" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="h-8 w-8 text-accent" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300">
                      {poem.title}
                    </h3>
                    <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                      {poem.theme}
                    </Badge>
                  </div>

                  <div className="relative">
                    <div className="absolute -top-2 -left-2 text-3xl text-accent/30">"</div>
                    <div className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 leading-relaxed font-mono text-sm whitespace-pre-line pl-6 pr-4" style={{
                  fontFamily: "'JetBrains Mono', monospace"
                }}>
                      {poem.content}
                    </div>
                    <div className="absolute -bottom-2 -right-2 text-3xl text-accent/30 transform rotate-180">"</div>
                  </div>
                </div>

                {/* Sparkle decoration */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="h-5 w-5 text-primary animate-pulse" />
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>)}
          </div>

          {/* Creative philosophy */}
          <Card className="mt-12 p-8 bg-gradient-card border-border/50 backdrop-blur-sm text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Creative Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              I believe that the best technology is born when logic meets creativity. 
              Through design and poetry, I explore the human side of innovation—
              finding beauty in algorithms, emotion in interfaces, and stories in data.
            </p>
          </Card>
        </section>
      </div>
    </div>;
};
export default Creative;