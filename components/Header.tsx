"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Ana Sayfa",   href: "/" },
  { label: "Ürünler",     href: "/products" },
  { label: "Blog",        href: "/blogs" },
  { label: "Hakkımızda",  href: "/about" },
  { label: "İletişim",    href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="Ana sayfa">
          <img src="/img/model-logo.png" alt="Model Teknoloji" className="brand__logo" />
        </Link>

        <nav className="site-nav" aria-label="Ana navigasyon">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " is-active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/contact" className="header-cta">Bizimle iletişime geç</Link>
          <button
            type="button"
            className={`mobile-toggle${mobileOpen ? " is-open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label="Menü"
          >
            <span /><span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav${mobileOpen ? " is-open" : ""}`}>
        <div className="container mobile-nav__inner">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="mobile-link" onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>
            Bizimle iletişime geç
          </Link>
        </div>
      </div>
    </header>
  );
}
