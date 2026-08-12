"use client";

import { motion } from "framer-motion";
import { Shield, Palette, Clock, HeartHandshake } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "QUALITY ASSURED",
    description: "We use the best materials and standards in the industry.",
  },
  {
    icon: Palette,
    title: "DESIGN EXCELLENCE",
    description: "Thoughtful design that blends beauty, function and efficiency.",
  },
  {
    icon: Clock,
    title: "ON TIME DELIVERY",
    description: "We respect your time and deliver as promised.",
  },
  {
    icon: HeartHandshake,
    title: "CLIENT FOCUSED",
    description: "Your vision, our process, together we build better.",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 lg:py-16 section-padding bg-white/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                <badge.icon className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-wider text-luxury-text mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-luxury-ash leading-relaxed">
                  {badge.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
