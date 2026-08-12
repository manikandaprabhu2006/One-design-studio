"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "One Design Studio transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "James Chen",
    role: "CEO, Meridian Corp",
    content: "The commercial space they designed for us has become a landmark. Every client who visits compliments the architecture and thoughtful design.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Property Developer",
    content: "Working with One Design Studio was seamless from start to finish. They delivered on time, within budget, and beyond our expectations.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 lg:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <FadeIn>
            <p className="label-text mb-4">Testimonials</p>
            <h2 className="heading-md">What Our Clients Say</h2>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="relative glass-card rounded-3xl p-8 lg:p-16">
            <Quote className="w-12 h-12 text-luxury-gold/20 mb-8" />

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-heading text-2xl lg:text-3xl text-luxury-text leading-relaxed mb-8">
                  "{testimonials[current].content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                    <span className="font-heading text-xl text-luxury-gold">
                      {testimonials[current].name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-luxury-text">{testimonials[current].name}</p>
                    <p className="text-sm text-luxury-ash">{testimonials[current].role}</p>
                  </div>
                  <div className="ml-auto flex gap-1">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-luxury-gold/10">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-luxury-gold/20 flex items-center justify-center hover:bg-luxury-gold/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-luxury-gold" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current ? "w-8 bg-luxury-gold" : "bg-luxury-gold/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="w-12 h-12 rounded-full border border-luxury-gold/20 flex items-center justify-center hover:bg-luxury-gold/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-luxury-gold" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
