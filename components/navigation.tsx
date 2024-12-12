'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
  return (
    <header className="fixed w-screen z-50">
      {/* Top black header */}
      <div className="bg-[#333333] h-20">
        <div className="container mx-auto px-4 h-full flex items-center justify-end space-x-6">
          <Button
            variant="ghost"
            className="text-white hover:text-gray-200 bg-[#AEAEAE] text-sm font-medium rounded-2xl h-8"
          >
            DOWNLOAD FRANCHISE PDF
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:text-gray-200 bg-[#AEAEAE] text-sm font-medium rounded-2xl h-8"
          >
            REQUEST FOR CONSIDERATION
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white h-16 border-b border-gray-200">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <Link href="/" className="w-48">
            <div className="w-full h-12 bg-[#E6E6E6]">
              {/* Logo placeholder */}
            </div>
          </Link>

          <div className="flex items-center space-x-16">
            <Link
              href="#why-us"
              className="text-[#666666] hover:text-[#333333] text-sm font-medium tracking-wide"
            >
              WHY US
            </Link>
            <Link
              href="#franchising"
              className="text-[#666666] hover:text-[#333333] text-sm font-medium tracking-wide"
            >
              FRANCHISING 101
            </Link>
            <Link
              href="#markets"
              className="text-[#666666] hover:text-[#333333] text-sm font-medium tracking-wide"
            >
              AVAILABLE MARKETS
            </Link>
            <Link
              href="#faqs"
              className="text-[#666666] hover:text-[#333333] text-sm font-medium tracking-wide"
            >
              FAQS
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
