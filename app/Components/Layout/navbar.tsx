"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

interface NavigationProps {
  scrolled: boolean;
}

const navLinks = [
  { label: "About", href: "about" },
  { label: " Election Agenda", href: "manifesto" },
  { label: "Impact", href: "impact" },
  { label: "Gallery", href: "gallery" },
  { label: "Contact", href: "contact" },
];

export default function Navigation({ scrolled }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-black/10 h-16"
            : "bg-transparent h-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`text-xl font-bold tracking-tight transition-all duration-500 ${
                scrolled ? "scale-90" : "scale-100"
              }`}
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Mahabir Pun
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -20 }}
                  transition={{
                    duration: 0.4,
                    delay: (index + 1) * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative text-sm font-medium text-black/80 hover:text-black transition-all duration-300 underline-animate"
                >
                  <Link to={link.href} smooth duration={500} offset={-70}>{link.label}</Link>
                  
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            {/* <motion.a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
              className="hidden md:inline-flex items-center px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-black/90 transition-all duration-300"
            >
            
            </motion.a> */}
            <a href=""></a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-2xl font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              {/* <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-4 px-8 py-3 bg-black text-white text-lg font-medium rounded-full"
              >
                Support NIC
              </motion.a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
