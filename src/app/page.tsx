import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Gallery />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
