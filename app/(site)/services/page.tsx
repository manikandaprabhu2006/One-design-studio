import { FadeIn } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home, Building2, Paintbrush, Ruler, TreePine, Lightbulb, Shield } from "lucide-react";

export const metadata = {
  title: "Services",
  description: "Comprehensive luxury construction and architecture services for residential, commercial, and renovation projects.",
};

const allServices = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "From concept to completion, we build custom homes that reflect your lifestyle and aspirations. Our residential projects range from luxury villas to modern apartments, each designed with meticulous attention to detail.",
    features: ["Custom Home Design", "Luxury Villas", "Modern Apartments", "Smart Home Integration", "Landscape Design"],
    href: "/residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "We create high-performance commercial spaces that enhance productivity and reflect your brand identity. From corporate offices to retail environments, our commercial projects set new standards.",
    features: ["Corporate Offices", "Retail Spaces", "Hospitality", "Mixed-Use Developments", "Industrial Facilities"],
    href: "/commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Paintbrush,
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with our expert renovation services. We breathe new life into outdated structures while preserving their character and enhancing their functionality.",
    features: ["Interior Renovation", "Exterior Facelifts", "Historic Restoration", "Space Optimization", "Modern Upgrades"],
    href: "/renovation",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
  },
  {
    icon: Ruler,
    title: "Architecture & Design",
    description: "Our architectural services encompass everything from initial concept development to detailed construction documentation. We create designs that are innovative, sustainable, and buildable.",
    features: ["Concept Design", "3D Visualization", "Construction Documents", "Permit Assistance", "Design Consultation"],
    href: "/services",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
  },
  {
    icon: TreePine,
    title: "Landscape Architecture",
    description: "We design outdoor environments that complement and enhance the built structure. Our landscape designs create seamless transitions between interior and exterior spaces.",
    features: ["Garden Design", "Hardscaping", "Outdoor Living", "Sustainable Landscaping", "Water Features"],
    href: "/services",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop",
  },
  {
    icon: Lightbulb,
    title: "Interior Design",
    description: "Our interior design team creates cohesive, luxurious interiors that reflect your personality. From furniture selection to lighting design, every element is carefully curated.",
    features: ["Space Planning", "Furniture Design", "Lighting Design", "Material Selection", "Art Curation"],
    href: "/services",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <p className="label-text mb-4">Our Services</p>
            <h1 className="heading-lg mb-6">
              Comprehensive Solutions For Every Space
            </h1>
            <p className="body-lg">
              From initial concept to final handover, we offer end-to-end services 
              that ensure every project is executed with precision and excellence.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-20">
          {allServices.map((service, index) => (
            <FadeIn key={service.title} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-luxury-gold" />
                  </div>
                  <h2 className="heading-sm mb-4">{service.title}</h2>
                  <p className="body-lg mb-8">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        <span className="text-sm text-luxury-text">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
