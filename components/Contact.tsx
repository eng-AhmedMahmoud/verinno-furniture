"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-12 rounded-3xl border border-app bg-elev p-8 sm:p-12 lg:grid-cols-2 lg:p-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Contact</span>
            <h2 className="mt-4 font-display text-5xl leading-tight">
              Let&apos;s plan your next interior.
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Tell us about your space, your style, and your timeline. Our consultants will reply within one working day.
            </p>

            <div className="mt-10 space-y-4">
              <a href="tel:+20225203300" className="group flex items-center gap-3 text-fg hover:text-accent">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-display text-2xl">+20 2 2520 3300</span>
              </a>
              <a href="mailto:info@verinno.com" className="group flex items-center gap-3 text-fg hover:text-accent">
                <Mail className="h-5 w-5 text-accent" />
                <span className="font-display text-2xl">info@verinno.com</span>
              </a>
            </div>

            <div className="mt-10 flex gap-3">
              <Social href="https://www.facebook.com/Verinnofurnitureeg/" Icon={Facebook} label="Facebook" />
              <Social href="https://www.instagram.com/verinno_furniture/" Icon={Instagram} label="Instagram" />
              <Social href="https://www.linkedin.com/company/verinno-furniture/" Icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          <form className="grid gap-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Full name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Phone" name="phone" type="tel" />
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted">Project type</label>
              <select className="rounded-xl border border-app bg-surface px-4 py-3 text-fg focus:outline-none focus:ring-2 ring-accent">
                <option>Home</option>
                <option>Hotel / Hospitality</option>
                <option>Office / Corporate</option>
                <option>Interior design consultation</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-muted">Tell us about your space</label>
              <textarea rows={4} className="rounded-xl border border-app bg-surface px-4 py-3 text-fg focus:outline-none focus:ring-2 ring-accent" />
            </div>
            <button
              type="submit"
              className="mt-2 rounded-full bg-accent px-6 py-4 text-sm font-medium uppercase tracking-widest text-white transition hover:opacity-90"
            >
              Send enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-xs uppercase tracking-widest text-muted">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="rounded-xl border border-app bg-surface px-4 py-3 text-fg focus:outline-none focus:ring-2 ring-accent"
      />
    </div>
  );
}

function Social({ href, Icon, label }: { href: string; Icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-app text-fg hover:border-accent hover:text-accent transition"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
