import { FadeIn } from "@/components/animations/fade-in";
import Image from "next/image";
import { Search, PenTool, FileCheck, HardHat, Paintbrush, Home, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Process",
  description: "Discover our refined construction process from discovery to delivery.",
};

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Consultation",
    description: "We begin every project with a comprehensive discovery phase. Our team meets with you to understand your vision, lifestyle, budget, and timeline. We conduct site analysis, feasibility studies, and regulatory research to establish a solid foundation for the project.",
    details: ["Initial consultation", "Site analysis", "Feasibility study", "Budget planning", "Timeline establishment"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Concept & Design",
    description: "Our architects translate your vision into conceptual designs. Through iterative feedback sessions, we refine the concept into detailed architectural drawings, 3D visualizations, and material specifications.",
    details: ["Concept sketches", "3D visualization", "Material selection", "Design refinement", "Client approval"],
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Documentation & Permits",
    description: "We prepare comprehensive construction documents and manage all permit applications. Our team ensures compliance with local building codes, zoning regulations, and environmental requirements.",
    details: ["Construction documents", "Permit applications", "Code compliance", "Engineering review", "Final approvals"],
  },
  {
    number: "04",
    icon: HardHat,
    title: "Construction",
    description: "Our skilled craftsmen bring the design to life with precision and care. We maintain rigorous quality control, regular site inspections, and transparent communication throughout the build phase.",
    details: ["Site preparation", "Foundation work", "Structural construction", "MEP installation", "Quality inspections"],
  },
  {
    number: "05",
    icon: Paintbrush,
    title: "Finishing & Details",
    description: "The finishing phase is where luxury truly comes alive. We install premium fixtures, custom millwork, curated finishes, and execute every detail with artisan-level precision.",
    details: ["Interior finishes", "Fixture installation", "Custom millwork", "Lighting design", "Final detailing"],
  },
  {
    number: "06",
    icon: Home,
    title: "Delivery & Handover",
    description: "Before handover, we conduct thorough inspections, testing, and commissioning. We provide comprehensive documentation, maintenance guides, and ongoing support to ensure your complete satisfaction.",
    details: ["Final inspection", "Systems testing", "Documentation handover", "Maintenance briefing", "Warranty activation"],
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <p className="label-text mb-4">How We Work</p>
            <h1 className="heading-lg mb-6">
              Our <span className="text-luxury-gold">Process</span>
            </h1>
            <p className="body-lg">
              A refined, transparent approach to building exceptional spaces. Every step is designed 
              to ensure clarity, quality, and your complete satisfaction.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <FadeIn key={step.number} delay={0.1}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="font-numbers text-5xl font-bold text-luxury-gold/20">{step.number}</span>
                    <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-luxury-gold" />
                    </div>
                  </div>
                  <h2 className="heading-sm mb-4">{step.title}</h2>
                  <p className="body-lg mb-6">{step.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <div key={detail} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                        <span className="text-sm text-luxury-text">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={`https://images.unsplash.com/photo-${[
                        "1503387762-592deb58ef4e", "1600585154526-990dced4db0d", "1600607687939-ce8a6c25118c",
                        "1600566753190-17f0baa2a6c3", "1618221195710-dd6b41faaea6", "1600596542815-ffad4c1539a9"
                      ][index]}?q=80&w=2070&auto=format&fit=crop`}
                      alt={step.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
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
