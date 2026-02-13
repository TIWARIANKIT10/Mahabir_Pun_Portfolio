"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px)").matches
      : false
  );
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile, { passive: true });
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!heroRef.current || !imageRef.current || !contentRef.current) return;

      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.5), 1);

      contentRef.current.style.transform = `translateY(${-scrollY * 0.3}px)`;
      contentRef.current.style.opacity = `${1 - progress}`;
      imageRef.current.style.transform = `scale(${1 + progress * 0.1}) translateY(${-scrollY * 0.2}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  const headlineWords = ["CONNECTING", "MOUNTAINS", "& MINDS"];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Diagonal Divider Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: visible ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute top-0 left-[55%] w-px h-full bg-black/10 origin-top"
        style={{ transform: "rotate(8deg)" }}
      />

      {/* Background Image (Right Side) */}
      <motion.div
        ref={imageRef}
        initial={{
          opacity: 0,
          clipPath: isDesktop
            ? "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)"
            : "inset(0 0 0 0)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          clipPath: visible && isDesktop
            ? "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)"
            : "inset(0 0 0 0)",
        }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full h-[56vh] lg:left-auto lg:right-0 lg:w-[55%] lg:h-full gpu-accelerate"
      >
        <img
          src="/hero-portrait.jpg"
          alt="Mahabir Pun"
          className="w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-white/20" />
      </motion.div>

      {/* Floating Accent Shapes */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-[20%] left-[10%] w-3 h-3 rounded-full bg-black/5 animate-float"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-[40%] left-[5%] w-20 h-px bg-black/5 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: visible ? 1 : 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-[30%] left-[15%] w-2 h-2 rounded-full bg-black/5 animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content (Left Side) */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col justify-end lg:justify-center min-h-screen px-4 sm:px-6 lg:px-16 xl:px-24 pt-24 pb-8 lg:pt-0 lg:pb-0 gpu-accelerate w-full lg:w-[55%]"
      >
        <div className="max-w-xl bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:bg-transparent lg:backdrop-blur-none lg:rounded-none lg:p-0">
          {/* Headline with letter stagger */}
          <h1 className="mb-6">
            {headlineWords.map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 80, rotateX: 45 }}
                animate={{
                  opacity: visible ? 1 : 0,
                  y: visible ? 0 : 80,
                  rotateX: visible ? 0 : 45,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5 + wordIndex * 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none"
                style={{ perspective: "1000px" }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{
              opacity: visible ? 1 : 0,
              filter: visible ? "blur(0px)" : "blur(10px)",
            }}
            transition={{ duration: 0.6, delay: 1.1, ease: [0.4, 0, 0.2, 1] }}
            className="text-base sm:text-lg text-black/70 mb-8 max-w-md leading-relaxed"
          >
            Mahabir Pun — From a remote Himalayan village to connecting Nepal&apos;s
            most isolated communities through wireless technology and innovation.
          </motion.p>

          {/* CTA Group */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <motion.a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: visible ? 1 : 0,
                scale: visible ? 1 : 0,
              }}
              transition={{
                duration: 0.5,
                delay: 1.3,
                ease: [0.68, -0.55, 0.265, 1.55],
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-black/90 transition-all duration-300 w-full sm:w-auto"
            >
              Explore My Journey
            </motion.a>
            <motion.button
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: visible ? 1 : 0,
                x: visible ? 0 : -30,
              }}
              transition={{
                duration: 0.4,
                delay: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => alert("Video coming soon!")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <Play className="w-4 h-4" />
              <Link to="story" smooth duration={500} offset={-70}>
               Watch The Story
              </Link>
             
            </motion.button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs font-medium text-black/50 uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-black/50 animate-bounce-subtle" />
      </motion.div>
    </section>
  );
}
