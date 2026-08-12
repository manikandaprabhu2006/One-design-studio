"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, Search, Trash2 } from "lucide-react";

const dummyImages = [
  { id: "1", title: "Horizon Villa Exterior", category: "Residential" },
  { id: "2", title: "Meridian Tower Lobby", category: "Commercial" },
  { id: "3", title: "Serenity Pool", category: "Residential" },
];

export default function AdminGalleryPage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-luxury-text mb-2">Gallery</h1>
          <p className="text-luxury-ash">Manage your gallery images</p>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gradient text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20">
          <Plus className="w-4 h-4" />
          Upload Image
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-luxury-ash" />
          <input
            type="text"
            placeholder="Search images..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {dummyImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-square rounded-xl overflow-hidden bg-gray-100"
          >
            <Image
              src={`https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=500&auto=format&fit=crop`}
              alt={image.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-sm font-medium">{image.title}</p>
              <p className="text-xs text-white/70">{image.category}</p>
            </div>
            <button className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Trash2 className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
