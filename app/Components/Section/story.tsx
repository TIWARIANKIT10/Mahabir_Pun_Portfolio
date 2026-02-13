"use client"
import React from 'react'
import ReactPlayer from 'react-player'
import { Element } from "react-scroll";

export default function Story() {
  const videoUrl: string = "https://youtu.be/62NPyG8xsEE?si=Dxl8TPqw9eSZswAc";

  return (
    <section
      className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-36 py-16 sm:py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
      id="story"
    >
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <span className="inline-block text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-[0.2em] mb-4">
          <Element name="story">
            The Journey
          </Element>
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          Watch The Story
        </h2>
        <div className="mt-4 w-14 h-1 bg-gray-500 mx-auto rounded-full"></div>
      </div>

      {/* Video Container */}
      <div className="relative max-w-5xl mx-auto">
        {/* Decorative Elements */}
        <div className="hidden sm:block absolute -top-4 -left-4 w-24 h-24 bg-gray-200 rounded-full blur-2xl opacity-60"></div>
        <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 bg-gray-100 rounded-full blur-2xl opacity-60"></div>

        {/* Video Wrapper with Shadow & Border */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
          <ReactPlayer
            src={videoUrl}
            controls={true}
            width="100%"
            height="100%"
            className="aspect-video"
            config={{
                youtube: {
                  
                  rel: 0,
                },
              }}
          />
        </div>
      </div>

      {/* Optional Caption */}
      <p className="text-center text-gray-500 text-sm mt-6 sm:mt-8 max-w-lg mx-auto">
        Experience the journey that brought us here
      </p>
    </section>
  );
}
