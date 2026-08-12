"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import { Award, Users, Building2, MapPin } from "lucide-react";

const stats = [
  { icon: Building2, value: 250, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 180, suffix: "+", label: "Happy Clients" },
  { icon: Award, value: 35, suffix: "", label: "Design Awards" },
  { icon: MapPin, value: 12, suffix: "", label: "Cities Served" },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-28 section-padding bg-white/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <stat.icon className="w-8 h-8 text-luxury-gold mb-4 mx-auto lg:mx-0" />
                <p className="font-numbers text-4xl lg:text-5xl font-bold text-luxury-text mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-luxury-ash">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
