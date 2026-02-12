"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Navigation from "./Components/Layout/navbar";
import Hero from "./Components/Section/hero";
import About from "./Components/Section/about";
import Timeline from "./Components/Section/timeline";
import Footer from "./Components/Layout/footer";
import Gallery from "./Components/Section/gallary";
import Contact from "./Components/Section/contact";
import Articles from "./Components/Section/article";
import Story from "./Components/Section/story";
import ElectionAgenda from "./Components/Section/Agenda";
import Impact from "./Components/Section/impact";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <Navigation scrolled={scrolled}/>
    <Hero/>
    <About/>
    <ElectionAgenda/>
    {/* <Timeline/> */}
     <Impact/>
    <Gallery/>
   
    {/* <Articles/> */}
    <Story/>
    <Contact/>
    <Footer/>


   
    </>
  );
}
