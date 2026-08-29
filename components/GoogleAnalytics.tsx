"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const GA_ID = "G-MKGCQ777NC";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * GA4 ölçümü (kendi kendine yeten bileşen):
 * - gtag.js'i bir kez yükler ve yapılandırır
 * - App Router'da sayfa geçişleri tam sayfa yüklemesi olmadığı için page_view'ı elle gönderir
 * - Telefon, WhatsApp ve e-posta tıklamalarını olay olarak kaydeder
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  // gtag.js'i yükle (yalnızca bir kez)
  useEffect(() => {
    if (document.getElementById("ga4-src")) return;
    const s = document.createElement("script");
    s.id = "ga4-src";
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID, { send_page_view: false });
  }, []);

  // Sayfa görüntülemeleri
  useEffect(() => {
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

  // İletişim tıklamaları
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const link = target?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        window.gtag?.("event", "phone_click", { link_url: href });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        window.gtag?.("event", "whatsapp_click", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        window.gtag?.("event", "email_click", { link_url: href });
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
