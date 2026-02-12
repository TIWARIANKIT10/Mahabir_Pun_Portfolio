"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "/gallery-1.jpg",
    alt: "Village School",
    caption: "Children learning with computers at Himanchal High School",
    column: 1,
  },
  {
    src: "/gallery-2.jpg",
    alt: "Wireless Equipment",
    caption: "Wireless networking equipment in the Himalayas",
    column: 2,
  },
  {
    src: "/gallery-3.jpg",
    alt: "Village Life",
    caption: "Daily life in remote Nepali mountain villages",
    column: 3,
  },
  {
    src: "/gallery-4.jpg",
    alt: "Award Ceremony",
    caption: "Receiving recognition for community service",
    column: 1,
  },
  {
    src: "/gallery-5.jpg",
    alt: "NIC Building",
    caption: "National Innovation Center in Kathmandu",
    column: 2,
  },
  {
    src: "/gallery-6.jpg",
    alt: "Community Meeting",
    caption: "Community gathering in a mountain village",
    column: 3,
  },
];

export default function Gallery() {
  const [visible, setVisible] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const column1Ref = useRef<HTMLDivElement>(null);
  const column2Ref = useRef<HTMLDivElement>(null);
  const column3Ref = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / sectionHeight + 0.3));

      if (column1Ref.current) {
        column1Ref.current.style.transform = `translateY(${-progress * 40}px)`;
      }
      if (column2Ref.current) {
        column2Ref.current.style.transform = `translateY(${-progress * 80}px)`;
      }
      if (column3Ref.current) {
        column3Ref.current.style.transform = `translateY(${-progress * 120}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const column1Images = galleryImages.filter((img) => img.column === 1);
  const column2Images = galleryImages.filter((img) => img.column === 2);
  const column3Images = galleryImages.filter((img) => img.column === 3);

  const ImageCard = ({
    image,
    index,
    columnDelay,
  }: {
    image: (typeof galleryImages)[0];
    index: number;
    columnDelay: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 80 }}
      transition={{
        duration: 0.8,
        delay: columnDelay + index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-xl cursor-pointer"
      onClick={() => setLightboxImage(image.src)}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0"
        />
      </div>

      {/* Caption Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <p className="text-white text-sm font-medium">{image.caption}</p>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-colors duration-300" />
    </motion.div>
  );

  return (
    <>
      <section
        id="gallery"
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
              GALLERY
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              Moments of Change
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-black/60 max-w-xl mx-auto"
            >
              Snapshots from the journey—villages, technology, and the people we
              serve.
            </motion.p>
          </div>

          {/* Masonry Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Column 1 - Slow parallax */}
            <div ref={column1Ref} className="space-y-6 gpu-accelerate">
              {column1Images.map((image, index) => (
                <ImageCard
                  key={image.src}
                  image={image}
                  index={index}
                  columnDelay={0.3}
                />
              ))}
            </div>

            {/* Column 2 - Medium parallax, offset */}
            <div ref={column2Ref} className="space-y-6 md:mt-10 gpu-accelerate">
              {column2Images.map((image, index) => (
                <ImageCard
                  key={image.src}
                  image={image}
                  index={index}
                  columnDelay={0.45}
                />
              ))}
            </div>

            {/* Column 3 - Fast parallax, more offset */}
            <div ref={column3Ref} className="space-y-6 md:mt-20 gpu-accelerate">
              {column3Images.map((image, index) => (
                <ImageCard
                  key={image.src}
                  image={image}
                  index={index}
                  columnDelay={0.6}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="Gallery image"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
