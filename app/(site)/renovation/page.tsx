import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Renovation & Remodeling",
  description: "Transform existing spaces with expert renovation and remodeling services.",
};

const features = [
  "Full Home Renovations",
  "Kitchen & Bath Remodeling",
  "Historic Building Restoration",
  "Space Reconfiguration",
  "Exterior Facelifts",
  "Basement Finishing",
  "Attic Conversions",
  "Energy Efficiency Upgrades",
];

export default function RenovationPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <FadeIn>
            <p className="label-text mb-4">Services</p>
            <h1 className="heading-lg mb-6">
              Renovation & <span className="text-luxury-gold">Remodeling</span>
            </h1>
            <p className="body-lg mb-6">
              Breathing new life into existing spaces requires a unique blend of respect for 
              history and vision for the future. Our renovation team specializes in transforming 
              outdated structures into modern masterpieces while preserving their essential character.
            </p>
            <p className="body-lg mb-8">
              Whether it's a complete overhaul or targeted improvements, we approach every renovation 
              with the same commitment to quality and attention to detail as our new construction projects.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
            >
              Start Your Renovation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                alt="Renovation project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-luxury-gold/10 mb-20">
          {[
            { value: 60, suffix: "+", label: "Renovations" },
            { value: 100, suffix: "%", label: "Quality Guarantee" },
            { value: 30, suffix: "+", label: "Historic Restorations" },
            { value: 40, suffix: "%", label: "Avg Value Increase" },
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop"
                alt="Historic restoration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-sm mb-6">Renovation Services</h2>
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
