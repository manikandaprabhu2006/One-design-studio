"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Interior", "Landscape"];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop", title: "The Horizon Villa", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop", title: "Modern Living Room", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop", title: "Meridian Tower", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop", title: "The Glass House", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop", title: "Minimalist Interior", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=2070&auto=format&fit=crop", title: "Garden Design", category: "Landscape" },
  { src: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?q=80&w=2070&auto=format&fit=crop", title: "Heritage Restoration", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2070&auto=format&fit=crop", title: "Serenity Residence", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", title: "Nova Office", category: "Commercial" },
  { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop", title: "Luxury Kitchen", category: "Interior" },
  { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop", title: "Coastal Villa", category: "Residential" },
  { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2070&auto=format&fit=crop", title: "Living Space", category: "Interior" },
];


export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <div className="pt-32 pb-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <p className="label-text mb-4">Gallery</p>
            <h1 className="heading-lg mb-6">
              Our <span className="text-luxury-gold">Visual</span> Journey
            </h1>
            <p className="body-lg">
              A curated collection of our finest architectural and interior design work.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
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

        <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => openLightbox(index)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className={`relative ${index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}>
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-xs uppercase tracking-wider text-white/70">{image.category}</p>
                      <p className="font-heading text-lg">{image.title}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent rounded-b-lg">
                <p className="font-heading text-xl text-white">{filteredImages[lightboxIndex].title}</p>
                <p className="text-sm text-white/70">{filteredImages[lightboxIndex].category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
