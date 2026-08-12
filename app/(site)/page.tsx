import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Services } from "@/components/sections/services";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <CTA />
    </>
  );
}
