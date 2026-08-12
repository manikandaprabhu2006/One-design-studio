"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight, Home, Building2, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes designed for comfort, style and modern living.",
    href: "/residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "High-performance spaces that reflect your brand and purpose.",
    href: "/commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    description: "Transforming existing spaces with smart design and quality.",
    href: "/renovation",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 section-padding bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <FadeIn>
              <p className="label-text mb-4">Our Services</p>
              <h2 className="heading-md mb-6">
                Comprehensive Solutions For Every Space
              </h2>
              <p className="body-lg mb-8">
                We offer end-to-end construction and design services tailored to 
                your unique vision and requirements.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-luxury-gold font-medium hover:gap-3 transition-all duration-300"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.15}>
                <Link href={service.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url(${service.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      <div className="p-8 lg:p-10 flex flex-col justify-center">
                        <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-6">
                          <service.icon className="w-6 h-6 text-luxury-gold" />
                        </div>
                        <h3 className="font-heading text-2xl lg:text-3xl text-luxury-text mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="body-md mb-6">{service.description}</p>
                        <div className="flex items-center gap-2 text-sm font-medium text-luxury-gold">
                          Learn More
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
