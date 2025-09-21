import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Built with{" "}
            <Heart className="inline h-4 w-4 text-red-500 animate-pulse" />{" "}
            using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-muted-foreground text-xs">
            © 2024 Shivam Goyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;