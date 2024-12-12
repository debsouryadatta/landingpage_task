import React from 'react';

export function Franchising() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-16">
          <div className="flex-1 pl-8">
            <h2 className="text-[#333333] text-5xl font-[1000] mb-4 mt-20">FRANCHISING 101</h2>
            <p className="text-gray-600 mb-6">
              Get to know more about our franchise opportunities and discover how you can be a part of our success story.
            </p>
            <button className="bg-[#333333] text-white px-8 py-3 rounded-full hover:bg-[#444444] font-extrabold transition-colors">
              LEARN MORE
            </button>
          </div>
          <div className="flex-1">
            <div className="border-2 border-blue-500 w-full h-[400px] bg-[#F2F2F2]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
