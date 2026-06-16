import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-app bg-elev">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-md text-sm text-muted">
            Verinno Furniture is a leading Egyptian house specialised in supreme-quality home, hotel, and office interiors. Crafting timeless spaces since 1994.
          </p>
        </div>

        <Col title="Explore">
          <FLink href="#collections">Collections</FLink>
          <FLink href="#about">About</FLink>
          <FLink href="#showrooms">Showrooms</FLink>
          <FLink href="#contact">Contact</FLink>
        </Col>

        <Col title="Find us">
          <p className="text-sm text-muted">Maadi · Mohandeseen</p>
          <p className="text-sm text-muted">Mall of Arabia · 6th of October</p>
          <a href="tel:+20225203300" className="text-sm text-fg/80 hover:text-accent">+20 2 2520 3300</a>
          <a href="mailto:info@verinno.com" className="text-sm text-fg/80 hover:text-accent">info@verinno.com</a>
        </Col>
      </div>

      <div className="border-t border-app">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted md:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Verinno Furniture. All rights reserved.</p>
          <p className="uppercase tracking-[0.3em]">Crafted in Egypt</p>
        </div>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-xs uppercase tracking-[0.3em] text-accent">{title}</h4>
      {children}
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-fg/80 hover:text-accent">
      {children}
    </Link>
  );
}
