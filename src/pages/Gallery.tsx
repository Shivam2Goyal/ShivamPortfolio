import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poems } from "@/data/poems";
import { posters } from "@/data/posters";

// Decorative gradients used only as a stand-in for poems that don't have
// real artwork yet — swap in a real `image` on the poem once available and
// this is skipped automatically. Cycled by index so placeholders don't all
// look identical.
const placeholderGradients = [
  "from-rose-400 via-orange-300 to-amber-200",
  "from-sky-400 via-indigo-400 to-violet-300",
  "from-emerald-400 via-teal-300 to-cyan-200",
  "from-fuchsia-400 via-pink-400 to-rose-300",
];

const GalleryTile = ({
  title,
  image,
  gradient,
  aspect = "aspect-[2/3]",
}: {
  title: string;
  image?: string;
  gradient?: string;
  aspect?: string;
}) => (
  <div className={`relative ${aspect} overflow-hidden rounded-md border border-border`}>
    {image ? (
      <img
        src={image}
        alt={title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"
      />
    ) : (
      <div
        className={`h-full w-full bg-gradient-to-br ${gradient} grayscale transition-all duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0`}
      />
    )}
    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
      <p className="text-xs font-medium uppercase tracking-wide text-white">{title}</p>
    </div>
  </div>
);

const Gallery = () => {
  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 pb-20 pt-32 md:pt-40">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Gallery
        </h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Poems and posters — the non-technical half of what I make.
        </p>

        {/* Poems */}
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-foreground">
            Poems
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {poems.map((poem, index) => (
              <Dialog key={poem.id}>
                <DialogTrigger asChild>
                  <button className="group block text-left">
                    <GalleryTile
                      title={poem.title}
                      image={poem.image}
                      gradient={placeholderGradients[index % placeholderGradients.length]}
                      aspect="aspect-[3/2]"
                    />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto border-border bg-background">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-extrabold tracking-tight text-foreground">
                      {poem.title}
                    </DialogTitle>
                    <p className="text-sm text-muted-foreground">{poem.date}</p>
                  </DialogHeader>
                  <p className="whitespace-pre-line text-base leading-relaxed text-foreground">
                    {poem.content}
                  </p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>

        {/* Posters */}
        <section className="mt-20">
          <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-foreground">
            Posters
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {posters.map((poster) => (
              <Dialog key={poster.id}>
                <DialogTrigger asChild>
                  <button className="group block text-left">
                    <GalleryTile title={poster.title} image={poster.image} />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl border-border bg-background p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle>{poster.title}</DialogTitle>
                  </DialogHeader>
                  <div className="flex justify-center p-6 pt-4">
                    <img
                      src={poster.fullImage}
                      alt={poster.title}
                      loading="lazy"
                      decoding="async"
                      className="max-h-[75vh] w-auto rounded-md object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
