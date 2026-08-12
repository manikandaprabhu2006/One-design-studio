"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, Clock } from "lucide-react";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 right-0 w-72 glass-card rounded-2xl p-5 shadow-2xl"
          >
            <div className="mb-4">
              <h4 className="font-heading text-lg text-luxury-text">Get in Touch</h4>
              <p className="text-xs text-luxury-ash mt-1">We typically respond within 24 hours.</p>
            </div>
            <div className="space-y-3">
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl bg-luxury-gold/5 hover:bg-luxury-gold/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-luxury-text">WhatsApp</p>
                  <p className="text-xs text-luxury-ash">Chat with us</p>
                </div>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 p-3 rounded-xl bg-luxury-gold/5 hover:bg-luxury-gold/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-luxury-text">Call Us</p>
                  <p className="text-xs text-luxury-ash">+1 (234) 567-890</p>
                </div>
              </a>
              <a href="mailto:hello@onedesignstudio.com" className="flex items-center gap-3 p-3 rounded-xl bg-luxury-gold/5 hover:bg-luxury-gold/10 transition-colors">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-luxury-text">Email</p>
                  <p className="text-xs text-luxury-ash">hello@onedesignstudio.com</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-luxury-gold/5">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-luxury-gold" />
                </div>
                <div>
                  <p className="text-sm font-medium text-luxury-text">Working Hours</p>
                  <p className="text-xs text-luxury-ash">Mon - Sat: 9AM - 6PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-luxury-gradient text-white shadow-lg shadow-luxury-gold/30 flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-luxury-gold/40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
