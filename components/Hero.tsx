import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2400&q=80"
          alt="Verinno living room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--bg)/0.55)] via-[rgb(var(--bg)/0.4)] to-[rgb(var(--bg)/0.95)]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-32">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-app bg-[rgb(var(--bg-elev)/0.7)] px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-accent backdrop-blur">
            Est. 1994 · 30 years of craft
          </span>
          <h1 className="mt-8 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            Furniture that <em className="text-accent not-italic">outlives</em> trends.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Verinno crafts supreme-quality home, hotel, and office furniture across Egypt — pairing classical heritage with modern comfort and contemporary lines.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#collections"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium uppercase tracking-widest text-white transition hover:opacity-90"
            >
              Explore collections
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href="#showrooms"
              className="inline-flex items-center gap-2 rounded-full border border-app bg-[rgb(var(--bg-elev)/0.6)] px-6 py-3 text-sm font-medium uppercase tracking-widest text-fg backdrop-blur hover:border-accent hover:text-accent transition"
            >
              Visit a showroom
            </Link>
          </div>

          <dl className="mt-16 grid max-w-md grid-cols-3 gap-6 border-t border-app pt-8">
            <Stat n="30+" l="Years" />
            <Stat n="4" l="Showrooms" />
            <Stat n="3" l="Style worlds" />
          </dl>
        </div>

        <div className="relative hidden lg:block fade-up">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-app shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1200&q=80"
              alt="Verinno collection"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 aspect-square w-44 overflow-hidden rounded-2xl border-4 border-[rgb(var(--bg))] shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=600&q=80"
              alt="Verinno detail"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-accent">{n}</dt>
      <dd className="mt-1 text-xs uppercase tracking-widest text-muted">{l}</dd>
    </div>
  );
}
