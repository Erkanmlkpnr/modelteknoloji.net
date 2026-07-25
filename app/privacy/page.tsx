import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Model Teknoloji web sitesi gizlilik politikası.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { title: "1) Toplanan veriler", body: "İletişim formu aracılığıyla ad, e-posta ve telefon numarası gibi kişisel veriler toplanabilir. Bu veriler yalnızca talep edilen hizmet kapsamında kullanılır." },
  { title: "2) reCAPTCHA", body: "Formlarımızda Google reCAPTCHA kullanılmaktadır. Google'ın gizlilik politikası geçerlidir." },
  { title: "3) Analitik", body: "Google Tag Manager ve Google Analytics aracılığıyla site kullanım verileri anonim olarak izlenmektedir." },
  { title: "4) Üçüncü taraflar", body: "Kişisel verileriniz üçüncü taraflarla paylaşılmaz. Hukuki yükümlülükler kapsamında resmi taleplere yanıt verilebilir." },
  { title: "5) Veri saklama", body: "Toplanan veriler gereksiz yere saklanmaz; talep üzerine silinmesi mümkündür." },
  { title: "6) İletişim", body: "Veri gizliliğiyle ilgili her türlü talebiniz için info@modelteknoloji.net adresine yazabilirsiniz." },
];

export default function PrivacyPage() {
  return (
    <div style={{ background: "#fff", padding: "64px 0 80px" }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#00819C", marginBottom: 12 }}>YASAL</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(28px,4vw,44px)", letterSpacing: "-.015em", margin: "0 0 12px", color: "#0D2740" }}>Gizlilik Politikası</h1>
        <p style={{ color: "#5A6B78", fontSize: 17, lineHeight: 1.65, margin: "0 0 40px" }}>
          Bu metin, modelteknoloji.net üzerinden sağlanan hizmetlerde kişisel verilerin hangi amaçlarla işlendiğini açıklar.
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
