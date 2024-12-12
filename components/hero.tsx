import React from 'react'
import { Icons } from './icons'

export function Hero() {
  return (
    <div className="relative min-h-screen bg-[#C4C4C4] flex flex-col items-center justify-center text-center gap-4">
      <div className="max-w-5xl flex flex-col items-start">
        <h1 className="text-[64px] leading-tight font-[700] mt-[200px] text-white drop-shadow-lg text-start">
          MOREM IPSUM DOLOR
          <br />
          SIT ADIPISCING ELIT.
        </h1>
        <p className="text-2xl text-white mb-10 opacity-90 text-start font-bold">
          Lorem ipsum dolor sit amet consectetur adipiscing elit
        </p>
        <button className="bg-[#3A3A3A] text-white px-10 py-4 -mt-6 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors mb-32 shadow-lg ">
          LEARN MORE
        </button>
      </div>

      <div className="w-screen border-t-[15px] border-white">
        <div className="grid grid-cols-3 gap-4 w-full bg-white">
          <div className="bg-[#C4C4C4] p-12 flex flex-col items-center justify-between border-white/20 min-h-[300px]">
            <h2 className="text-3xl font-bold text-white mb-auto">WHY US</h2>
            <button className="bg-[#3A3A3A] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors shadow-lg">
              LEARN MORE
            </button>
          </div>

          <div className="bg-[#C4C4C4] p-12 flex flex-col items-center justify-between border-r border-white/20 min-h-[300px] relative">
            <h2 className="text-3xl font-bold text-white mb-auto">WATCH THE VIDEO</h2>
            <button className="bg-[#3A3A3A] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors shadow-lg">
              WATCH NOW
            </button>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Icons.VideoPlayIcon />
            </div>
          </div>

          <div className="bg-[#C4C4C4] p-12 flex flex-col items-center justify-between min-h-[300px]">
            <h2 className="text-3xl font-bold text-white mb-auto">MARKETS</h2>
            <button className="bg-[#3A3A3A] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-700 transition-colors shadow-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
