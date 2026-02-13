"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !imageRef.current || !textRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight + 0.5));

      imageRef.current.style.transform = `translateY(${60 - progress * 120}px)`;
      textRef.current.style.transform = `translateY(${-30 + progress * 60}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-28 bg-white overflow-hidden"
    >
      {/* Subtle diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #000,
            #000 1px,
            transparent 1px,
            transparent 20px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start">
          {/* Image Column - Offset Top */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 80 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:mt-16 gpu-accelerate"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              {/* Image mask reveal */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: visible ? "100%" : 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-white z-10"
              />
              <img 
                src="/about-portrait.jpg"
                alt="Mahabir Pun"
                className="w-full h-full object-cover  hover:scale-[1.02] hover:rotate-1 transition-transform duration-500"
              />
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-black/10 -z-10" />
          </motion.div>

          {/* Text Column */}
          <div ref={textRef} className="lg:pt-12 gpu-accelerate">
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium text-black/50 uppercase tracking-widest mb-4"
            >
              ABOUT MAHABIR
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight"
            >
              A Journey from Nangi to the World
            </motion.h2>

            {/* Body Text */}
            <div className="space-y-5 sm:space-y-6 text-black/70 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I was born in 1955 in Nangi, a remote village in the Myagdi district
                of Nepal. As the son of a Gurkha soldier, I grew up walking four
                hours every day just to attend school. Those long walks taught me the
                value of education and the importance of connecting isolated
                communities.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                After earning scholarships to study in the United States, I returned
                to Nepal with a dream: to bring technology and education to my
                village. In 1993, I founded Himanchal High School with just a
                chalkboard and a vision. Today, that vision has grown into a
                nationwide movement.
              </motion.p>
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 mb-8"
            >
              <svg viewBox="0 0 200 60" className="w-40 h-auto">
                <motion.path
                  d="M10 45 Q 20 20, 40 35 T 70 30 Q 80 25, 90 35 T 120 25 Q 130 20, 140 30 T 170 25 Q 180 22, 190 28"
                  fill="none"
                  stroke="#000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: visible ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
              <p className="text-sm text-black/50 mt-2">Mahabir Pun</p>
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#timeline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#timeline")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -20 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="inline-flex items-center gap-2 text-black font-medium group"
            >
              Read My Full Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
