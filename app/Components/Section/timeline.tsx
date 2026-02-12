"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "1955",
    title: "Born in Nangi",
    description: "Born on January 22, 1955 in the remote Myagdi district of Nepal. Son of a Gurkha soldier.",
  },
  {
    year: "1973",
    title: "Started Teaching",
    description: "Began teaching at age 18 in Nangi village, taking the first step toward an educational revolution.",
  },
  {
    year: "1989",
    title: "Scholarship to USA",
    description: "Earned scholarship to University of Nebraska at Kearney, earning a Bachelor's degree in Science Education.",
  },
  {
    year: "1992",
    title: "Returned to Nepal",
    description: "Came back with a vision for change, committed to serving his community and bringing progress.",
  },
  {
    year: "1993",
    title: "Himanchal High School",
    description: "Founded the school in Nangi with minimal resources, starting with just a chalkboard and a dream.",
  },
  {
    year: "2002",
    title: "First Wireless Network",
    description: "Connected Nangi using TV dish antenna - the first wireless network in Nepal, pioneering rural connectivity.",
  },
  {
    year: "2007",
    title: "Magsaysay Award",
    description: "Received the Ramon Magsaysay Award for Community Leadership, known as the 'Asian Nobel Prize'.",
  },
  {
    year: "2012",
    title: "National Innovation Center",
    description: "Founded NIC to foster innovation, create jobs, and retain talent in Nepal.",
  },
  {
    year: "2019",
    title: "NIC Inaugurated",
    description: "Official inauguration in Kathmandu, establishing research labs and an innovation hub.",
  },
  {
    year: "2024",
    title: "Continuing the Mission",
    description: "Expanding wireless networks, developing agricultural drones, telemedicine, and educational initiatives.",
  },
];

export default function Timeline() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="timeline"
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
            THE JOURNEY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Key Milestones
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-1/2" />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 50 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`flex-1 md:px-12 ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl border border-black/10 hover:border-black/30 transition-colors duration-300">
                    <span className="text-3xl font-bold text-black/20">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{event.title}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-black rounded-full md:-translate-x-1/2 mt-6 ring-4 ring-white" />

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
