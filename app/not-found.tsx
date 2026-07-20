import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60dvh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F7F9" }}>
      <div style={{ textAlign: "center", padding: "0 24px" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#00819C", marginBottom: 16 }}>404</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(36px,6vw,72px)", letterSpacing: "-.015em", color: "#0D2740", margin: "0 0 16px" }}>
          Sayfa bulunamadı.
        </h1>
        <p style={{ color: "#5A6B78", fontSize: 17, lineHeight: 1.65, margin: "0 0 36px" }}>
          Aradığınız sayfa taşınmış veya silinmiş olabilir.
        </p>
        <Link href="/" style={{ background: "#0D2740", color: "#fff", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 8, display: "inline-block" }}>
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
}
