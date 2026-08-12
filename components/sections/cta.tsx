"use client";

import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-luxury-text text-white p-12 lg:p-20">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-luxury-gold rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-4xl lg:text-5xl xl:text-6xl font-light leading-tight mb-6">
                  Ready to Build Your <span className="text-luxury-gold">Dream Space?</span>
                </h2>
                <p className="text-white/60 text-lg max-w-md">
                  Let's discuss your project and create something extraordinary together.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/30 hover:-translate-y-0.5"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white rounded-full font-medium transition-all duration-300 hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
