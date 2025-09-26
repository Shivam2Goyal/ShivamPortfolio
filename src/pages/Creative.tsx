import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Eye, Plus, Palette, PenTool, Music, Video, Quote } from "lucide-react";

const Creative = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Poster designs - easy to add/remove
  const posterDesigns = [
    {
      id: 1,
      title: "Event Poster Design",
      category: "poster",
      image: "/api/placeholder/400/600", // Replace with actual image paths: /posters/poster1.jpg
      description: "Modern event poster with vibrant colors",
      tools: ["Illustrator", "Photoshop"],
      tags: ["Event Design", "Typography", "Branding"]
    },
    {
      id: 2,
      title: "Brand Identity Poster",
      category: "poster", 
      image: "/api/placeholder/400/600", // Replace with: /posters/poster2.jpg
      description: "Clean minimalist brand poster design",
      tools: ["Illustrator"],
      tags: ["Branding", "Minimalism", "Corporate"]
    },
    {
      id: 3,
      title: "Concert Poster",
      category: "poster",
      image: "/api/placeholder/400/600", // Replace with: /posters/poster3.jpg
      description: "Dynamic music concert poster",
      tools: ["Photoshop", "Illustrator"],
      tags: ["Music", "Entertainment", "Vibrant"]
    }
    // TO ADD MORE POSTERS:
    // Just copy the format above and update:
    // - id (increment number)
    // - title, description, image path
    // - tools and tags arrays
  ];

  // Poetry collection
  const poems = [
    {
      id: 4,
      title: "Digital Dreams",
      category: "poetry",
      content: `In circuits deep and algorithms bright,
Where data flows like morning light,
I find my muse in lines of code,
A digital poet's abode.

Each function tells a story true,
Of logic mixed with passion too,
In binary beats my heart does dance,
Lost in computational trance.`,
      theme: "Technology & Code",
      date: "2024"
    },
    {
      id: 5,
      title: "The Creator's Mind",
      category: "poetry", 
      content: `Between the lines of code I write,
Lies thoughts that dance in black and white,
Where creativity meets the machine,
And dreams become the in-between.

I paint with pixels, sculpt with data,
My canvas vast, my brush - metadata,
In this digital realm I find my voice,
Technology and art, my conscious choice.`,
      theme: "Creativity & Tech",
      date: "2024"
    },
    {
      id: 6,
      title: "Human in the Loop",
      category: "poetry",
      content: `They speak of AI taking over,
But I see partnership, not takeover,
Where human intuition meets machine precision,
We craft together a shared vision.

Not replacement, but enhancement,
Not fear, but advancement,
In every model that I train,
Humanity should always remain.`,
      theme: "AI & Humanity",
      date: "2024"
    }
    // TO ADD MORE POEMS:
    // Copy format above and update id, title, content, theme
  ];

  // Videos and audio (easy to add)
  const mediaContent = [
    {
      id: 7,
      title: "Creative Process Timelapse",
      category: "video",
      thumbnail: "/api/placeholder/300/200", // Replace with: /media/video1-thumb.jpg
      url: "#", // Replace with actual video URL (YouTube, Vimeo, etc.)
      description: "Watch my poster design process from concept to completion",
      duration: "5:23"
    },
    {
      id: 8,
      title: "Ambient Study Music",
      category: "audio",
      thumbnail: "/api/placeholder/300/200", // Replace with: /media/audio1-thumb.jpg
      url: "#", // Replace with actual audio URL (SoundCloud, Spotify, etc.)
      description: "Curated playlist of music that inspires my creativity",
      duration: "45:00"
    },
    {
      id: 9,
      title: "Design Philosophy Talk",
      category: "video",
      thumbnail: "/api/placeholder/300/200", // Replace with: /media/video2-thumb.jpg
      url: "#",
      description: "My thoughts on the intersection of technology and design",
      duration: "12:45"
    }
    // TO ADD MORE MEDIA:
    // Copy format above and update paths, URLs, descriptions
  ];

  const categories = [
    { id: "all", label: "All Work", icon: "🎨" },
    { id: "poster", label: "Poster Designs", icon: "🎭" },
    { id: "poetry", label: "Poetry", icon: "✍️" },
    { id: "video", label: "Videos", icon: "🎬" },
    { id: "audio", label: "Audio", icon: "🎵" }
  ];

  const filteredContent = () => {
    if (selectedCategory === "all") {
      return [
        ...posterDesigns,
        ...poems,
        ...mediaContent
      ];
    }
    return [
      ...posterDesigns.filter(item => item.category === selectedCategory),
      ...poems.filter(item => item.category === selectedCategory),
      ...mediaContent.filter(item => item.category === selectedCategory)
    ];
  };

  return (
    <div className="min-h-screen bg-background font-playfair">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a 
            href="/" 
            className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors smooth-transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </a>
          <h1 className="text-2xl font-bold text-gradient">Beyond Tech</h1>
          <div className="w-24"></div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6 animate-fade-in">
            Creative Expression
          </h2>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full smooth-transition"
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredContent().map((item, index) => (
              <Card key={item.id} className="card-hover overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                {/* Poster Designs */}
                {item.category === "poster" && 'tools' in item && (
                  <>
                    <div className="aspect-[2/3] overflow-hidden relative group">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          <Palette className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs opacity-70">Replace with your poster</p>
                        </div>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Full Size
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tools.map((tool) => (
                          <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">{tool}</Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.tags?.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* Poetry */}
                {item.category === "poetry" && 'content' in item && (
                  <div className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-6 h-6 text-accent/30" />
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                      <Badge variant="outline" className="text-xs">{item.theme}</Badge>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-4 mb-4 relative">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm font-mono">
                        {item.content}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{item.date}</Badge>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <PenTool className="w-4 h-4 mr-2" />
                        Read More
                      </Button>
                    </div>
                  </div>
                )}

                {/* Media Content */}
                {(item.category === "video" || item.category === "audio") && 'url' in item && (
                  <>
                    <div className="aspect-video overflow-hidden relative group">
                      <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                        <div className="text-center text-muted-foreground">
                          {item.category === "video" ? (
                            <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          ) : (
                            <Music className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          )}
                          <p className="text-sm font-medium">{item.title}</p>
                          <p className="text-xs opacity-70">{item.duration}</p>
                        </div>
                      </div>
                      {/* Play overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {item.category === "video" ? "Watch" : "Listen"}
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">{item.duration}</Badge>
                        <Button variant="outline" size="sm" asChild>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open
                          </a>
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </Card>
            ))}

            {/* Add New Content Card */}
            <Card className="card-hover border-dashed border-2 border-muted-foreground/30 flex items-center justify-center min-h-[300px] group">
              <div className="text-center p-6">
                <Plus className="w-12 h-12 text-muted-foreground mx-auto mb-4 group-hover:text-primary transition-colors" />
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  Add new {selectedCategory === "all" ? "content" : selectedCategory}
                </p>
                <p className="text-sm text-muted-foreground/70 mt-2">
                  Edit Creative.tsx to add more work
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Creative Philosophy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center bg-gradient-card border-border/50">
            <h3 className="text-2xl font-semibold mb-4 text-gradient">Creative Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe that the most powerful innovations emerge when technical precision meets creative intuition. 
              Through design, I explore visual storytelling. Through poetry, I capture the human experience in our digital age. 
              Each piece reflects my journey of finding beauty in complexity and meaning in the intersection of art and technology.
            </p>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Create Together</h3>
          <p className="text-muted-foreground mb-8">
            Interested in collaborating on creative projects or discussing the intersection of technology and art?
          </p>
          <a 
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-all duration-300 smooth-transition"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Creative;