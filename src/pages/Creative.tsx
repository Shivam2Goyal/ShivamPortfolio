import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  ExternalLink,
  Eye,
  Plus,
  Palette,
  PenTool,
  Music,
  Video,
  Quote,
} from "lucide-react";

const Creative = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedContent, setSelectedContent] = useState(null);

  // Poster designs - easy to add/remove
  const posterDesigns = [
    {
      id: 1,
      title: "The Fall of Icarus",
      category: "poster",
      image: "posters/icarus.png", // Replace with actual image paths: /posters/poster1.jpg
      description: "Clean minimalist brand poster design",
      tools: ["Illustrator", "Photoshop"],
      tags: ["Event Design", "Typography", "Branding"],
    },
    {
      id: 2,
      title: "The Fault",
      category: "poster",
      image: "posters/fault.png", // Replace with: /posters/poster2.jpg
      description: "Clean minimalist brand poster design",
      tools: ["Illustrator"],
      tags: ["Branding", "Minimalism", "Corporate"],
    },
    {
      id: 3,
      title: "John Mayer - Room for Squares X Battle Studies",
      category: "poster",
      image: "posters/johnmayer.png", // Replace with: /posters/poster3.jpg
      description: "Dynamic music concert poster",
      tools: ["Photoshop", "Illustrator"],
      tags: ["Music", "Entertainment", "Vibrant"],
    },
    {
      id: 10,
      title: "Language of Eyes",
      category: "poster",
      image: "posters/eyes.png", // Replace with: /posters/poster3.jpg
      description: "Dynamic music concert poster",
      tools: ["Photoshop", "Illustrator"],
      tags: ["Music", "Entertainment", "Vibrant"],
    },
    {
      id: 11,
      title: "Inhumane",
      category: "poster",
      image: "posters/inhumane.png", // Replace with: /posters/poster3.jpg
      description: "Dynamic music concert poster",
      tools: ["Photoshop", "Illustrator"],
      tags: ["Music", "Entertainment", "Vibrant"],
    },
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
      title: "For When It's My Turn to Break",
      category: "poetry",
      content: `I comfort the paining souls,
Hear their stories, take their tolls —
Listening as if their storms
Are heavier than my own norms.

But am I really a good person,
When the thought I try to hide
Is hoping someday they’ll return
To sit with me when I confide?

Am I truly a good friend,
Or just a fraud, playing pretend?
Faking kindness to keep my place —
'Cause without it, I lose my space.

Would they still sit beside me,
When the mask begins to fall?
When I’m no longer comforting,
And my mind builds up a wall?

I call it the mask of kindness,
It hides what’s buried deep inside —
Not compassion, but a selfishness
That guards my bruised-up pride.

A question now for you, my ally,
One I whisper to the sky:
Does it count as love, sincere and true,
If I’m just hoping it returns too?

Does it count as help I give,
If I expect it back to live?
Or am I just carving a space
In someone’s heart — just in case?

I know these words don’t flow or rhyme,
It’s just how my heart speaks each time —
Whenever it feels that quiet chime,
It spills the truth, not polished lines.

I feel the guilt when people say
That I’m so kind, in some soft way —
But it wasn’t kindness pure and true,
I only helped to feel valued too.

So when the time would come someday,
They’d share my pain, not walk away.`,
      theme: "Technology & Code",
      date: "2024",
    },
    {
      id: 5,
      title: "Starfall",
      category: "poetry",
      content: `We all love a shining star, don’t we?
We look up at the night sky — and there they are,
Twinkling like the happiest souls in the universe.
We compare our loved ones to stars;
And when they leave us,
We name a star in their memory.
They make the night sky more beautiful,
A quiet companion to the moon
In the darkest of nights.

But what happens when a star dies?

Does that mean the love we held
Vanishes with it?
Does the moon mourn —
Or even notice its fall?
Do the other stars dim for a moment
In silent tribute,
Or do they keep glowing, untouched?

We see stars as distant dots,
Tiny lights that flicker and fade —
Not realizing how massive they are,
What gravity they carry,
What fire they hide behind the glow.

We never see how they burn
Just to be beautiful,
How they collapse
Long before their light disappears.

Each day, millions of stars end themselves —
Quietly, without ceremony —
And millions are born,
Only to begin the same fate.

But the moon?
The bloody moon never even turns its face.
Still glowing, still adored,
Unmoved by the collapse nearby.

Only the planets mourn —
The ones that once basked
In that star’s warmth.
They spin colder,
Grow wild,
Drift out of orbit,
Killing and dying in their grief.

Oh, the planets…

And in the end,
All that remains is stardust —
The silence that was always there,
Just hidden
Behind the brilliance of the burning.

A silence so vast,
We only notice it
When the light is gone.`,
      theme: "Creativity & Tech",
      date: "2024",
    },
    {
      id: 6,
      title: "The Beating Kingdom",
      category: "poetry",
      content: `In the aching Kingdom of my heart,
I keep you from where it starts.
In the kingdom of dark, where silence rules,
You play beautiful melodies, my favourite tunes.
Doubts making its foundation, jealousy making its structures,
You create an aura, where all my ego ruptures.
I don't know why I'm writing this,
Maybe it's you controlling me from the throne,
Where you sit and write my mood for the day,
And that's how, you remain the only art, desired by this trembling heart.`,
      theme: "AI & Humanity",
      date: "2024",
    },
    {
      id: 12,
      title: "वह तुम्हारी क्या लगती है?",
      category: "poetry",
      content: `मुझे वो मेरा चांद लगती है,
चांद क्या है,
मुझे वो मेरा ब्रह्माण्ड लगती है।
उसकी आंखों में डूब कर,
ये पूरी कायनात छोटी लगती है।
उसके उन बालों की सुगंध से,
फूलों की हर महक तक फीकी लगती है।
क्या कहना उसकी बातों का,
हमें अब ये मिठाई भी बेस्वाद सी लगती है।
बस एक स्पर्श से उसके,
हमारी हर चोट भरने लगती है।
और अगर कभी पूछ ले हमारा हाल वो हमसे,
मुसीबत खुद हमसे ज़रा दूर सी चलने लगती है।
------------- मगर -------------
कि काश कि तुम मौत होते, एक दिन आते ज़रूर,
अफसोस कि तुम जिंदगी हो, छोड़ कर जाओगे ज़रूर।`,
      theme: "AI & Humanity",
      date: "2024",
    },
    // TO ADD MORE POEMS:
    // Copy format above and update id, title, content, theme
  ];

  // Videos and audio (easy to add)
  const mediaContent = [
    // {
    //   id: 7,
    //   title: "Creative Process Timelapse",
    //   category: "video",
    //   thumbnail: "/api/placeholder/300/200", // Replace with: /media/video1-thumb.jpg
    //   url: "#", // Replace with actual video URL (YouTube, Vimeo, etc.)
    //   description: "Watch my poster design process from concept to completion",
    //   duration: "5:23",
    // },
    // {
    //   id: 8,
    //   title: "Ambient Study Music",
    //   category: "audio",
    //   thumbnail: "/api/placeholder/300/200", // Replace with: /media/audio1-thumb.jpg
    //   url: "#", // Replace with actual audio URL (SoundCloud, Spotify, etc.)
    //   description: "Curated playlist of music that inspires my creativity",
    //   duration: "45:00",
    // },
    // {
    //   id: 9,
    //   title: "Design Philosophy Talk",
    //   category: "video",
    //   thumbnail: "/api/placeholder/300/200", // Replace with: /media/video2-thumb.jpg
    //   url: "#",
    //   description: "My thoughts on the intersection of technology and design",
    //   duration: "12:45",
    // },
    // TO ADD MORE MEDIA:
    // Copy format above and update paths, URLs, descriptions
  ];

  const categories = [
    { id: "all", label: "All Work" },
    { id: "poster", label: "Poster Designs" },
    { id: "poetry", label: "Writings" },
    { id: "video", label: "Videos" },
    { id: "audio", label: "Audio" },
  ];

  const filteredContent = () => {
    if (selectedCategory === "all") {
      return [...posterDesigns, ...poems, ...mediaContent];
    }
    return [
      ...posterDesigns.filter((item) => item.category === selectedCategory),
      ...poems.filter((item) => item.category === selectedCategory),
      ...mediaContent.filter((item) => item.category === selectedCategory),
    ];
  };

  return (
    <div className="min-h-screen bg-background font-bree-serif">
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
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="rounded-full smooth-transition"
              >
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
              <Card
                key={item.id}
                className="card-hover overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Poster Designs - Only image and caption, with type guard */}
                {item.category === "poster" && "image" in item && (
                  <>
                    <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-[2/3] overflow-hidden relative group cursor-pointer">
                          {item.image ? (
                            <img
                              src={
                                item.image.startsWith("/")
                                  ? item.image
                                  : "/" + item.image
                              }
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-muted flex items-center justify-center">
                              <span className="text-muted-foreground">
                                No image
                              </span>
                            </div>
                          )}
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button variant="secondary" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Full Size
                            </Button>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-6xl max-h-[95vh] overflow-auto p-0">
                        <DialogHeader>
                          <DialogTitle>{item.title}</DialogTitle>
                        </DialogHeader>
                        <div className="w-full flex justify-center">
                          <div className="aspect-[2/3] w-full max-w-3xl h-[80vh] flex items-center justify-center rounded-lg overflow-hidden">
                            {item.image ? (
                              <img
                                src={
                                  item.image.startsWith("/")
                                    ? item.image
                                    : "/" + item.image
                                }
                                alt={item.title}
                                className="w-full h-full object-contain rounded-lg shadow-lg"
                              />
                            ) : (
                              <div className="w-full h-full bg-muted flex items-center justify-center">
                                <span className="text-muted-foreground">
                                  No image
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="p-6 text-center">
                          <h3 className="text-xl font-semibold mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                    </div>
                  </>
                )}

                {/* Poetry */}
                {item.category === "poetry" && "content" in item && (
                  <div className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-6 h-6 text-accent/30" />
                    <h3 className="text-xl font-semibold text-primary mb-4">
                      {item.title}
                    </h3>
                    <div className="bg-muted/30 rounded-lg p-4 mb-4 relative">
                      <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-sm font-mono line-clamp-6">
                        {item.content}
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary"
                          >
                            <PenTool className="w-4 h-4 mr-2" />
                            Read More
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-semibold text-primary">
                              {item.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="bg-muted/30 rounded-lg p-6">
                            <p className="text-foreground leading-relaxed whitespace-pre-line font-mono text-base">
                              {item.content}
                            </p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                )}

                {/* Media Content */}
                {(item.category === "video" || item.category === "audio") &&
                  "url" in item && (
                    <>
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="aspect-video overflow-hidden relative group cursor-pointer">
                            <div className="w-full h-full bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                              <div className="text-center text-muted-foreground">
                                {item.category === "video" ? (
                                  <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                ) : (
                                  <Music className="w-12 h-12 mx-auto mb-2 opacity-50" />
                                )}
                                <p className="text-sm font-medium">
                                  {item.title}
                                </p>
                                <p className="text-xs opacity-70">
                                  {item.duration}
                                </p>
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
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                          <DialogHeader>
                            <DialogTitle>{item.title}</DialogTitle>
                          </DialogHeader>
                          <div className="w-full flex justify-center">
                            <div className="aspect-video w-full max-w-3xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center rounded-lg">
                              <div className="text-center text-muted-foreground">
                                {item.category === "video" ? (
                                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                ) : (
                                  <Music className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                )}
                                <p className="text-lg font-medium">
                                  {item.title}
                                </p>
                                <p className="text-sm opacity-70">
                                  Full screen {item.category} player
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  asChild
                                >
                                  <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Open External Link
                                  </a>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </>
                  )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Create Together</h3>
          <p className="text-muted-foreground mb-8">
            Interested in collaborating on creative projects or discussing the
            intersection of technology and art?
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
