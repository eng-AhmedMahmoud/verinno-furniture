import { Quote } from "lucide-react";

const QUOTES = [
  {
    q: "Verinno furnished our entire villa with the same care we'd give to a family heirloom. Thirty years on, the pieces still look new.",
    a: "Residential Client · Maadi",
  },
  {
    q: "From the boardroom desk to every guest suite, Verinno delivered on time and beyond brief. A true contract partner.",
    a: "Hospitality Project · 6th of October",
  },
  {
    q: "Their design team understood our brand instantly. The result feels classic and modern at once.",
    a: "Corporate HQ · Mohandeseen",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-elev py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">In their words</span>
          <h2 className="mt-4 font-display text-5xl leading-tight">Trusted by homes, hotels, and headquarters.</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.a}
              className="flex flex-col gap-6 rounded-2xl border border-app bg-surface p-8"
            >
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="font-display text-xl leading-relaxed">
                &ldquo;{q.q}&rdquo;
              </blockquote>
              <figcaption className="mt-auto text-xs uppercase tracking-widest text-muted">{q.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
