"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-cream">
      <div className="flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-16 h-16 border-2 border-luxury-gold/20 rounded-full" />
          <motion.div
            className="absolute inset-0 border-2 border-luxury-gold rounded-full border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <p className="font-heading text-2xl text-luxury-text tracking-wider">
            ONE DESIGN
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-luxury-gold mt-1">
            Studio
          </p>
        </motion.div>
      </div>
    </div>
  );
}
