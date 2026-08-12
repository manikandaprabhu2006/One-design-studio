"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Maximize,
  Building,
  ArrowUpRight,
} from "lucide-react";

const projectData = {
  title: "The Horizon Villa",
  category: "Residential",
  location: "Beverly Hills, California",
  year: "2024",
  area: "12,000 sq ft",
  client: "Private Residence",
  status: "Completed",
  description:
    "The Horizon Villa represents the pinnacle of luxury residential design. Perched on a hillside overlooking the Pacific Ocean, this 12,000 square foot residence seamlessly blends indoor and outdoor living spaces.\n\nThe design philosophy centered on creating a home that feels both grand and intimate. Floor-to-ceiling glass walls dissolve the boundary between interior and exterior, while natural stone and warm wood tones create an atmosphere of refined comfort.\n\nEvery detail was meticulously considered, from the custom millwork to the curated landscape design. The result is a home that is as functional as it is beautiful — a true sanctuary for modern living.",
  images: [
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  ],
  features: [
    "Infinity Pool & Outdoor Living",
    "Smart Home Automation",
    "Wine Cellar & Tasting Room",
    "Home Theater",
    "Wellness Spa & Gym",
    "Guest House",
  ],
};

const relatedProjects = [
  {
    title: "Serenity Residence",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop",
    slug: "serenity-residence",
  },
  {
    title: "The Glass House",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    slug: "glass-house",
  },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Image */}
      <div className="relative h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={projectData.images[0]}
          alt={projectData.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-luxury-cream via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 section-padding pb-12">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-luxury-text hover:text-luxury-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-lg text-white drop-shadow-lg"
            >
              {projectData.title}
            </motion.h1>
          </div>
        </div>
      </div>

      <div className="section-padding py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeIn>
                <p className="label-text mb-4">{projectData.category}</p>

                <div className="prose prose-lg max-w-none">
                  {projectData.description
                    .split("\n\n")
                    .map((paragraph, i) => (
                      <p key={i} className="body-lg mb-6">
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              </FadeIn>

              {/* Gallery */}
              <FadeIn delay={0.2}>
                <h3 className="font-heading text-2xl text-luxury-text mb-6 mt-12">
                  Project Gallery
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {projectData.images.map((img, i) => (
                    <div
                      key={i}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden group ${
                        i === 0 ? "col-span-2" : ""
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${projectData.title} - Image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FadeIn delay={0.3}>
                <div className="glass-card rounded-2xl p-8 sticky top-32">
                  <h3 className="font-heading text-xl text-luxury-text mb-6">
                    Project Details
                  </h3>

                  <div className="space-y-5">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-luxury-gold mt-0.5" />

                      <div>
                        <p className="text-xs text-luxury-ash uppercase tracking-wider">
                          Location
                        </p>

                        <p className="text-sm font-medium text-luxury-text">
                          {projectData.location}
                        </p>
                      </div>
                    </div>

                    {/* Year */}
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-luxury-gold mt-0.5" />

                      <div>
                        <p className="text-xs text-luxury-ash uppercase tracking-wider">
                          Year
                        </p>

                        <p className="text-sm font-medium text-luxury-text">
                          {projectData.year}
                        </p>
                      </div>
                    </div>

                    {/* Area */}
                    <div className="flex items-start gap-3">
                      <Maximize className="w-5 h-5 text-luxury-gold mt-0.5" />

                      <div>
                        <p className="text-xs text-luxury-ash uppercase tracking-wider">
                          Area
                        </p>

                        <p className="text-sm font-medium text-luxury-text">
                          {projectData.area}
                        </p>
                      </div>
                    </div>

                    {/* Client */}
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-luxury-gold mt-0.5" />

                      <div>
                        <p className="text-xs text-luxury-ash uppercase tracking-wider">
                          Client
                        </p>

                        <p className="text-sm font-medium text-luxury-text">
                          {projectData.client}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-luxury-gold/10 my-6" />

                  {/* Features */}
                  <h4 className="font-heading text-lg text-luxury-text mb-4">
                    Key Features
                  </h4>

                  <div className="space-y-2">
                    {projectData.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />

                        <span className="text-sm text-luxury-text">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Button */}
                  <Link
                    href="/contact"
                    className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20"
                  >
                    Start Similar Project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-20">
            <FadeIn>
              <h3 className="heading-sm mb-8">Related Projects</h3>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {relatedProjects.map((project, index) => (
                <FadeIn
                  key={project.slug}
                  delay={index * 0.1}
                >
                  <Link href={`/projects/${project.slug}`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <p className="text-xs uppercase tracking-wider text-white/70 mb-1">
                            {project.category}
                          </p>

                          <h4 className="font-heading text-xl">
                            {project.title}
                          </h4>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}