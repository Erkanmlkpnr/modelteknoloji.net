import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import products from "@/lib/json/product.json";
import { FiArrowLeft, FiCheckCircle } from "react-icons/fi";

export async function generateStaticParams() {
  return (products as any[]).map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = (products as any[]).find((p) => p.id === id);
  if (!product) return {};
  return {
    title: product.title,
    description: product.description?.slice(0, 155),
    alternates: { canonical: `/products/${id}` },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = (products as any[]).find((p) => p.id === id);
  if (!product) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.title,
    description: product.description,
    applicationCategory: "EngineeringApplication",
    operatingSystem: "Windows",
    url: `https://www.modelteknoloji.net/products/${id}`,
    brand: { "@type": "Brand", name: "Siemens" },
    provider: { "@id": "https://www.modelteknoloji.net/#organization" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://www.modelteknoloji.net/" },
      { "@type": "ListItem", position: 2, name: "Ürünler", item: "https://www.modelteknoloji.net/products" },
      { "@type": "ListItem", position: 3, name: product.title, item: `https://www.modelteknoloji.net/products/${id}` },
    ],
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <section style={{ background: "#fff", borderBottom: "1px solid #E4EAEF", padding: "48px 0 40px" }}>
        <div className="container">
          <Link href="/products" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#5A6B78", fontSize: 14, marginBottom: 24 }}>
            <FiArrowLeft size={14} /> Tüm ürünler
          </Link>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#00819C", display: "block", marginBottom: 10 }}>{product.category}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(32px,5vw,52px)", letterSpacing: "-.015em", margin: "0 0 20px", color: "#0D2740" }}>
            {product.title}
          </h1>
          {product.tags && (
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
              {product.tags.map((tag: string) => (
                <span key={tag} style={{ background: "#F5F7F9", color: "#5A6B78", fontSize: 13, padding: "6px 12px", borderRadius: 999 }}>{tag}</span>
              ))}
            </div>
          )}
          <Link href="/contact" style={{ background: "#0D2740", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 26px", borderRadius: 8, display: "inline-block", marginRight: 12 }}>
            Teklif Al
          </Link>
          <Link href="/contact" style={{ border: "1.5px solid #C6D1DA", color: "#0D2740", fontWeight: 500, fontSize: 15, padding: "14px 26px", borderRadius: 8, display: "inline-block", background: "#fff" }}>
            Demo Talep Et
          </Link>
        </div>
      </section>

      <section style={{ background: "#F5F7F9", padding: "64px 0" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "#0D2740", margin: "0 0 16px" }}>Ürün Hakkında</h2>
            <p style={{ color: "#5A6B78", fontSize: 17, lineHeight: 1.75, margin: 0 }}>{product.description}</p>

            {product.features && product.features.length > 0 && (
              <div style={{ marginTop: 36 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#0D2740", margin: "0 0 16px" }}>Özellikler</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {product.features.map((f: string) => (
                    <li key={f} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                      <FiCheckCircle style={{ color: "#0696A1", flexShrink: 0, marginTop: 2 }} size={16} />
                      <span style={{ color: "#5A6B78", fontSize: 15, lineHeight: 1.6 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            {product.videoUrl ? (
              <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 50px rgba(22,40,63,.12)" }}>
                <iframe
                  src={product.videoUrl}
                  title={product.title}
                  width="100%"
                  height="320"
                  style={{ border: "none", display: "block" }}
                  allowFullScreen
                />
              </div>
            ) : (
              <div style={{ height: 320, background: "#E4EAEF", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#9fb0c6", fontFamily: "var(--font-mono)", fontSize: 13 }}>Görsel mevcut değil</span>
              </div>
            )}

            <div style={{ marginTop: 32, background: "#fff", border: "1px solid #E4EAEF", borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "#0D2740", margin: "0 0 12px" }}>Bu ürün hakkında bilgi almak ister misiniz?</h3>
              <p style={{ color: "#5A6B78", fontSize: 14, lineHeight: 1.6, margin: "0 0 20px" }}>Uzmanlarımız size özel bir demo sunabilir veya fiyatlandırma hakkında bilgi verebilir.</p>
              <Link href="/contact" style={{ background: "#0D2740", color: "#fff", fontWeight: 600, fontSize: 15, padding: "13px 22px", borderRadius: 8, display: "inline-block" }}>
                İletişime Geç
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
