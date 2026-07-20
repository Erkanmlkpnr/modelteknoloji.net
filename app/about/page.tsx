import type { Metadata } from "next";
import { urlFor } from "@/lib/sanity";
import { getActiveTeamMembers as fetchTeam } from "@/lib/sanityQueries";
import { Icon, SHIELD_CHECK, USERS, USER_PLUS, BULB, RECYCLE, AWARD } from "@/components/Icons";
import { FiLinkedin } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Hakkımızda — Siemens Solid Edge Çözüm Ortağı",
  description:
    "Model Teknoloji hakkında. Siemens Solid Edge ekosisteminde 7 yılı aşkın saha deneyimine sahip mühendis ekibimiz ve kurumsal değerlerimiz.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Müşteri Odaklılık", desc: "Kararlarımızı müşterinin gerçek ihtiyacı yönlendirir.", paths: USERS },
  { title: "Yenilikçilik",      desc: "Güncel teknolojiyi izler, önce kendimiz deneriz.", paths: BULB },
  { title: "Güvenilirlik",      desc: "Söz verdiğimiz kapsamı, söz verdiğimiz tarihte teslim ederiz.", paths: SHIELD_CHECK },
  { title: "Sürdürülebilirlik", desc: "Uzun vadeli ortaklıklar kurar, kalıcı değer üretiriz.", paths: RECYCLE },
  { title: "Mükemmellik",       desc: "Her teslimatta mühendislik hassasiyeti standardımızdır.", paths: AWARD },
];

export default async function AboutPage() {
  const teamMembers = await fetchTeam().catch(() => []);

  return (
    <div>
      {/* Giriş */}
      <section className="container about-hero">
        <div className="about-hero__grid">
          <div>
            <h1 className="page-title" style={{ marginBottom: 16 }}>Hakkımızda</h1>
            <p className="strong" style={{ margin: "0 0 16px" }}>
              Model Teknoloji, 2024 yılında kuruldu; ancak hikayemiz çok daha eskiye dayanıyor.
              Kurucu ekibimiz, Celal Bayar Üniversitesi Makine Mühendisliği kökenli ve Siemens
              Solid Edge ekosisteminde 7 yılı aşkın saha deneyimine sahip.
            </p>
            <p style={{ margin: 0 }}>
              Mühendislik ekiplerinin gerçek ihtiyaçlarını mühendis gözüyle anlıyor; satış, eğitim
              ve destek süreçlerinin tamamında tek muhatap olarak yanınızda duruyoruz.
            </p>
          </div>
          <div className="about-facts">
            <div className="about-fact">
              <span className="about-fact__num">7+</span>
              <span>yıl sektör tecrübesi</span>
            </div>
            <div className="about-fact">
              <Icon paths={USER_PLUS} size={30} strokeWidth={1.8} />
              <span>Kurumsal onboarding</span>
            </div>
            <div className="about-fact">
              <Icon paths={SHIELD_CHECK} size={30} strokeWidth={1.8} />
              <span>SLA opsiyonlu destek</span>
            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal değerler */}
      <section className="values-section">
        <div className="container values-section__inner">
          <h2 className="section-title" style={{ marginBottom: 36 }}>Kurumsal değerlerimiz</h2>
          <div className="values-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card">
                <div className="value-card__icon"><Icon paths={v.paths} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ekip */}
      {teamMembers.length > 0 && (
        <section className="container team-section">
          <h2 className="section-title" style={{ marginBottom: 36 }}>Ekibimiz</h2>
          <div className="team-grid">
            {teamMembers.map((m) => {
              let photoUrl = "";
              try {
                const pa = m.photo as any;
                photoUrl = pa?._type === "url" ? pa.url : urlFor(m.photo).width(400).height(400).url();
              } catch {}
              return (
                <div key={m._id} className="team-card">
                  {photoUrl ? <img src={photoUrl} alt={m.name} /> : <div className="team-card__ph" />}
                  <div className="team-card__body">
                    <div className="team-card__name">{m.name}</div>
                    <div className="team-card__role">{m.role}</div>
                    {m.linkedinUrl && (
                      <a
                        href={m.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 10, fontSize: 14, fontWeight: 600 }}
                      >
                        <FiLinkedin /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
