import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-2 lg:items-center lg:px-10">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80"
              alt="Verinno workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -right-4 -bottom-4 rounded-2xl border border-app bg-elev p-6 shadow-xl">
            <p className="font-display text-4xl text-accent">1994</p>
            <p className="text-xs uppercase tracking-widest text-muted">The year we began</p>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Our Story</span>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Three decades of crafting <em className="not-italic text-accent">timeless</em> interiors.
          </h2>
          <p className="mt-6 text-lg text-muted">
            Verinno is a leading Egyptian furniture house specialising in supreme-quality home, hotel, and office interiors. Since 1994 we have curated and produced classic, modern, and contemporary collections drawn from the finest international design houses and finished by our own craftsmen.
          </p>
          <p className="mt-4 text-muted">
            From private residences in Maadi to flagship hotels and corporate headquarters, our work is rooted in heritage, refined by detail, and built to last generations.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <Pillar t="Home" d="Living, dining, bedroom and accessories curated for everyday luxury." />
            <Pillar t="Hospitality" d="Turn-key interior solutions for hotels and resorts across Egypt." />
            <Pillar t="Office" d="Executive desks, boardroom and workspace systems built for performance." />
            <Pillar t="Interior Design" d="In-house consultation, space planning and full project delivery." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Pillar({ t, d }: { t: string; d: string }) {
  return (
    <div className="border-t border-app pt-4">
      <h3 className="font-display text-2xl">{t}</h3>
      <p className="mt-2 text-sm text-muted">{d}</p>
    </div>
  );
}
