import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/sanityQueries";
import { urlFor } from "@/lib/sanity";
import { CategoryIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Blog — CAD/CAM ve Solid Edge Kaynakları",
  description: "Solid Edge, CAD/CAM ve dijital dönüşüm üzerine güncel yazılar ve sektör içerikleri.",
  alternates: { canonical: "/blogs" },
};

export default async function BlogsPage() {
  const posts = await getAllBlogPosts().catch(() => []);

  return (
    <div className="container page-shell">
      <h1 className="page-title">Blog</h1>
      <p className="page-lead">Teknik ekibimizden Solid Edge ekosistemi üzerine güncel yazılar.</p>

      {posts.length === 0 ? (
        <p style={{ color: "var(--text-2)" }}>Henüz blog yazısı eklenmemiş.</p>
      ) : (
        <div className="grid-cards grid-cards--wide">
          {posts.map((post) => {
            let imgUrl = "";
            try {
              const ci = post.coverImage as any;
              imgUrl = ci?._type === "url" ? ci.url : urlFor(post.coverImage).width(800).height(450).url();
            } catch {}
            return (
              <Link key={post._id} href={`/blogs/${post.slug?.current ?? post._id}`} className="pcard">
                <div
                  className="pcard__media pcard__media--tall"
                  style={imgUrl ? { backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" } : {}}
                >
                  {!imgUrl && <CategoryIcon cat="CAD" />}
                </div>
                <div className="pcard__body">
                  <span className="cat-chip">{post.authorName ?? "Solid Edge"}</span>
                  <h2 className="pcard__title">{post.title}</h2>
                  {post.summary && <p className="pcard__desc">{post.summary}</p>}
                  <div className="pcard__meta">
                    {post.publishedAt && <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" })}</span>}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
