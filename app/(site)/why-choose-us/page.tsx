import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import Image from "next/image";
import { Award, Users, Shield, Clock, Leaf, Gem, Lightbulb, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "Why Choose Us",
  description: "Discover why clients trust One Design Studio for their most important projects.",
};

const reasons = [
  {
    icon: Gem,
    title: "Uncompromising Quality",
    description: "We never cut corners. Every material, every joint, every finish is executed to the highest standards of craftsmanship.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Design",
    description: "Our designs push boundaries while remaining timeless. We blend cutting-edge technology with classic architectural principles.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team brings together architects, engineers, and craftsmen with decades of combined experience in luxury construction.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time. Our project management systems ensure deadlines are met without compromising on quality.",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "We integrate eco-friendly materials and energy-efficient systems into every project, reducing environmental impact.",
  },
  {
    icon: HeartHandshake,
    title: "Client Partnership",
    description: "We view every project as a partnership. Your vision guides our work, and transparent communication keeps you informed.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <p className="label-text mb-4">Why Choose Us</p>
            <h1 className="heading-lg mb-6">
              The One Design <span className="text-luxury-gold">Difference</span>
            </h1>
            <p className="body-lg">
              We don't just build structures — we create lasting legacies. Here's why discerning 
              clients choose One Design Studio for their most important projects.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.1}>
              <div className="glass-card rounded-2xl p-8 h-full hover:-translate-y-1 hover:shadow-xl transition-all duration-500">
                <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6">
                  <reason.icon className="w-7 h-7 text-luxury-gold" />
                </div>
                <h3 className="font-heading text-xl text-luxury-text mb-3">{reason.title}</h3>
                <p className="body-md">{reason.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-luxury-gold/10">
          {[
            { value: 250, suffix: "+", label: "Projects Delivered" },
            { value: 98, suffix: "%", label: "Client Satisfaction" },
            { value: 15, suffix: "+", label: "Years of Excellence" },
            { value: 35, suffix: "", label: "Industry Awards" },
          ].map((stat) => (
            <FadeIn key={stat.label}>
              <div className="text-center">
                <p className="font-numbers text-4xl lg:text-5xl font-bold text-luxury-gold mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-luxury-ash">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
