"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of projects does One Design Studio handle?",
    answer: "We specialize in luxury residential construction, commercial buildings, and high-end renovations. Our portfolio includes custom villas, modern apartments, corporate offices, retail spaces, hospitality venues, and historic restorations. Each project receives the same level of attention to detail and commitment to excellence.",
    category: "General",
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on scope and complexity. A custom residential project typically takes 12-18 months from concept to completion, while commercial projects may range from 18-36 months. During our initial consultation, we provide a detailed timeline tailored to your specific project requirements.",
    category: "Process",
  },
  {
    question: "What is your design process?",
    answer: "Our process begins with a comprehensive discovery phase where we understand your vision, lifestyle, and requirements. This is followed by concept development, detailed design, construction documentation, and finally execution. We maintain transparent communication throughout, with regular updates and milestone reviews.",
    category: "Process",
  },
  {
    question: "Do you work with a fixed budget?",
    answer: "Yes, we work within defined budgets and provide detailed cost estimates at each phase. Our transparent pricing ensures there are no surprises. We also offer value engineering options to optimize costs without compromising on quality or design intent.",
    category: "Pricing",
  },
  {
    question: "Can you work with my existing architect or designer?",
    answer: "Absolutely. We are happy to collaborate with your chosen architects and designers. Our team can serve as the construction partner, ensuring the design vision is executed with precision. We have extensive experience working alongside world-renowned design firms.",
    category: "Services",
  },
  {
    question: "What materials do you typically use?",
    answer: "We source premium materials from trusted suppliers worldwide. This includes natural stone, sustainable hardwoods, high-performance glass, and cutting-edge building systems. We prioritize materials that offer both aesthetic appeal and long-term durability, with an increasing focus on sustainable and eco-friendly options.",
    category: "Materials",
  },
  {
    question: "Do you offer interior design services?",
    answer: "Yes, our interior design division works closely with our architecture team to create cohesive spaces. From furniture selection to lighting design, material palettes to art curation, we ensure every interior element aligns with the overall architectural vision.",
    category: "Services",
  },
  {
    question: "What warranties do you provide?",
    answer: "We provide comprehensive warranties on all our work. Structural elements carry a 10-year warranty, while finishes and fixtures are covered for 2-5 years depending on the manufacturer. We also offer ongoing maintenance services to ensure your property remains in pristine condition.",
    category: "General",
  },
];

const categories = ["All", "General", "Process", "Pricing", "Services", "Materials"];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">FAQ</p>
            <h1 className="heading-lg mb-6">
              Frequently Asked <span className="text-luxury-gold">Questions</span>
            </h1>
            <p className="body-lg">
              Find answers to common questions about our services, process, and approach.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-heading text-lg text-luxury-text pr-4">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index ? "bg-luxury-gold text-white" : "bg-luxury-gold/10 text-luxury-gold"
                  }`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="body-md">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
