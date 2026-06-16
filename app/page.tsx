import Hero from "@/components/Hero";
import About from "@/components/About";
import Collections from "@/components/Collections";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Showrooms from "@/components/Showrooms";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Collections />
      <Services />
      <Gallery />
      <Showrooms />
      <Testimonials />
      <Contact />
    </>
  );
}
