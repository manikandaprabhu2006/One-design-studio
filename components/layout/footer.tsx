"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
  ],
  services: [
    { label: "Residential", href: "/residential" },
    { label: "Commercial", href: "/commercial" },
    { label: "Renovation", href: "/renovation" },
    { label: "Interior Design", href: "/services" },
    { label: "Consultation", href: "/contact" },
  ],
  projects: [
    { label: "Featured Projects", href: "/projects" },
    { label: "Residential", href: "/projects?category=residential" },
    { label: "Commercial", href: "/projects?category=commercial" },
    { label: "Gallery", href: "/gallery" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-luxury-text text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-luxury-gradient" />

      <div className="section-padding py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <svg viewBox="0 0 40 40" className="w-full h-full">
                      <rect x="2" y="10" width="12" height="28" fill="none" stroke="#C5A572" strokeWidth="1.5" />
                      <rect x="16" y="4" width="10" height="34" fill="none" stroke="#C5A572" strokeWidth="1.5" />
                      <rect x="28" y="14" width="10" height="24" fill="none" stroke="#C5A572" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-lg tracking-[0.15em] text-white leading-none">ONE DESIGN</span>
                    <span className="text-[0.6rem] uppercase tracking-[0.3em] text-luxury-gold leading-none mt-0.5">Studio</span>
                  </div>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
                Creating premium residential and commercial spaces with timeless design, 
                quality craftsmanship and lasting value since 2008.
              </p>
              <div className="space-y-3">
                <a href="mailto:hello@onedesignstudio.com" className="flex items-center gap-3 text-sm text-white/60 hover:text-luxury-gold transition-colors">
                  <Mail className="w-4 h-4" />
                  hello@onedesignstudio.com
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-white/60 hover:text-luxury-gold transition-colors">
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </a>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  123 Architecture Lane, Design District, NY 10001
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-6">Projects</h4>
              <ul className="space-y-3">
                {footerLinks.projects.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-2">
              <h4 className="text-xs uppercase tracking-[0.2em] text-luxury-gold mb-6">Newsletter</h4>
              <p className="text-sm text-white/60 mb-4">Subscribe for design inspiration and updates.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-luxury-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-luxury-gradient text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} One Design Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-luxury-gold transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
