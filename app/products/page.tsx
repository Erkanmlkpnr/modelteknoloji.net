"use client";

import { useState } from "react";
import Link from "next/link";
import products from "@/lib/json/product.json";
import { CategoryIcon } from "@/components/Icons";

const MAIN_CATS = ["CAD", "CAM", "Simulation", "PDM"];
const FILTERS = ["Tümü", "CAD", "CAM", "Simulation", "PDM", "Diğer"];

export default function ProductsPage() {
  const [filter, setFilter] = useState("Tümü");

  const visible = (products as any[]).filter((p) =>
    filter === "Tümü" ? true : filter === "Diğer" ? !MAIN_CATS.includes(p.category) : p.category === filter
  );

  return (
    <div className="container page-shell">
      <h1 className="page-title">Ürünler</h1>
      <p className="page-lead">
        Siemens Solid Edge ekosisteminin tamamı: CAD&apos;den CAM&apos;e, simülasyondan veri yönetimine.
      </p>

      <div className="chip-row">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`filter-chip${filter === f ? " filter-chip--active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid-cards grid-cards--fill">
        {visible.map((p: any) => (
          <div key={p.id} className="pcard">
            <div className="pcard__media"><CategoryIcon cat={p.category} /></div>
            <div className="pcard__body">
              <span className="cat-chip">{p.category}</span>
              <h2 className="pcard__title">{p.title}</h2>
              <p className="pcard__desc" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                {p.description}
              </p>
              <Link href={`/products/${p.id}`} className="arrow-link">Detayları incele →</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
