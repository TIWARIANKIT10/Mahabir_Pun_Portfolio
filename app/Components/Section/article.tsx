"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "The Story of Nepal's First Wireless Network",
    category: "Technology",
    date: "December 15, 2024",
    excerpt:
      "How a TV dish antenna and determination brought internet to a remote Himalayan village, changing lives forever.",
    image: "/gallery-2.jpg",
  },
  {
    title: "Building Nepal's Future Through Innovation",
    category: "Innovation",
    date: "December 8, 2024",
    excerpt:
      "The National Innovation Center is creating jobs, fostering research, and keeping talent in Nepal.",
    image: "/gallery-5.jpg",
  },
  {
    title: "Education: The Key to Transformation",
    category: "Education",
    date: "November 28, 2024",
    excerpt:
      "From a village school to nationwide impact—how education changes lives in remote communities.",
    image: "/gallery-1.jpg",
  },
];

export default function Articles() {
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
      id="articles"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-sm font-medium text-black/50 uppercase tracking-widest mb-4"
            >
              ARTICLES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl lg:text-5xl font-bold"
            >
              Latest Updates
            </motion.h2>
          </div>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("Full articles page coming soon!");
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 text-black font-medium mt-6 md:mt-0 group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </motion.a>
        </div>

        {/* Articles Grid - Staggered */}
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 100, rotate: index === 0 ? 2 : index === 1 ? -1 : 1 }}
              animate={{
                opacity: visible ? 1 : 0,
                y: visible ? 0 : 100,
                rotate: visible ? 0 : index === 0 ? 2 : index === 1 ? -1 : 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1 + index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group cursor-pointer"
              style={{
                marginTop: index === 1 ? "40px" : index === 2 ? "80px" : "0",
              }}
              onClick={() => alert(`Article: ${article.title}\n\nComing soon!`)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-6">
                {/* Diagonal reveal mask */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: visible ? "100%" : 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="absolute inset-0 bg-white z-10"
                />
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
                  style={{ filter: "grayscale(100%)" }}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-xs font-medium">{article.category}</span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Content */}
              <div>
                <time className="text-sm text-black/50">{article.date}</time>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:underline underline-offset-4">
                  {article.title}
                </h3>
                <p className="text-black/60 text-sm leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Read more link */}
                <div className="mt-4 flex items-center gap-2 text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
