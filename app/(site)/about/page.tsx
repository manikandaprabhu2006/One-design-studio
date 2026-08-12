import { FadeIn } from "@/components/animations/fade-in";
import { Counter } from "@/components/animations/counter";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Learn about One Design Studio's legacy of luxury architecture and construction excellence.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p className="label-text mb-4">About Us</p>
          <h1 className="heading-lg mb-8">
            Building Legacies Since <span className="text-luxury-gold">2008</span>
          </h1>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <FadeIn delay={0.1}>
            <p className="body-lg mb-6">
              One Design Studio was founded with a singular vision: to create spaces that transcend 
              the ordinary. Over the past 15 years, we have grown from a small design practice into 
              one of the most respected luxury construction firms in the country.
            </p>
            <p className="body-lg mb-6">
              Our team of architects, designers, and craftsmen share a commitment to excellence 
              that is evident in every project we undertake. We believe that great design should 
              be both beautiful and functional, timeless yet innovative.
            </p>
            <p className="body-lg">
              From bespoke residences to landmark commercial buildings, our portfolio reflects 
              a diverse range of projects united by a common thread: uncompromising quality and 
              thoughtful design.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
                alt="Our studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-luxury-gold/10 mb-20">
          {[
            { value: 250, suffix: "+", label: "Projects Completed" },
            { value: 15, suffix: "+", label: "Years of Excellence" },
            { value: 45, suffix: "", label: "Team Members" },
            { value: 35, suffix: "", label: "Design Awards" },
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
                alt="Our team at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="order-1 lg:order-2">
              <h2 className="heading-sm mb-6">Our Philosophy</h2>
              <p className="body-lg mb-6">
                We believe architecture is more than buildings — it is the art of shaping human 
                experience. Every line we draw, every material we select, and every space we create 
                is informed by a deep understanding of how people live, work, and dream.
              </p>
              <p className="body-lg mb-6">
                Sustainability is not an afterthought but a fundamental principle. We integrate 
                eco-friendly materials, energy-efficient systems, and biophilic design into every 
                project, ensuring our buildings are as kind to the environment as they are beautiful.
              </p>
              <div className="space-y-4 mt-8">
                {["Client-Centered Approach", "Sustainable Design", "Innovation & Technology", "Timeless Aesthetics"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                    <span className="text-luxury-text font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
