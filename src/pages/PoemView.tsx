import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { poems } from "@/data/poems";

const PoemView = () => {
  const { slug } = useParams();
  const poem = poems.find((p) => p.slug === slug);

  if (!poem) {
    return <Navigate to="/gallery" replace />;
  }

  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <main className="mx-auto max-w-2xl px-6 pb-20 pt-32 md:pt-40">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Gallery
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          {poem.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{poem.date}</p>

        <p className="mt-10 whitespace-pre-line text-lg leading-relaxed text-foreground">
          {poem.content}
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default PoemView;
