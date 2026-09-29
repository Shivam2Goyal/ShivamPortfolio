import { useParams, Link, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <main className="mx-auto max-w-2xl px-6 pb-20 pt-32 md:pt-40">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{post.date}</p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="prose prose-invert mt-10 max-w-none prose-headings:font-extrabold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-blockquote:border-border prose-blockquote:text-muted-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
