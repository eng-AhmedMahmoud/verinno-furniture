import { MapPin, Phone } from "lucide-react";

const SHOWROOMS = [
  {
    name: "Maadi Flagship",
    addr: "3/3 El Laselki St., New Maadi, Cairo",
    phones: ["02 2520 3300", "02 2520 2033"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mohandeseen",
    addr: "Mohandeseen, Giza",
    phones: ["02 3302 5338", "02 3302 5337"],
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mall of Arabia",
    addr: "HC Furniture Mall, Gate 1, 6th of October",
    phones: ["Visit during mall hours"],
    img: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "6th of October",
    addr: "6th of October City, Giza",
    phones: ["By appointment"],
    img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Showrooms() {
  return (
    <section id="showrooms" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Showrooms</span>
          <h2 className="mt-4 font-display text-5xl leading-tight">
            Four homes for our craft, across Cairo & Giza.
          </h2>
          <p className="mt-6 text-muted">
            Step into a Verinno showroom to experience materials, finishes, and silhouettes in person. Our consultants will help you plan, source, and deliver your next interior.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SHOWROOMS.map((s) => (
            <article
              key={s.name}
              className="group flex flex-col overflow-hidden rounded-3xl border border-app bg-elev transition hover:-translate-y-1 hover:border-accent"
            >
              <div
                className="aspect-[5/4] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-2xl">{s.name}</h3>
                <p className="flex items-start gap-2 text-sm text-muted">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {s.addr}
                </p>
                <div className="mt-auto flex flex-col gap-1 pt-2 text-sm">
                  {s.phones.map((p) => (
                    <p key={p} className="flex items-center gap-2 text-fg/80">
                      <Phone className="h-4 w-4 text-accent" />
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
