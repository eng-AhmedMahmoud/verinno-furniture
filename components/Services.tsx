import { Sofa, Building2, Briefcase, Palette } from "lucide-react";

const ITEMS = [
  { icon: Sofa, t: "Home Furniture", d: "Living, dining, bedroom and accessory pieces in three style worlds." },
  { icon: Building2, t: "Hospitality", d: "Custom hotel and resort interiors delivered turn-key." },
  { icon: Briefcase, t: "Office", d: "Executive furniture and workspace systems for modern teams." },
  { icon: Palette, t: "Interior Design", d: "Consultation, mood-boarding, space planning and project delivery." },
];

export default function Services() {
  return (
    <section className="relative bg-elev py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr,2fr] lg:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">What we do</span>
            <h2 className="mt-4 font-display text-4xl leading-tight">A full-service house, from sketch to delivery.</h2>
          </div>
          <p className="text-muted">
            Every Verinno project begins with a conversation and ends with installation in your space. Between, our designers, craftsmen, and project managers handle the details.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="group rounded-2xl border border-app bg-surface p-6 transition hover:border-accent hover:-translate-y-1"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl">{t}</h3>
              <p className="mt-2 text-sm text-muted">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
