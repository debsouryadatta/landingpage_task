'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import VideoPlayerIcon from './video-player-icon';
import { Icons } from './icons';

interface Testimonial {
  id: number;
  videoUrl: string;
  clientName: string;
  testimonial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    videoUrl: '/videos/testimonial1.mp4',
    clientName: 'Client Name 1',
    testimonial: 'Testimonial text 1'
  },
  {
    id: 2,
    videoUrl: '/videos/testimonial2.mp4',
    clientName: 'Client Name 2',
    testimonial: 'Testimonial text 2'
  },
  {
    id: 3,
    videoUrl: '/videos/testimonial3.mp4',
    clientName: 'Client Name 3',
    testimonial: 'Testimonial text 3'
  },
  {
    id: 4,
    videoUrl: '/videos/testimonial4.mp4',
    clientName: 'Client Name 4',
    testimonial: 'Testimonial text 4'
  },
];

export function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full bg-[#AEAEAE]">
      <h1 className="text-4xl font-[700] text-white text-center mb-12 pt-10">
        WHAT CLIENTS ARE SAYING
      </h1>

      <div className="container mx-auto px-4">
        {/* Main Video Player */}
        <div className="relative w-[60%] mx-auto aspect-video bg-white rounded-lg shadow-lg mb-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <Icons.VideoPlayIcon className="w-48 h-48" />
          </div>
          
          {/* Custom Navigation Arrows */}
          <button 
            className="absolute left-[-200px] top-1/2 transform -translate-y-1/2 z-10 rounded-full p-4"
            onClick={() => {
              const newIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
              setActiveIndex(newIndex);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-[-200px] top-1/2 transform -translate-y-1/2 z-10"
            onClick={() => {
              const newIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
              setActiveIndex(newIndex);
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-6 max-w-[90%] mx-auto z-10 relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`bg-white p-6 rounded-lg shadow-lg h-[150px] transition-opacity duration-300 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-90'
                }`}
              >
                {/* <h3 className="font-bold text-lg mb-2">{testimonial.clientName}</h3>
                <p className="text-gray-600">{testimonial.testimonial}</p> */}
              </div>
            ))}
          </div>
          {/* White background section */}
          <div className="absolute bottom-0 left-[50%] -translate-x-[50%] w-screen h-16 bg-[#C4C4C4]" style={{ marginBottom: '-30px' }}></div>
        </div>
      </div>
    </div>
  );
}
