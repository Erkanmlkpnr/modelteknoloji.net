"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * GA4 ölçüm yardımcısı:
 * - App Router'da sayfa geçişleri tam sayfa yüklemesi olmadığı için page_view'ı elle gönderir
 * - Telefon, WhatsApp ve e-posta tıklamalarını olay olarak kaydeder
 * (gtag script'leri app/layout.tsx içinde yüklenir; ölçüm kimliği: G-MKGCQ777NC)
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    window.gtag?.("event", "page_view", { page_path: pathname });
  }, [pathname]);

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
