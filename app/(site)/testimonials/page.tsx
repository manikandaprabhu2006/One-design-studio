"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Star, Quote } from "lucide-react";

const allTestimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    company: "Private Residence",
    content: "One Design Studio transformed our vision into a breathtaking reality. Their attention to detail and commitment to quality is unmatched in the industry. Every room tells a story of thoughtful design.",
    rating: 5,
  },
  {
    name: "James Chen",
    role: "CEO",
    company: "Meridian Corp",
    content: "The commercial space they designed for us has become a landmark in Manhattan. Every client who visits compliments the architecture and thoughtful design. It's elevated our brand presence significantly.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Property Developer",
    company: "Rodriguez Developments",
    content: "Working with One Design Studio was seamless from start to finish. They delivered on time, within budget, and beyond our expectations. Their project management is exceptional.",
    rating: 5,
  },
  {
    name: "Michael Thompson",
    role: "Homeowner",
    company: "Private Residence",
    content: "From the first consultation to the final walkthrough, the experience was extraordinary. They understood our lifestyle and created a home that perfectly suits how we live.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Director",
    company: "Nova Hospitality Group",
    content: "Our hotel renovation exceeded every expectation. The team managed to preserve the historic character while introducing modern luxury. Guests constantly praise the design.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO",
    company: "TechVentures Inc",
    content: "The office space they created has transformed how our team works. The natural light, open collaboration areas, and quiet focus zones have improved productivity and morale.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">Testimonials</p>
            <h1 className="heading-lg mb-6">
              Client <span className="text-luxury-gold">Stories</span>
            </h1>
            <p className="body-lg">
              Hear from the clients who have experienced the One Design Studio difference firsthand.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allTestimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-8 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                <Quote className="w-8 h-8 text-luxury-gold/20 mb-4" />
                <p className="body-md mb-6 flex-1">"{testimonial.content}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                      <span className="font-heading text-sm text-luxury-gold">{testimonial.name[0]}</span>
                    </div>
                    <div>
                      <p className="font-medium text-luxury-text text-sm">{testimonial.name}</p>
                      <p className="text-xs text-luxury-ash">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
