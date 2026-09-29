export interface Poster {
  id: number;
  slug: string;
  title: string;
  image: string; // thumb tier, for the gallery grid
  fullImage: string; // full tier, loaded on demand in the viewer
  description: string;
  tools: string[];
  tags: string[];
}

// TO ADD MORE POSTERS:
// 1. Drop the source file in assets-source/posters/
// 2. Run `npm run optimize:posters` to generate the thumb/full WebP variants
// 3. Copy the format below and update id, slug, title, image/fullImage paths, tools, tags
export const posters: Poster[] = [
  {
    id: 1,
    slug: "the-fall-of-icarus",
    title: "The Fall of Icarus",
    image: "/posters/thumb/icarus.webp",
    fullImage: "/posters/full/icarus.webp",
    description: "Romanticizing the Fall of Icarus",
    tools: ["Illustrator", "Photoshop"],
    tags: ["Event Design", "Typography", "Branding"],
  },
  {
    id: 6,
    slug: "under-the-red-hood",
    title: "Under the Red Hood",
    image: "/posters/thumb/redhood.webp",
    fullImage: "/posters/full/redhood.webp",
    description: "Gritty halftone comic poster design",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Comic Art", "Illustration", "Typography"],
  },
  {
    id: 7,
    slug: "lucifer",
    title: "Lucifer",
    image: "/posters/thumb/lucifer.webp",
    fullImage: "/posters/full/lucifer.webp",
    description: "Gothic illustrated typography poster",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Typography", "Illustration", "Dark Art"],
  },
  {
    id: 8,
    slug: "radiohead",
    title: "Radiohead",
    image: "/posters/thumb/radiohead.webp",
    fullImage: "/posters/full/radiohead.webp",
    description: "Mixed-media band collage poster",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Music", "Collage", "Typography"],
  },
  {
    id: 2,
    slug: "the-fault",
    title: "The Fault",
    image: "/posters/thumb/fault.webp",
    fullImage: "/posters/full/fault.webp",
    description: "Clean minimalist brand poster design",
    tools: ["Illustrator"],
    tags: ["Branding", "Minimalism", "Corporate"],
  },
  {
    id: 3,
    slug: "john-mayer-room-for-squares-x-battle-studies",
    title: "John Mayer - Room for Squares X Battle Studies",
    image: "/posters/thumb/johnmayer.webp",
    fullImage: "/posters/full/johnmayer.webp",
    description: "Dynamic music concert poster",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Music", "Entertainment", "Vibrant"],
  },
  {
    id: 4,
    slug: "language-of-eyes",
    title: "Language of Eyes",
    image: "/posters/thumb/eyes.webp",
    fullImage: "/posters/full/eyes.webp",
    description: "Dynamic music concert poster",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Music", "Entertainment", "Vibrant"],
  },
  {
    id: 5,
    slug: "inhumane",
    title: "Inhumane",
    image: "/posters/thumb/inhumane.webp",
    fullImage: "/posters/full/inhumane.webp",
    description: "Dynamic music concert poster",
    tools: ["Photoshop", "Illustrator"],
    tags: ["Music", "Entertainment", "Vibrant"],
  },
];
