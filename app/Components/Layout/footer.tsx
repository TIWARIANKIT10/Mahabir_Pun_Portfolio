"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#timeline" },
  { label: "Impact", href: "#impact" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer ref={footerRef} className="relative bg-white">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Main Footer */}
      <div className="relative border-t border-black/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className="text-2xl font-bold tracking-tight inline-block mb-4"
              >
                Mahabir Pun
              </a>
              <p className="text-black/60 text-sm leading-relaxed">
                Connecting Mountains & Minds
              </p>
              <p className="text-black/40 text-sm mt-4">
                Bridging the digital divide and building Nepal&apos;s future through
                innovation and education.
              </p>
            </motion.div>

            {/* Page Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-medium mb-6">Pages</h4>
              <ul className="space-y-3">
                {pageLinks.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.15 + index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-black/60 hover:text-black transition-colors duration-250 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-black transition-all duration-250 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 40 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="font-medium mb-2">Stay Updated</h4>
              <p className="text-black/60 text-sm mb-4">
                Subscribe for updates on our work connecting communities.
              </p>

              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-600"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium">Subscribed!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-2.5 border border-black/10 rounded-lg focus:border-black focus:outline-none text-sm transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-black text-white rounded-lg hover:bg-black/90 transition-colors group"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Mahabir Pun. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Privacy Policy coming soon!");
                }}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Terms of Service coming soon!");
                }}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
