import React from 'react';
import { Icons } from './icons';

export function WhyUs() {
  return (
    <section className="w-full">
      <div className="">
        <h1 className="text-6xl font-bold bg-[#4A4A4A] text-white text-center pb-16 pt-20">WHY US</h1>

        {/* Financial Section */}
        <div className="bg-[#C4C4C4] py-12 mb-10">
          <h2 className="text-5xl font-bold text-center text-white">Financials</h2>
        </div>

        <div className="w-full -mt-10 border-t-[15px] border-b-[15px] border-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Investment */}
            <div className="bg-neutral-600 p-12 text-center">
              <h3 className="text-4xl font-extrabold text-white mb-8">INVESTMENT</h3>
              <div className="flex justify-center">
                <div className="w-[200px] h-[200px] text-white">
                  <Icons.whyUs className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-10 py-3 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* Financial Performance */}
            <div className="bg-neutral-600 p-12 text-center">
              <h3 className="text-4xl font-extrabold text-white mb-8">FINANCIAL PERFORMANCE</h3>
              <div className="flex justify-center -mt-10">
                <div className="w-[200px] h-[200px] text-white">
                  <Icons.financialPerformance className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-10 py-3 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* Why Franchisees Continue to Invest */}
            <div className="bg-neutral-600 p-12 text-center">
              <h3 className="text-4xl font-extrabold text-white mb-8">WHY FRANCHISEES CONTINUE TO INVEST</h3>
              <div className="flex justify-center -mt-10 -mb-[55px]">
                <div className="w-[250px] h-[250px] text-white">
                  <Icons.whyFranchises className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-10 py-3 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Research Section */}
      <div className="bg-[#C4C4C4] py-10">
        <h2 className="text-5xl font-bold text-center text-white">Research</h2>
      </div>

      {/* Bottom Section */}
      <div className="bg-white py-2 w-screen">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {/* Why Us */}
            <div className="bg-neutral-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">WHY US</h3>
              <div className="flex justify-center -mt-6">
                <div className="w-[180px] h-[180px] text-white">
                  <Icons.whyUs className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* Vision */}
            <div className="bg-neutral-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">VISION</h3>
              <div className="flex justify-center mb-[35px]">
                <div className="w-[120px] h-[120px] text-white">
                  <Icons.vision className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* The Business */}
            <div className="bg-neutral-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">THE BUSINESS</h3>
              <div className="flex justify-center -mt-6">
                <div className="w-[180px] h-[180px] text-white">
                  <Icons.theBusiness className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* System Support */}
            <div className="bg-neutral-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">SYSTEM SUPPORT</h3>
              <div className="flex justify-center -mt-10 -mb-[22px]">
                <div className="w-[180px] h-[180px] text-white">
                  <Icons.systemSupport className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>

            {/* Marketing Support */}
            <div className="bg-neutral-600 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-6">MARKETING SUPPORT</h3>
              <div className="flex justify-center -mt-10 -mb-[25px]">
                <div className="w-[180px] h-[180px] text-white">
                  <Icons.marketingSupport className="w-full h-full" />
                </div>
              </div>
              <button className="bg-gray-500 text-white px-8 py-2 rounded-full uppercase text-sm font-bold">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
