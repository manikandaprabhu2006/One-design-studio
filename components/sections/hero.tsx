"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-0">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury modern villa"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-luxury-cream/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-cream via-luxury-cream/80 to-transparent" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="label-text mb-6"
            >
              Architecture • Construction • Interiors
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="heading-xl mb-8"
            >
              BUILDING
              <br />
              <span className="text-luxury-gold">SPACES.</span>
              <br />
              CREATING
              <br />
              <span className="text-luxury-gold">LEGACY.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="body-lg mb-10 max-w-md"
            >
              One Design Studio creates premium residential and commercial spaces 
              with timeless design, quality craftsmanship and lasting value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 border border-luxury-text/20 text-luxury-text rounded-full font-medium transition-all duration-300 hover:bg-luxury-text hover:text-white"
              >
                Explore Projects
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-luxury-gold/10">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                alt="Interior design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-6 shadow-xl"
            >
              <p className="font-numbers text-3xl font-bold text-luxury-gold">15+</p>
              <p className="text-sm text-luxury-ash mt-1">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-8 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-luxury-ash [writing-mode:vertical-lr]">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-luxury-gold/30"
        />
      </motion.div>
    </section>
  );
}
