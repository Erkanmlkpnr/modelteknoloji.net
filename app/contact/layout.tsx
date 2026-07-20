import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Görüşme Planlayın",
  description:
    "Kurumsal ihtiyaçlarınızı birlikte netleştirelim. Aynı iş günü içinde geri dönüş yapıyoruz. Solid Edge satış, eğitim ve destek için Model Teknoloji ile iletişime geçin.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
