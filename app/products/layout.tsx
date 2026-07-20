import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ürünler — Siemens Solid Edge Ekosistemi",
  description:
    "Siemens Solid Edge ekosisteminin tamamı: CAD'den CAM'e, simülasyondan veri yönetimine. Solid Edge, Electrical, FloEFD, KeyShot, Simulation, PDM, CAM Pro ve Solid Edge 2D.",
  alternates: { canonical: "/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
