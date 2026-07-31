import Link from "next/link";
import Image from "next/image";
import {
  Icon,
  SHIELD,
  SHIELD_CHECK,
  CLOCK,
  SCOPE,
  BOLT,
  LAYERS,
  GRADUATION,
  MODULES,
  LINK,
  TREND,
  HEADSET,
} from "@/components/Icons";

const FEATURED = [
  { id: "solid-edge",            cat: "CAD",           name: "Solid Edge",            desc: "Senkron teknolojili 3B ve 2B CAD. Modelleme, sac metal, montaj ve teknik resim tek uygulamada.", img: "/img/buyuk-montaj.jpeg",      alt: "Solid Edge'de çok parçalı büyük montaj görünümü" },
  { id: "solid-edge-electrical", cat: "Electrical",    name: "Solid Edge Electrical", desc: "Elektrik şeması ve kablo demeti tasarımı. Mekanik tasarımla tam entegre elektromekanik iş akışı.", img: "/img/wiring-harness.jpeg",   alt: "Solid Edge Electrical'da kablo demeti tasarımı" },
  { id: "solid-edge-floefd",     cat: "Simulation",    name: "FloEFD",                desc: "CAD içine gömülü hesaplamalı akışkanlar dinamiği. Tasarım aşamasında akış ve ısı analizi.", img: "/img/3d-publishing.jpeg",    alt: "Solid Edge FloEFD için üç boyutlu mühendislik modeli görünümü" },
  { id: "solid-edge-keyshot",    cat: "Visualization", name: "KeyShot",               desc: "Gerçek zamanlı render ve animasyon. Ürünlerinizi pazarlama kalitesinde görselleştirin.", img: "/img/keyshot-render.jpeg",    alt: "KeyShot ile hazırlanmış foto gerçekçi ürün render'ı" },
  { id: "solid-edge-simulation", cat: "Simulation",    name: "Simulation",            desc: "Sonlu elemanlar analizi ile yapısal doğrulama. Prototip maliyetlerini tasarım masasında azaltın.", img: "/img/cam-pro-simulasyon.jpeg", alt: "Solid Edge Simulation'da analiz ve simülasyon arayüzü" },
  { id: "solid-edge-pdm",        cat: "PDM",           name: "PDM",                   desc: "Temel düzeyde dosya yönetimi. Klonlama, otomatik kodlama ve toplu isim/proje değiştirme.", img: "/img/electrical-pano.jpeg",   alt: "Solid Edge PDM ile yönetilen mühendislik proje verileri" },
];

const SHOWCASE = [
  {
    img: "/img/buyuk-montaj.jpeg",
    alt: "Solid Edge'de çok parçalı bir montajın patlatılmış görünümü",
    cat: "MONTAJ",
    title: "Büyük montaj tasarımı",
    href: "/products/solid-edge",
  },
  {
    img: "/img/wiring-harness.jpeg",
    alt: "Solid Edge Electrical'da kablo demeti şeması ve eşlenik 3B model",
    cat: "ELECTRICAL",
    title: "Elektrik ve kablo demeti",
    href: "/products/solid-edge-electrical",
  },
  {
    img: "/img/keyshot-render.jpeg",
    alt: "KeyShot ile alınmış foto gerçekçi kahve makinesi render'ı",
    cat: "KEYSHOT",
    title: "Foto gerçekçi render",
    href: "/products/solid-edge-keyshot",
  },
  {
    img: "/img/cam-pro-simulasyon.jpeg",
    alt: "Solid Edge CAM Pro'da CNC işleme simülasyonu",
    cat: "CAM PRO",
    title: "CNC üretim programlama",
    href: "/products/solid-edge-cam-pro",
  },
];

const WHY_US = [
  { title: "Kurumsal güvenlik", desc: "IT politikalarınıza uyumlu lisanslama ve kurulum mimarisi.", paths: SHIELD },
  { title: "Hızlı onboarding",  desc: "Yapılandırılmış eğitim planıyla ekipler haftalar içinde üretken.", paths: BOLT },
  { title: "Modüler mimari",    desc: "İhtiyacınız kadar başlayın, büyüdükçe modül ekleyin.", paths: MODULES },
  { title: "Entegrasyon",       desc: "ERP, PLM ve mevcut CAD verilerinizle sorunsuz veri akışı.", paths: LINK },
  { title: "Performans",        desc: "Büyük montajlarda dahi akıcı çalışma için donanım ve ayar danışmanlığı.", paths: TREND },
  { title: "Kurumsal destek",   desc: "SLA opsiyonlu, tek muhataplı Türkçe teknik destek hattı.", paths: HEADSET },
];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            {/* Metin zaten büyük harfle yazıldı: html lang="tr" altında
                text-transform:uppercase markayı "SİEMENS SOLİD EDGE" yapıyordu.
                Büyük harfli metinde uppercase etkisiz kaldığı için sorun çözülür. */}
            <div className="badge-pill">
              <span lang="en">SIEMENS SOLID EDGE</span> ÇÖZÜM ORTAĞI
            </div>
            <h1 className="hero__title">Yenilikçi Mühendislik Çözüm Ortağınız</h1>
            <p className="hero__lead">
              Siemens Solid Edge ürün ailesinin Türkiye&apos;deki satış, eğitim ve destek çözüm
              ortağı olarak mühendislik ekiplerinizin yanındayız — değerlendirmeden kurumsal
              yaygınlaştırmaya kadar.
            </p>
            <div className="hero__actions">
              <Link href="/contact" className="btn btn--primary">Bizimle iletişime geç</Link>
              <Link href="/products" className="btn btn--outline">Ürün kataloğu</Link>
            </div>
          </div>
          <div className="hero__visual">
            <Image
              src="/img/cnc-torna.jpeg"
              alt="CNC torna tezgahında işlenen metal mil"
              fill
              sizes="(max-width: 980px) 100vw, 40vw"
              priority
              className="hero__visual-img"
            />
          </div>
        </div>
      </section>

      {/* ═══ GÜVEN ŞERİDİ ═══ */}
      <section className="trust-strip">
        <div className="container trust-strip__inner">
          <div className="trust-strip__item">7+ yıl sektör tecrübesi</div>
          <div className="trust-strip__item">Kurumsal onboarding &amp; destek</div>
          <div className="trust-strip__item">SLA opsiyonlu</div>
        </div>
      </section>

      {/* ═══ GÖRSEL VİTRİN ═══ */}
      <section className="container home-section">
        <h2 className="section-title">Solid Edge ile neler yapabilirsiniz?</h2>
        <p className="section-sub" style={{ marginBottom: 36 }}>
          Tasarımdan üretime, tek platformda gerçek proje çıktıları.
        </p>
        <div className="showcase-grid">
          {SHOWCASE.map((s) => (
            <Link key={s.img} href={s.href} className="showcase-tile">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="showcase-tile__img"
              />
              <div className="showcase-tile__overlay">
                <span className="showcase-tile__cat" lang="en">{s.cat}</span>
                <span className="showcase-tile__title">{s.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ═══ ÖNE ÇIKAN ÜRÜNLER ═══ */}
      <section className="container home-section">
        <div className="home-section__head">
          <div>
            <h2 className="section-title">Öne çıkan ürünler</h2>
            <p className="section-sub">Tasarımdan üretime, Siemens Solid Edge ekosisteminin tamamı.</p>
          </div>
          <Link href="/products" className="arrow-link arrow-link--lg">Tüm ürünleri gör →</Link>
        </div>
        <div className="grid-cards">
          {FEATURED.map((p) => (
            <div key={p.id} className="pcard">
              <div className="pcard__media pcard__media--image">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="pcard__media-img"
                />
              </div>
              <div className="pcard__body">
                {/* Kategoriler İngilizce: "en" locale ile büyütülür ki
                    "Electrical" → "ELECTRİCAL" olmasın. */}
                <span className="cat-chip" lang="en">{p.cat.toLocaleUpperCase("en")}</span>
                <h3 className="pcard__title">{p.name}</h3>
                <p className="pcard__desc">{p.desc}</p>
                <Link href={`/products/${p.id}`} className="arrow-link">Detayları incele →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ UZMANLIK ALANLARI ═══ */}
      <section className="container home-section">
        <h2 className="section-title" style={{ marginBottom: 36 }}>Uzmanlık alanlarımız</h2>
        <div className="expertise-grid">
          <div className="expertise-card expertise-card--dark">
            <span style={{ color: "#0696A1" }}><Icon paths={LAYERS} size={32} /></span>
            <h3 className="expertise-card__title">Yazılım Danışmanlığı</h3>
            <p>
              İhtiyaç analizi, doğru ürün ve lisans yapılandırması, mevcut sistemlerinizle
              entegrasyon planı. Yatırımınızın ilk günden değer üretmesini sağlıyoruz.
            </p>
            <Link href="/contact" className="arrow-link">Görüşme planla →</Link>
          </div>
          <div className="expertise-card expertise-card--light">
            <span style={{ color: "var(--accent)" }}><Icon paths={GRADUATION} size={32} /></span>
            <h3 className="expertise-card__title">Eğitim &amp; Destek</h3>
            <p>
              Sertifikalı eğitim programları, kurumsal onboarding ve SLA opsiyonlu teknik destek.
              Ekibiniz üretkenliğe en kısa yoldan ulaşır.
            </p>
            <Link href="/contact" className="arrow-link">Eğitim kataloğunu iste →</Link>
          </div>
        </div>
      </section>

      {/* ═══ NEDEN BİZ ═══ */}
      <section className="why-section">
        <div className="container why-section__inner">
          <h2 className="section-title">Neden Model Teknoloji?</h2>
          <p className="section-sub" style={{ marginBottom: 40, maxWidth: "60ch" }}>
            Kurumsal yazılım yatırımı bir ürün satın alma değil, uzun vadeli bir ortaklıktır.
          </p>
          <div className="why-grid">
            {WHY_US.map((w) => (
              <div key={w.title} className="why-item">
                <div className="why-item__icon"><Icon paths={w.paths} /></div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GÜVEN / SLA ═══ */}
      <section className="container home-section">
        <h2 className="section-title" style={{ marginBottom: 36 }}>Kurumsal güven, ölçülebilir taahhüt</h2>
        <div className="sla-grid">
          <div className="sla-card">
            <Icon paths={SHIELD_CHECK} size={28} />
            <h3>Güvenlik yaklaşımı</h3>
            <p>
              Lisanslama, veri saklama ve erişim politikalarında kurumsal IT standartlarınıza uyum.
              Kurulumlar sizin altyapı kurallarınıza göre yapılandırılır.
            </p>
          </div>
          <div className="sla-card">
            <Icon paths={CLOCK} size={28} />
            <h3>SLA opsiyonları</h3>
            <p>
              İhtiyacınıza göre tanımlı yanıt süreleri ve eskalasyon adımları. Kritik üretim
              ortamları için genişletilmiş destek pencereleri.
            </p>
          </div>
          <div className="sla-card">
            <Icon paths={SCOPE} size={28} />
            <h3>Kapsam &amp; teslimat</h3>
            <p>
              Her projede yazılı kapsam, takvim ve teslimat kriterleri. Ne alacağınızı işin
              başında net olarak bilirsiniz.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ KAPANIŞ CTA ═══ */}
      <section className="container cta-section">
        <div className="cta-panel">
          <div style={{ maxWidth: "56ch" }}>
            <h2>15 dakikalık görüşmede en uygun çözümü birlikte netleştirelim</h2>
            <p>Satış baskısı yok — ihtiyacınızı dinler, doğru yapılandırmayı öneririz.</p>
          </div>
          <Link href="/contact" className="btn btn--ondark">Görüşme planla</Link>
        </div>
      </section>
    </div>
  );
}
