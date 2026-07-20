"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { Icon, MAIL, PHONE, PIN } from "@/components/Icons";

const PRODUCT_OPTIONS = [
  "Solid Edge",
  "Solid Edge Electrical",
  "FloEFD",
  "KeyShot",
  "Simulation",
  "PDM",
  "CAM Pro",
  "Solid Edge 2D",
];

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // EmailJS yapılandırılmamışsa mail istemcisine düş
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const body = [
        `Ad Soyad: ${data.name}`,
        `E-posta: ${data.email}`,
        `Şirket: ${data.company}`,
        `Ünvan / Rol: ${data.role}`,
        `Telefon: ${data.phone}`,
        `Konu: ${data.subject}`,
        `İlgilendiği ürün: ${data.product || "-"}`,
        "",
        data.message,
      ].join("\n");
      window.location.href = `mailto:erkan@modelteknoloji.net?subject=${encodeURIComponent(
        `[Web] ${data.subject || "İletişim formu"}`
      )}&body=${encodeURIComponent(body)}`;
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone,
          subject: data.subject,
          product: data.product || "-",
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="container page-shell">
      <h1 className="page-title" style={{ textWrap: "pretty" }}>
        Kurumsal ihtiyaçlarınızı birlikte netleştirelim
      </h1>
      <p style={{ margin: "0 0 12px", color: "var(--text-2)", fontSize: 17 }}>
        Aynı iş günü içinde geri dönüş yapıyoruz.
      </p>
      <div className="chip-row" style={{ marginBottom: 40 }}>
        <span className="soft-chip">Aynı iş günü geri dönüş</span>
        <span className="soft-chip">Kurumsal onboarding &amp; destek</span>
        <span className="soft-chip">SLA opsiyonu</span>
      </div>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field__label">Ad Soyad</span>
            <input name="name" type="text" placeholder="Adınız ve soyadınız" autoComplete="name" required />
          </label>
          <label className="field">
            <span className="field__label">Kurumsal e-posta</span>
            <input name="email" type="email" placeholder="ad@sirketiniz.com" autoComplete="email" required />
          </label>
          <label className="field">
            <span className="field__label">Şirket</span>
            <input name="company" type="text" placeholder="Şirket adı" autoComplete="organization" />
          </label>
          <label className="field">
            <span className="field__label">Ünvan / Rol</span>
            <input name="role" type="text" placeholder="Örn. Mühendislik Müdürü" autoComplete="organization-title" />
          </label>
          <label className="field">
            <span className="field__label">Telefon</span>
            <input name="phone" type="tel" placeholder="+90" autoComplete="tel" />
          </label>
          <label className="field">
            <span className="field__label">Konu</span>
            <input name="subject" type="text" placeholder="Kısaca konu" />
          </label>
          <label className="field field--full">
            <span className="field__label">İlgilendiğiniz ürün <small>(opsiyonel)</small></span>
            <select name="product" defaultValue="">
              <option value="">Seçiniz</option>
              {PRODUCT_OPTIONS.map((p) => <option key={p}>{p}</option>)}
            </select>
          </label>
          <label className="field field--full">
            <span className="field__label">Kısa not</span>
            <textarea name="message" rows={4} placeholder="İhtiyacınızı birkaç cümleyle anlatın" />
          </label>
          <div className="contact-form__actions">
            <button type="submit" className="btn btn--primary" disabled={status === "sending" || status === "sent"}>
              {status === "sending" ? "Gönderiliyor…" : "Gönder"}
            </button>
            {status === "sent" && (
              <span className="form-sent-note">Teşekkürler — aynı iş günü içinde dönüş yapacağız.</span>
            )}
            {status === "error" && (
              <span className="form-sent-note" style={{ color: "#B4232A" }}>
                Gönderilemedi. Lütfen tekrar deneyin veya erkan@modelteknoloji.net adresine yazın.
              </span>
            )}
          </div>
        </form>

        <aside className="quick-contact">
          <h3>Hızlı iletişim</h3>
          <div className="quick-contact__row">
            <span className="quick-contact__icon"><Icon paths={MAIL} size={20} strokeWidth={1.8} /></span>
            <a href="mailto:erkan@modelteknoloji.net">erkan@modelteknoloji.net</a>
          </div>
          <div className="quick-contact__row">
            <span className="quick-contact__icon"><Icon paths={PHONE} size={20} strokeWidth={1.8} /></span>
            <a href="tel:+905077107847">+90 507 710 78 47</a>
          </div>
          <div className="quick-contact__row">
            <span className="quick-contact__icon"><Icon paths={PIN} size={20} strokeWidth={1.8} /></span>
            <p>
              Değirmiçem Mah. 16051 Sk.<br />
              Milenyum İş Mrk. No:19 Kat:1/37<br />
              Şehitkamil / Gaziantep
            </p>
          </div>
          <div className="quick-contact__social">
            <a href="#" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5 C4.98 4.88 3.87 6 2.5 6 S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5 Z M0.4 8.4 H4.6 V23 H0.4 Z M8.6 8.4 H12.6 V10.4 C13.2 9.3 14.7 8.1 16.9 8.1 C21.4 8.1 22.3 11 22.3 14.8 V23 H18.1 V15.7 C18.1 13.9 18 11.6 15.6 11.6 C13.1 11.6 12.8 13.5 12.8 15.5 V23 H8.6 Z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23 7.2 C22.7 6 21.8 5.1 20.6 4.8 C18.5 4.3 12 4.3 12 4.3 S5.5 4.3 3.4 4.8 C2.2 5.1 1.3 6 1 7.2 C0.5 9.3 0.5 12 0.5 12 S0.5 14.7 1 16.8 C1.3 18 2.2 18.9 3.4 19.2 C5.5 19.7 12 19.7 12 19.7 S18.5 19.7 20.6 19.2 C21.8 18.9 22.7 18 23 16.8 C23.5 14.7 23.5 12 23.5 12 S23.5 9.3 23 7.2 Z M9.8 15.3 V8.7 L15.8 12 Z" />
              </svg>
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
