export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}

// Every .md file in src/content/blog/ becomes a post. Frontmatter block at the
// top of the file (title/date/description/tags), everything after it is the
// post body in Markdown.
const rawFiles = import.meta.glob("/src/content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: raw.trim() };
  }
  const [, frontmatter, content] = match;
  const data: Record<string, string> = {};
  for (const line of frontmatter.split("\n")) {
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
    data[key] = value;
  }
  return { data, content: content.trim() };
}

export const posts: BlogPost[] = Object.entries(rawFiles)
  .map(([filePath, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = filePath.split("/").pop()!.replace(/\.md$/, "");
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      description: data.description ?? "",
      tags: data.tags
        ? data.tags.split(",").map((t) => t.trim()).filter(Boolean)
        : [],
      content,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));
