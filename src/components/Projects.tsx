import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Github,
  ExternalLink,
  Calendar,
  TrendingUp,
  Filter,
} from "lucide-react";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Project Raseed",
      period: "Jul 2025 – Present",
      description:
        "AI-first receipt intelligence engine combining Google Wallet integration with Gemini AI for smart expense tracking and financial insights.",
      technologies: [
        "Gemini AI",
        "Google Wallet API",
        "Python",
        "React",
        "Firebase",
      ],
      status: "In Development",
      highlight: "AI-First Intelligence",
      category: "Machine Learning",
    },
    {
      title: "SentimentSphere",
      period: "Feb 2025 – Mar 2025",
      description:
        "Multimodal emotion recognition web app combining CNN-based facial detection with BiLSTM text classification for real-time emotion analysis.",
      technologies: [
        "TensorFlow",
        "OpenCV",
        "BiLSTM",
        "Flask",
        "GloVe",
        "Haar Cascade",
      ],
      metrics: "68% facial accuracy, 65% text accuracy",
      github: "#",
      highlight: "Multimodal AI",
      category: "Machine Learning",
    },
    {
      title: "ThreatHawk",
      period: "Feb 2025 – Apr 2025",
      description:
        "Advanced ML-based Network Intrusion Detection System using ensemble methods to detect malicious network activity with high precision.",
      technologies: ["Scikit-learn", "XGBoost", "Random Forest", "SVM", "k-NN"],
      metrics: ">90% accuracy, AUC >0.90",
      github: "#",
      highlight: "Cybersecurity ML",
      category: "Machine Learning",
    },
    {
      title: "HyperTrie",
      period: "Nov 2024 – Dec 2024",
      description:
        "Efficient browser history manager using Trie data structure with Chrome extension for O(L) time complexity URL search and retrieval.",
      technologies: [
        "C++",
        "Python",
        "Flask",
        "JavaScript",
        "Chrome Extension API",
      ],
      metrics: "95% faster than list-based search",
      github: "#",
      highlight: "Data Structures",
      category: "Algorithms",
    },
    {
      title: "GMM Image Segmentor",
      period: "Apr 2025 – May 2025",
      description:
        "Advanced image segmentation using Gaussian Mixture Models with EM algorithm and Dirichlet Process, incorporating spatial and LBP features.",
      technologies: ["Python", "NumPy", "OpenCV", "Scikit-image", "Matplotlib"],
      metrics: "Jaccard coefficient up to 0.917",
      github: "#",
      highlight: "Computer Vision",
      category: "Coursework",
    },
  ];

  const categories = [
    "All Projects",
    "Machine Learning",
    "Algorithms",
    "Android",
    "Frontend",
    "Backend",
    "Full Stack",
    "Coursework",
  ];

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient animate-fade-in font-playfair">
          Projects
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 font-playfair ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group bg-gradient-card border-border/50 backdrop-blur-sm card-hover overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors duration-300 font-playfair">
                    {project.title}
                  </CardTitle>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>

                <CardDescription className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0 space-y-4">
                {/* Metrics */}
                {(project.metrics || project.status) && (
                  <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                    <TrendingUp className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium text-accent">
                      {project.metrics || project.status}
                    </span>
                  </div>
                )}

                {/* Technologies */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Technologies:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-4">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-accent/30 hover:border-accent hover:bg-accent/10 transition-all duration-300"
                    asChild
                  >
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 3 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 font-playfair"
            >
              {showAll
                ? "Show Less"
                : `Show All ${filteredProjects.length} Projects`}
            </Button>
          </div>
        )}

        {/* View GitHub */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 font-playfair"
            asChild
          >
            <a
              href="https://github.com/shivamgoyal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
