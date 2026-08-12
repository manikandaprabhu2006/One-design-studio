import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, TreePine, Lightbulb, Shield, Check } from "lucide-react";

export const metadata = {
  title: "Residential Construction",
  description: "Luxury custom homes, villas, and residential developments built with precision and artistry.",
};

const features = [
  "Custom Home Design & Build",
  "Luxury Villa Construction",
  "Modern Apartment Developments",
  "Smart Home Integration",
  "Sustainable Building Practices",
  "Landscape Architecture",
  "Interior Design Coordination",
  "Project Management",
];

export default function ResidentialPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <FadeIn>
            <p className="label-text mb-4">Services</p>
            <h1 className="heading-lg mb-6">
              Residential <span className="text-luxury-gold">Construction</span>
            </h1>
            <p className="body-lg mb-6">
              We create homes that are more than structures — they are sanctuaries designed 
              around how you live. From sprawling estates to intimate urban residences, every 
              project reflects a deep understanding of luxury, comfort, and personal expression.
            </p>
            <p className="body-lg mb-8">
              Our residential team combines architectural innovation with time-tested construction 
              methods, ensuring your home is as durable as it is beautiful. We handle everything 
              from initial concept to final handover.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
            >
              Start Your Home Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                alt="Luxury residential construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-luxury-gold/10 mb-20">
          {[
            { value: 120, suffix: "+", label: "Homes Built" },
            { value: 98, suffix: "%", label: "Client Satisfaction" },
            { value: 15, suffix: "+", label: "Years Experience" },
            { value: 50, suffix: "+", label: "Awards Won" },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <p className="font-numbers text-4xl font-bold text-luxury-gold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-luxury-ash">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <FadeIn>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
                alt="Modern home interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-sm mb-6">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-luxury-gold" />
                  </div>
                  <span className="text-sm text-luxury-text">{feature}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
