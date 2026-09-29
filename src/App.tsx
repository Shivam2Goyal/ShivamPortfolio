import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import Gallery from "./pages/Gallery";
import PoemView from "./pages/PoemView";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import AnimatedBackground from "./components/AnimatedBackground";
import Clock from "./components/Clock";

// Markdown rendering (react-markdown + remark-gfm) is only needed on an
// individual post page, not sitewide — split it into its own chunk so every
// other route doesn't pay for it.
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatedBackground />
      <Clock />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/writing/:slug" element={<PoemView />} />
          {/* Old "Beyond Tech" page — content now lives at /gallery */}
          <Route path="/creative" element={<Navigate to="/gallery" replace />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={null}>
                <BlogPost />
              </Suspense>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
