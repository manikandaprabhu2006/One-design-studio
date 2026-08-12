"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Renovation"];

const projects = [
  {
    title: "The Horizon Villa",
    category: "Residential",
    location: "Beverly Hills, CA",
    year: "2024",
    area: "12,000 sq ft",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    slug: "horizon-villa",
  },
  {
    title: "Meridian Tower",
    category: "Commercial",
    location: "Manhattan, NY",
    year: "2023",
    area: "85,000 sq ft",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
    slug: "meridian-tower",
  },
  {
    title: "Serenity Residence",
    category: "Residential",
    location: "Miami, FL",
    year: "2024",
    area: "8,500 sq ft",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    slug: "serenity-residence",
  },
  {
    title: "The Glass House",
    category: "Residential",
    location: "Aspen, CO",
    year: "2023",
    area: "6,200 sq ft",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    slug: "glass-house",
  },
  {
    title: "Nova Office Complex",
    category: "Commercial",
    location: "San Francisco, CA",
    year: "2024",
    area: "120,000 sq ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    slug: "nova-office",
  },
  {
    title: "Heritage Restoration",
    category: "Renovation",
    location: "Boston, MA",
    year: "2023",
    area: "4,800 sq ft",
    image: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop",
    slug: "heritage-restoration",
  },
];


export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">Portfolio</p>
            <h1 className="heading-lg mb-6">
              Our <span className="text-luxury-gold">Projects</span>
            </h1>
            <p className="body-lg">
              A curated selection of our finest work, showcasing our commitment to 
              architectural excellence and innovative design.
            </p>
          </FadeIn>
        </div>

        {/* Filter */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-luxury-gradient text-white shadow-lg shadow-luxury-gold/20"
                    : "bg-white/60 text-luxury-text hover:bg-luxury-gold/10 border border-luxury-gold/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
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
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs uppercase tracking-wider text-white/70">{project.category}</span>
                        <span className="text-white/30">|</span>
                        <span className="text-xs text-white/70">{project.year}</span>
                      </div>
                      <h3 className="font-heading text-2xl mb-1">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.location} &middot; {project.area}</p>
                    </div>

                    <div className="absolute inset-0 rounded-2xl border-2 border-luxury-gold/0 group-hover:border-luxury-gold/50 transition-colors duration-500 pointer-events-none" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
