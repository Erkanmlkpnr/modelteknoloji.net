import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div>
          <span className="footer-brand__name">MODEL <em>TEKNOLOJİ</em></span>
          <p className="footer-brand__desc">
            Siemens Solid Edge ürün ailesinin Türkiye&apos;deki satış, eğitim ve destek çözüm ortağı.
          </p>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Ürünler</span>
          <Link href="/products/solid-edge">Solid Edge</Link>
          <Link href="/products/solid-edge-electrical">Solid Edge Electrical</Link>
          <Link href="/products/solid-edge-simulation">Simulation</Link>
          <Link href="/products/solid-edge-pdm">PDM</Link>
          <Link href="/products">Tüm ürünler</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">Şirket</span>
          <Link href="/about">Hakkımızda</Link>
          <Link href="/blogs">Blog</Link>
          <Link href="/contact">İletişim</Link>
          <Link href="/privacy">Gizlilik Politikası</Link>
          <Link href="/terms">Kullanım Şartları</Link>
        </div>

        <div className="footer-col">
          <span className="footer-col-title">İletişim</span>
          <a href="mailto:erkan@modelteknoloji.net">erkan@modelteknoloji.net</a>
          <a href="tel:+905077107847">+90 507 710 78 47</a>
          <p>Değirmiçem Mah. 16051 Sk. Milenyum İş Mrk. No:19 Kat:1/37 Şehitkamil / Gaziantep</p>
        </div>
      </div>

      <div className="container">
        <div className="footer-bottom">
          © {year} Model Teknoloji · SLA • Güvenlik • Kurumsal Destek
        </div>
      </div>
    </footer>
  );
}
