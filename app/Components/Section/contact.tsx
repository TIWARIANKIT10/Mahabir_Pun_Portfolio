"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@nationalinnovationcenter.org",
    href: "mailto:info@nationalinnovationcenter.org",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977-1-5970236",
    href: "tel:+97715970236",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "National Innovation Center, Kathmandu, Nepal",
    href: "#",
  },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-br from-white to-gray-50 overflow-hidden"
    >
      {/* Diagonal background element */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(8deg, transparent 50%, rgba(0,0,0,0.02) 50%)",
        }}
      />

      <div className="relative max-w-12xl mx-auto px-6 lg:px-8 flex-row  items-center text-cent">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 justify-items-center">
          {/* Left Column - Contact Info */}
          <motion.div className="w-full max-w-2xl lg:col-span-2"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : -60 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-sm font-medium text-black/50 uppercase tracking-widest mb-4">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Join the Mission
            </h2>
            <p className="text-black/60 leading-relaxed mb-10">
              Whether you want to collaborate, support our work, or learn more
              about connecting communities, we&apos;d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-black text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-sm text-black/50">{item.label}</span>
                      <p className="font-medium group-hover:underline underline-offset-4">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <span className="text-sm text-black/50 mb-4 block">Follow Along</span>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(`${social.label} profile coming soon!`);
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.6 + index * 0.08,
                        ease: [0.68, -0.55, 0.265, 1.55],
                      }}
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-black/10 text-black hover:bg-black hover:text-white hover:rotate-[10deg] hover:scale-110 transition-all duration-400"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 60 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white p-8 lg:p-10 rounded-2xl border border-black/10 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
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
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-black/60">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/10 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all duration-300 focus:-translate-y-0.5"
                      placeholder="Your name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/10 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all duration-300 focus:-translate-y-0.5"
                      placeholder="your@email.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-black/10 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all duration-300 focus:-translate-y-0.5"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-black/10 rounded-lg focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none transition-all duration-300 focus:-translate-y-0.5 resize-none"
                      placeholder="Tell us what's on your mind..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 30 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-black text-white font-medium rounded-lg hover:bg-black/90 transition-all duration-300 group"
                  >
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
}
