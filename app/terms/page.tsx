import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "Model Teknoloji web sitesi kullanım şartları.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { title: "1) Site içeriği ve fikri mülkiyet", body: "Bu sitedeki tüm içerikler (metin, grafik, logo, görseller) Model Teknoloji'ye aittir ve izinsiz kullanılamaz." },
  { title: "2) Hizmet değişiklikleri", body: "Sitemizin içeriğini, fiyatlarını ve hizmetlerini önceden bildirim yapmaksızın değiştirme hakkını saklı tutarız." },
  { title: "3) Sorumluluk sınırları", body: "Site üzerinden yapılan bağlantılar üçüncü taraf sitelerine yönlendirebilir; bu sitelerin içeriklerinden sorumlu değiliz." },
  { title: "4) Uygulanacak hukuk", body: "Bu şartlar Türkiye Cumhuriyeti hukuku kapsamında değerlendirilir. Uyuşmazlıklarda Gaziantep mahkemeleri yetkilidir." },
  { title: "5) İletişim", body: "Sorularınız için erkan@modelteknoloji.net adresine yazabilirsiniz." },
];

export default function TermsPage() {
  return (
    <div style={{ background: "#fff", padding: "64px 0 80px" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#00819C", marginBottom: 12 }}>YASAL</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-.015em", margin: "0 0 12px", color: "#0D2740" }}>Kullanım Şartları</h1>
        <p style={{ color: "#5A6B78", fontSize: 17, lineHeight: 1.65, margin: "0 0 40px" }}>
          Bu sayfa, modelteknoloji.net web sitesinin kullanımına ilişkin temel koşulları açıklar.
        </p>
        <div style={{ display: "grid", gap: 16 }}>
          {SECTIONS.map((s) => (
            <div key={s.title} style={{ background: "#F5F7F9", border: "1px solid #E4EAEF", borderRadius: 12, padding: "20px 24px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "#0D2740", margin: "0 0 8px" }}>{s.title}</h2>
              <p style={{ color: "#5A6B78", fontSize: 15, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
