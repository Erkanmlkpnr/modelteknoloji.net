import { client, type BlogPost, type TeamMember } from "./sanity";
import blogsFallback from "./json/blogs.json";

const blogFields = `
  _id,
  title,
  "slug": slug.current,
  summary,
  coverImage,
  publishedAt,
  "authorName": authorName,
  content,
`;

function mapBlogFallback(blog: (typeof blogsFallback)[0]): BlogPost {
  return {
    _id: blog.id,
    title: blog.title,
    slug: { current: blog.id },
    summary: blog.summary,
    coverImage: blog.imageUrl ? ({ _type: "url", url: blog.imageUrl } as any) : null,
    publishedAt: blog.date,
    authorName: blog.author,
    content: blog.content
      .map((s: any) => {
        if (s.type === "paragraph") return { _type: "block", children: [{ _type: "span", text: s.text || "" }] };
        if (s.type === "heading")   return { _type: "block", style: "h2", children: [{ _type: "span", text: s.text || "" }] };
        if (s.type === "list")      return { _type: "block", listItem: "bullet", children: (s.items || []).map((i: string) => ({ _type: "span", text: i })) };
        return null;
      })
      .filter(Boolean),
  } as BlogPost;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!client) throw new Error("Sanity not configured");
    const posts = (await client.fetch(`*[_type == "blogPost"] | order(publishedAt desc) { ${blogFields} }`)) as BlogPost[];
    if (!posts || posts.length === 0) return blogsFallback.map(mapBlogFallback);
    return posts;
  } catch {
    return blogsFallback.map(mapBlogFallback);
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    if (!client) throw new Error("Sanity not configured");
    const post = (await client.fetch(`*[_type == "blogPost" && slug.current == $slug][0] { ${blogFields} }`, { slug })) as BlogPost | null;
    if (!post) {
      const fb = blogsFallback.find((b) => b.id === slug);
      return fb ? mapBlogFallback(fb) : null;
    }
    return post;
  } catch {
    const fb = blogsFallback.find((b) => b.id === slug);
    return fb ? mapBlogFallback(fb) : null;
  }
}

export async function getActiveTeamMembers(): Promise<TeamMember[]> {
  try {
    if (!client) throw new Error("Sanity not configured");
    const members = (await client.fetch(`*[_type == "teamMember" && isActive == true] | order(sortOrder asc) { _id, name, role, photo, linkedinUrl, sortOrder, isActive }`)) as TeamMember[];
    return members?.length ? members : [];
  } catch {
    return [];
  }
}
