"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "The Horizon Villa",
    category: "Residential",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    slug: "horizon-villa",
  },
  {
    title: "Meridian Tower",
    category: "Commercial",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    slug: "meridian-tower",
  },
  {
    title: "Serenity Residence",
    category: "Residential",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    slug: "serenity-residence",
  },
];

export function FeaturedProjects() {
  return (
    <section className="py-20 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <FadeIn>
            <p className="label-text mb-4">Portfolio</p>
            <h2 className="heading-md">
              Featured <span className="text-luxury-gold">Projects</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 mt-6 md:mt-0 text-luxury-gold font-medium hover:gap-3 transition-all duration-300"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.15}>
              <Link href={`/projects/${project.slug}`}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowUpRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-2">
                      {project.category}
                    </p>
                    <h3 className="font-heading text-2xl mb-1">{project.title}</h3>
                    <p className="text-sm text-white/70">{project.location}</p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
