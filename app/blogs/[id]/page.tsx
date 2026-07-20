import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/sanityQueries";
import { urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import { FiArrowLeft, FiCalendar, FiUser } from "react-icons/fi";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts().catch(() => []);
  return posts.map((p) => ({ id: p.slug?.current ?? p._id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPostBySlug(id).catch(() => null);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blogs/${id}` },
    openGraph: { title: post.title, description: post.summary },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getBlogPostBySlug(id).catch(() => null);
  if (!post) notFound();

  let imgUrl = "";
  try {
    const ci = post.coverImage as any;
    imgUrl = ci?._type === "url" ? ci.url : urlFor(post.coverImage).width(1200).height(600).url();
  } catch {}

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    ...(imgUrl && { image: imgUrl }),
    ...(post.publishedAt && { datePublished: post.publishedAt }),
    author: { "@type": "Person", name: post.authorName ?? "Model Teknoloji" },
    publisher: { "@id": "https://www.modelteknoloji.net/#organization" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.modelteknoloji.net/blogs/${id}` },
    inLanguage: "tr-TR",
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* Header */}
      <div style={{ background: "#fff", borderBottom: "1px solid #E4EAEF", padding: "48px 0 40px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <Link href="/blogs" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#5A6B78", fontSize: 14, marginBottom: 24 }}>
            <FiArrowLeft size={14} /> Tüm yazılar
          </Link>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-.015em", margin: "0 0 20px", color: "#0D2740", lineHeight: 1.1 }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: 24, color: "#5A6B78", fontSize: 14, flexWrap: "wrap" }}>
            {post.authorName && <span style={{ display: "flex", alignItems: "center", gap: 6 }}><FiUser size={13} />{post.authorName}</span>}
            {post.publishedAt && <span style={{ display: "flex", alignItems: "center", gap: 6 }}><FiCalendar size={13} />{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>}
          </div>
        </div>
      </div>

      {/* Cover image */}
      {imgUrl && (
        <div style={{ background: "#F5F7F9", borderBottom: "1px solid #E4EAEF" }}>
          <div className="container" style={{ maxWidth: 800, paddingTop: 32, paddingBottom: 32 }}>
            <img src={imgUrl} alt={post.title} style={{ width: "100%", height: "auto", maxHeight: 440, objectFit: "cover", borderRadius: 16 }} />
          </div>
        </div>
      )}

      {/* Content */}
      <div style={{ background: "#fff", padding: "48px 0 80px" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          {post.summary && (
            <p style={{ fontSize: 19, color: "#5A6B78", lineHeight: 1.65, marginBottom: 36, paddingBottom: 36, borderBottom: "1px solid #E4EAEF" }}>
              {post.summary}
            </p>
          )}
          <div style={{ fontSize: 17, color: "#0D2740", lineHeight: 1.8 }}>
            <PortableText
              value={post.content}
              components={{
                block: {
                  h2: ({ children }) => <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, margin: "40px 0 16px", color: "#0D2740" }}>{children}</h2>,
                  h3: ({ children }) => <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, margin: "32px 0 12px", color: "#0D2740" }}>{children}</h3>,
                  normal: ({ children }) => <p style={{ margin: "0 0 20px" }}>{children}</p>,
                  blockquote: ({ children }) => <blockquote style={{ borderLeft: "3px solid #0696A1", paddingLeft: 20, margin: "28px 0", color: "#5A6B78" }}>{children}</blockquote>,
                },
                list: { bullet: ({ children }) => <ul style={{ paddingLeft: 20, margin: "0 0 20px" }}>{children}</ul> },
                listItem: { bullet: ({ children }) => <li style={{ marginBottom: 8 }}>{children}</li> },
                marks: {
                  strong: ({ children }) => <strong style={{ fontWeight: 700 }}>{children}</strong>,
                  em: ({ children }) => <em>{children}</em>,
                  link: ({ value, children }) => <a href={value?.href} style={{ color: "#00819C", textDecoration: "underline" }} target="_blank" rel="noreferrer">{children}</a>,
                },
              }}
            />
          </div>
          <div style={{ marginTop: 48 }}>
            <Link href="/blogs" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#00819C", fontWeight: 600, fontSize: 15 }}>
              <FiArrowLeft size={14} /> Tüm yazılara dön
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
