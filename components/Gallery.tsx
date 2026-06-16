import Image from "next/image";

const IMGS = [
  {
    src: "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?auto=format&fit=crop&w=1400&q=80",
    alt: "Modern living room interior",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80",
    alt: "Lounge corner detail",
  },
  {
    src: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
    alt: "Bedroom suite styling",
  },
  {
    src: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1400&q=80",
    alt: "Dining set",
  },
  {
    src: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=1200&q=80",
    alt: "Hospitality lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=1200&q=80",
    alt: "Office workspace",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Recent work</span>
            <h2 className="mt-4 font-display text-5xl leading-tight">Spaces we&apos;ve shaped.</h2>
          </div>
          <p className="max-w-md text-muted">
            A glimpse into recent residential, hospitality and corporate projects across Egypt.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-6 grid-rows-[220px_220px_220px] gap-4 sm:gap-5 md:grid-rows-[260px_260px_260px]">
          <Tile cls="col-span-6 row-span-2 md:col-span-3" {...IMGS[0]} priority />
          <Tile cls="col-span-3 md:col-span-3" {...IMGS[1]} />
          <Tile cls="col-span-3 md:col-span-3" {...IMGS[2]} />
          <Tile cls="col-span-3 md:col-span-2" {...IMGS[3]} />
          <Tile cls="col-span-3 md:col-span-2" {...IMGS[4]} />
          <Tile cls="col-span-6 md:col-span-2" {...IMGS[5]} />
        </div>
      </div>
    </section>
  );
}

function Tile({ src, alt, cls, priority }: { src: string; alt: string; cls: string; priority?: boolean }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl border border-app ${cls}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        priority={priority}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
    </figure>
  );
}
