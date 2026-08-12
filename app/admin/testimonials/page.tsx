"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Search, Star, Edit, Trash2 } from "lucide-react";

const dummyTestimonials = [
  { id: "1", name: "Sarah Mitchell", role: "Homeowner", rating: 5, featured: true },
  { id: "2", name: "James Chen", role: "CEO, Meridian Corp", rating: 5, featured: true },
  { id: "3", name: "Elena Rodriguez", role: "Property Developer", rating: 5, featured: false },
];

export default function AdminTestimonialsPage() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-heading text-3xl text-luxury-text mb-2">Testimonials</h1>
          <p className="text-luxury-ash">Manage client testimonials</p>
        </div>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gradient text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20">
          <Plus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-luxury-ash" />
            <input
              type="text"
              placeholder="Search testimonials..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm focus:outline-none focus:border-luxury-gold/50 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-xs font-medium text-luxury-ash uppercase tracking-wider">Client</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-luxury-ash uppercase tracking-wider">Role</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-luxury-ash uppercase tracking-wider">Rating</th>
                <th className="text-left px-6 py-4 text-xs font-medium text-luxury-ash uppercase tracking-wider">Featured</th>
                <th className="text-right px-6 py-4 text-xs font-medium text-luxury-ash uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dummyTestimonials.map((testimonial, index) => (
                <motion.tr
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-luxury-text">{testimonial.name}</td>
                  <td className="px-6 py-4 text-sm text-luxury-ash">{testimonial.role}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-0.5">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${testimonial.featured ? "bg-green-50 text-green-600" : "bg-gray-50 text-gray-600"}`}>
                      {testimonial.featured ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center hover:bg-amber-100 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
