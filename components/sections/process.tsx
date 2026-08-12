"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Search, PenTool, HardHat, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description: "We begin with understanding your vision, requirements, and the unique characteristics of your site.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description: "Our architects craft detailed plans and 3D visualizations that bring your vision to life.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Construction",
    description: "Expert craftsmen execute the build with precision, using premium materials and techniques.",
  },
  {
    number: "04",
    icon: Home,
    title: "Delivery",
    description: "Final inspections, finishing touches, and handing over a space that exceeds expectations.",
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-32 section-padding bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">How We Work</p>
            <h2 className="heading-md mb-6">Our Construction Process</h2>
            <p className="body-lg">
              A refined approach to building exceptional spaces, from initial concept to final delivery.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={index * 0.15}>
              <div className="relative group text-center lg:text-left">
                <div className="mb-6">
                  <span className="font-numbers text-6xl font-bold text-luxury-gold/10 group-hover:text-luxury-gold/20 transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <step.icon className="w-6 h-6 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-xl text-luxury-text mb-3">{step.title}</h3>
                <p className="body-md">{step.description}</p>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-luxury-gold/20" />
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
