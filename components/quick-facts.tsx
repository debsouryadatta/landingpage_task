'use client';
import React, { useState, useRef, ReactElement } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Play } from 'lucide-react';
import { Icons } from '@/components/icons';
import { Swiper as SwiperType } from 'swiper';

// Type definitions for component data
interface TabItem {
  id: string;
  label: string;
}

interface LeadershipItem {
  name: string;
  title: string;
}

interface FranchiseDetailItem {
  label: string;
  value?: string;
  info?: string;
}

// Component Props Type
interface QuickFactsProps {
  className?: string;
}

const QuickFacts: React.FC<QuickFactsProps> = ({ className = '' }) => {
  const [activeTab, setActiveTab] = useState<string>('why-now');
  const swiperRef = useRef<SwiperType | null>(null);

  const tabs: TabItem[] = [
    { id: 'why-now', label: 'WHY NOW' },
    { id: 'our-leadership', label: 'OUR LEADERSHIP' },
    { id: 'cost', label: 'HOW MUCH WILL IT COST?' },
    { id: 'financials', label: 'FINANCIALS' },
    { id: 'growth-markets', label: 'GROWTH MARKETS' },
  ];

  const tabComponents: Record<string, () => ReactElement> = {
    'why-now': () => <WhyNow />,
    'our-leadership': () => <OurLeadership />,
    cost: () => <FranchiseDetails />,
    financials: () => <Financials />,
    'growth-markets': () => <FranchiseMap />,
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const newActiveTab = tabs[swiper.activeIndex].id;
    setActiveTab(newActiveTab);
  };

  const handleTabClick = (tabId: string, index: number) => {
    setActiveTab(tabId);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div
      className={`mx-auto bg-[#AEAEAE] min-h-[55vh] flex flex-col items-center gap-1 my-8 ${className}`}
    >
      <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold w-full bg-[#4A4A4A] text-center text-white py-4 sm:py-6">
        QUICK FACTS
      </h1>

      {/* Tabs */}
      <div className="w-full px-4 md:w-[55%] flex flex-wrap justify-center gap-2 sm:gap-3 mt-3 sm:mt-5">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id, index)}
            className={`text-[8px] sm:text-[10px] md:text-[12px] text-white flex flex-col items-center font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'opacity-100'
                : 'opacity-70 hover:opacity-100'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="w-16 sm:w-20 md:w-24 bg-white h-[4px] sm:h-[6px] flex justify-center mt-1">
                <Play className="rotate-90 text-white size-3 sm:size-4 fill-white" />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Swiper Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="w-full md:w-[80%] mx-auto"
        onSlideChange={handleSlideChange}
        onSwiper={swiper => (swiperRef.current = swiper)}
        style={{
          '--swiper-navigation-color': '#ffffff',
          '--swiper-pagination-color': '#ffffff',
        }}
      >
        {tabs.map((tab, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center min-h-[45vh] p-4"
          >
            {activeTab === tab.id && React.createElement(tabComponents[tab.id])}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const WhyNow: React.FC = () => {
  const data: string[] = [
    'CALL OUT 1',
    'CALL OUT 2',
    'CALL OUT 3',
    'CALL OUT 4',
    'CALL OUT 5',
    'CALL OUT 6',
  ];
  return (
    <div className="w-full min-h-[45vh] grid grid-cols-2 sm:grid-cols-3 text-white place-content-center place-items-center gap-4 p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center font-light text-xs sm:text-sm"
        >
          <div className="w-20 h-20 sm:w-28 sm:h-28 border-[3px] rounded-full border-white mb-2"></div>
          {item}
        </div>
      ))}
    </div>
  );
};

const OurLeadership: React.FC = () => {
  const data: LeadershipItem[] = [
    { name: 'NAME', title: 'Title' },
    { name: 'NAME', title: 'Title' },
    { name: 'NAME', title: 'Title' },
    { name: 'NAME', title: 'Title' },
    { name: 'NAME', title: 'Title' },
    { name: 'NAME', title: 'Title' },
  ];
  return (
    <div className="w-full min-h-[45vh] grid grid-cols-2 md:grid-cols-3 gap-4 justify-center text-white p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center"
        >
          <div className="w-24 h-24 sm:w-28 sm:h-28 border-[4px] rounded-full bg-white mb-2"></div>
          <span className="font-semibold text-sm">{item.name}</span>
          <span className="font-semibold text-[8px] sm:text-[9px] leading-tight">
            {item.title}
          </span>
          <button className="font-light px-3 py-1 rounded-full bg-[#4A4A4A] mt-2 tracking-widest text-[8px] sm:text-[10px]">
            READ BIO
          </button>
        </div>
      ))}
    </div>
  );
};

const FranchiseDetails: React.FC = () => {
  const data: FranchiseDetailItem[] = [
    {
      label: 'NO FRANCHISE FEE FOR A LIMITED TIME (through end of 2021)',
      value: '$',
    },
    {
      label: 'AGREEMENT TERMS: 10 Years (renewable options available)',
      value: '$',
    },
    {
      label: 'FRANCHISE FEE (First Unit):*',
      value: '$',
      info: '(United States Only. International Fees will Differ)',
    },
    { label: 'MINIMUM LIQUID CAPITAL REQUIREMENTS:', value: '$' },
    { label: 'MINIMUM NET WORTH REQUIREMENTS:', value: '$' },
    {
      label: 'MINIMUM INVESTMENT:**',
      value: '$',
      info: '(Based on leased space of 5,000 sq. ft.)',
    },
    {
      label: 'ROYALTY:',
      info: '$ (**NO ROYALTY 1st 6 MONTHS)',
      value: '$',
    },
    { label: 'AGREEMENT TERMS:', value: '$' },
  ];

  return (
    <div className="text-white py-6 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-12 gap-y-2 border-b border-white pb-2 items-center"
            >
              <div className="col-span-9 sm:col-span-10">
                <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                {item.info && (
                  <div className="text-[8px] sm:text-[9px] mt-1">
                    {item.info}
                  </div>
                )}
              </div>
              <div className="col-span-3 sm:col-span-2 w-full flex justify-end text-xs sm:text-sm">
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] sm:text-xs text-center text-gray-200 mt-4">
          *Franchise fees may differ outside of the United States.
          <br />
          **Investment totals will vary depending on site selected, equipment
          package, leasehold improvements, deposits, construction costs, and
          other variables.
        </p>
      </div>
    </div>
  );
};

const Financials: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto min-h-[45vh] flex flex-col justify-center items-center space-y-4 p-4">
      <div className="text-2xl sm:text-3xl text-center font-extrabold text-white md:text-4xl">
        AVERAGE GROSS SALES
        <br />$
      </div>
      <div className="md:w-[60%] mx-auto text-center font-extralight text-[8px] sm:text-[9px] text-white">
        *Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolor
        rerum quasi odit vero asperiores minus architecto eos alias est
        incidunt, tempora Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Rem fugit saepe magnam expedita distinctio facilis quaerat quam
        fuga, necessitatibus cumque id blanditiis voluptates voluptatibus.
        Aliquid sunt incidunt alias accusamus placeat? earum quaerat cumque sit
        rem voluptates! Autem, itaque.*
      </div>
    </div>
  );
};

const FranchiseMap: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-auto items-center justify-between p-4 sm:p-8">
      {/* Left Text Content */}
      <div className="text-center md:text-left md:w-1/2 mb-4 md:mb-0">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-white tracking-wider">
          {`We're a growing wing franchise, taking on new territories. See where
          you could stake your claim`}
        </h2>
        <button className="bg-[#4A4A4A] text-sm sm:text-xl uppercase text-white px-4 sm:px-5 py-2 rounded-full">
          Learn More
        </button>
      </div>

      {/* Right Map Content */}
      <div className="md:w-1/2 flex flex-col items-center">
        <Icons.UsMap />
      </div>
    </div>
  );
};

export { QuickFacts };
