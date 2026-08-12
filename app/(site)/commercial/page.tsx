import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export const metadata = {
  title: "Commercial Construction",
  description: "High-performance commercial spaces designed to elevate your brand and business.",
};

const features = [
  "Corporate Office Buildings",
  "Retail & Showroom Spaces",
  "Hospitality & Hotels",
  "Mixed-Use Developments",
  "Industrial Facilities",
  "Healthcare Buildings",
  "Educational Institutions",
  "Sustainable Commercial Design",
];

export default function CommercialPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <FadeIn>
            <p className="label-text mb-4">Services</p>
            <h1 className="heading-lg mb-6">
              Commercial <span className="text-luxury-gold">Construction</span>
            </h1>
            <p className="body-lg mb-6">
              We design and build commercial spaces that drive business success. Our commercial 
              projects combine aesthetic excellence with functional efficiency, creating environments 
              where businesses thrive and brands make lasting impressions.
            </p>
            <p className="body-lg mb-8">
              From corporate headquarters to retail destinations, we understand that commercial 
              architecture must serve both the people who use it and the businesses that operate within it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
            >
              Discuss Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
                alt="Commercial construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-luxury-gold/10 mb-20">
          {[
            { value: 80, suffix: "+", label: "Commercial Projects" },
            { value: 2.5, suffix: "M+", label: "Sq Ft Built" },
            { value: 95, suffix: "%", label: "On-Time Delivery" },
            { value: 40, suffix: "+", label: "Corporate Clients" },
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
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern office building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="heading-sm mb-6">Commercial Solutions</h2>
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
