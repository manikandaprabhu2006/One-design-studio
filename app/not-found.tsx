"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <p className="label-text mb-4">Error 404</p>
        <h1 className="heading-lg mb-6">
          Page Not <span className="text-luxury-gold">Found</span>
        </h1>
        <p className="body-lg mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-luxury-gradient text-white rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
