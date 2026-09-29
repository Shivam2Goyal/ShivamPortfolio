import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/lib/blog";

const Blog = () => {
  return (
    <div className="min-h-screen font-sans relative">
      <Navbar />

      <main className="mx-auto max-w-2xl px-6 pb-20 pt-32 md:pt-40">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">
          Blog
        </h1>

        {posts.length === 0 ? (
          <p className="mt-8 text-muted-foreground">
            Nothing published yet — first post is on the way.
          </p>
        ) : (
          <div className="mt-12 divide-y divide-border">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block py-6">
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <h2 className="mt-1 text-xl font-bold text-foreground underline-offset-4 group-hover:underline">
                  {post.title}
                </h2>
                {post.description && (
                  <p className="mt-2 text-muted-foreground">{post.description}</p>
                )}
              </Link>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
