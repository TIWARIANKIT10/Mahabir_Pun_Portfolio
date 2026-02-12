"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Wifi, Users, Globe, Building2 } from "lucide-react";

const impactCards = [
  {
    icon: Wifi,
    number: "200+",
    label: "Villages Connected",
    description: "Remote villages with internet access across Nepal",
  },
  {
    icon: Users,
    number: "50,000+",
    label: "Lives Impacted",
    description: "People benefiting from connectivity and education",
  },
  {
    icon: Globe,
    number: "2002",
    label: "First Wireless Network",
    description: "Year Nepal's first village got connected to the internet",
  },
  {
    icon: Building2,
    number: "1",
    label: "National Innovation Center",
    description: "Hub for research, development, and innovation in Nepal",
  },
];

export default function Impact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-sm font-medium text-black/50 uppercase tracking-widest mb-4"
          >
            OUR IMPACT
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Connecting Communities
          </motion.h2>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative p-8 border border-black/10 rounded-2xl bg-white hover:border-black/30 transition-all duration-500 card-lift"
                style={{ perspective: "1000px" }}
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-white mb-6 transition-all duration-400 group-hover:rotate-[10deg] group-hover:scale-110">
                  <Icon className="w-7 h-7" />
                </div>

                {/* Number */}
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {card.number}
                </div>

                {/* Label */}
                <h3 className="text-lg font-semibold mb-2">{card.label}</h3>

                {/* Description */}
                <p className="text-black/60 text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10 blur-xl" />
              </motion.div>
            );
          })}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="text-2xl lg:text-3xl font-medium italic text-black/80 leading-relaxed">
            &ldquo;The only way to change Nepal is through innovation and
            education. We must create opportunities for our youth to stay and
            build our nation.&rdquo;
          </blockquote>
          <cite className="block mt-6 text-black/50 not-italic">
            — Mahabir Pun
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
