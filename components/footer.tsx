import React from 'react'

export function Footer() {
  return (
    <footer className="bg-[#2F3330] text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="w-full flex justify-center mb-12">
          <div className="bg-[#AEAEAE] w-[250px] h-[80px] rounded"></div>
        </div>
        <div className="flex justify-center items-center gap-6 text-center">
          <span className="text-sm font-medium tracking-widest">WHY US</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm font-medium tracking-widest">PROMOTIONAL IST</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm font-medium tracking-widest">AVAILABLE MARKETS</span>
          <span className="text-gray-500">|</span>
          <span className="text-sm font-medium tracking-widest">FAQS</span>
        </div>
        <div className="mt-8 text-center text-xs text-gray-400 max-w-2xl mx-auto tracking-wider leading-relaxed">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </footer>
  )
}
