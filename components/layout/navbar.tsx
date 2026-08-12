"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Construction", href: "/residential" },
      { label: "Commercial Construction", href: "/commercial" },
      { label: "Renovation & Remodeling", href: "/renovation" },
    ],
  },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding">
          <nav className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <rect
                    x="2"
                    y="10"
                    width="12"
                    height="28"
                    fill="none"
                    stroke="#C5A572"
                    strokeWidth="1.5"
                    className="transition-all duration-300 group-hover:fill-luxury-gold/10"
                  />
                  <rect
                    x="16"
                    y="4"
                    width="10"
                    height="34"
                    fill="none"
                    stroke="#C5A572"
                    strokeWidth="1.5"
                    className="transition-all duration-300 group-hover:fill-luxury-gold/10"
                  />
                  <rect
                    x="28"
                    y="14"
                    width="10"
                    height="24"
                    fill="none"
                    stroke="#C5A572"
                    strokeWidth="1.5"
                    className="transition-all duration-300 group-hover:fill-luxury-gold/10"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg tracking-[0.15em] text-luxury-text leading-none">
                  ONE DESIGN
                </span>
                <span className="text-[0.6rem] uppercase tracking-[0.3em] text-luxury-gold leading-none mt-0.5">
                  Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-luxury-gold"
                        : "text-luxury-text hover:text-luxury-gold"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 py-2 bg-white/95 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-luxury-gold/10 overflow-hidden"
                      >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex items-center justify-between px-5 py-3 text-sm text-luxury-text hover:bg-luxury-gold/5 hover:text-luxury-gold transition-colors duration-200"
                            >
                              {child.label}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:block">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gradient text-white text-sm font-medium rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-0.5"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-luxury-text hover:text-luxury-gold transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </nav>
          </div>
        </motion.header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 lg:hidden"
            >
              <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
              >
                <div className="flex flex-col h-full pt-24 pb-8 px-6">
                  <div className="flex-1 space-y-1">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block py-3 text-lg font-heading ${
                            pathname === item.href
                              ? "text-luxury-gold"
                              : "text-luxury-text"
                          }`}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <div className="pl-4 space-y-1 pb-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block py-2 text-sm text-luxury-ash hover:text-luxury-gold transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Link
                      href="/contact"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-luxury-gradient text-white rounded-full font-medium"
                    >
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }
