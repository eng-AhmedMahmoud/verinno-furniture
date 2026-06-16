import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ITEMS = [
  {
    title: "Classic",
    blurb: "Hand-carved silhouettes, rich finishes, and heritage upholstery for grand interiors.",
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Modern",
    blurb: "Clean geometry, premium materials, and quiet luxury for the contemporary home.",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Contemporary",
    blurb: "Sculptural pieces and bold textures designed for the next generation of living.",
    img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Hotel & Office",
    blurb: "Turn-key contract furniture for hospitality, executive, and workspace projects.",
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function Collections() {
  return (
    <section id="collections" className="relative bg-elev py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Collections</span>
            <h2 className="mt-4 max-w-2xl font-display text-5xl leading-tight">
              Four style worlds, one unmistakable craft.
            </h2>
          </div>
          <p className="max-w-md text-muted">
            Discover pieces curated from the world&apos;s finest design houses and finished by our master craftsmen in Egypt.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {ITEMS.map((it) => (
            <Link
              key={it.title}
              href="#contact"
              className="group relative block aspect-[4/3] overflow-hidden rounded-3xl border border-app"
            >
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl">{it.title}</h3>
                    <p className="mt-2 max-w-md text-sm text-white/80">{it.blurb}</p>
                  </div>
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/40 backdrop-blur transition group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
